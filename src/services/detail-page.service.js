import {
  BadRequestException,
  NotFoundException,
} from "../common/helpers/exception.helper.js";
import prisma from "../common/prisma/connect.prisma.js";

export const detailPageService = {
  getPicInfo: async function (req) {
    let { id } = req.params;
    id = Number(id);
    const picInfo = await prisma.pictures.findUnique({
      where: {
        id: id,
      },
    });

    if (!picInfo) {
      throw new NotFoundException("Không tìm thấy ảnh trên hệ thống");
    }

    const createPicUser = await prisma.users.findUnique({
      where: {
        id: picInfo.userId,
      },
      omit: { password: true, email: true, age: true },
    });

    delete picInfo.userId;

    return { ...picInfo, createPicUser };
  },

  getPicComment: async function (req) {
    const pictureId = req.params.id;

    const picExistCheck = await prisma.pictures.findUnique({
      where: {
        id: Number(pictureId),
      },
    });

    if (!picExistCheck) {
      throw new BadRequestException("Ảnh không tồn tại");
    }

    const listComments = await prisma.comments.findMany({
      where: {
        picId: Number(pictureId),
      },
      include: {
        user: {
          select: {
            fullName: true,
            avatar: true,
          },
        },
      },
    });

    return listComments;
  },

  getSaveInfo: async function (req) {
    const pictureId = req.params.id;
    const userId = req.user.id;

    const picExistCheck = await prisma.pictures.findUnique({
      where: {
        id: Number(pictureId),
      },
    });

    if (!picExistCheck) {
      throw new BadRequestException("Ảnh không tồn tại");
    }

    const checkSaved = await prisma.savePictures.findMany({
      where: {
        picId: Number(pictureId),
        userId: userId,
      },
    });

    return {
      isSaved: checkSaved.length == 0 ? false : true,
    };
  },

  postComment: async function (req) {
    const picId = req.params.id;
    const userId = req.user.id;
    const comment = req.body.comment;

    const picExistCheck = await prisma.pictures.findUnique({
      where: {
        id: Number(picId),
      },
    });

    if (!picExistCheck) {
      throw new BadRequestException("Ảnh không tồn tại");
    }

    const newComment = await prisma.comments.create({
      data: {
        userId: userId,
        picId: Number(picId),
        comment: comment,
      },
    });

    return newComment;
  },
};
