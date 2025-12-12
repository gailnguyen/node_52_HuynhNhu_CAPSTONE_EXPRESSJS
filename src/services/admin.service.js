import { BadRequestException } from "../common/helpers/exception.helper.js";
import prisma from "../common/prisma/connect.prisma.js";

export const adminService = {
  getAllUsers: async function (req) {
    const allUsers = await prisma.users.findMany();
    return allUsers;
  },

  getSavedPicByUserId: async function (req) {
    const userId = req.params.id;
    const userExistCheck = await prisma.users.findUnique({
      where: {
        id: Number(userId),
      },
    });
    if (!userExistCheck) {
      throw new BadRequestException("User không tồn tại");
    }
    const pictures = await prisma.savePictures.findMany({
      where: { userId: Number(userId) },
    });
    return pictures;
  },

  getPicByCreateId: async function (req) {
    const userId = req.params.id;
    const userExistCheck = await prisma.users.findUnique({
      where: {
        id: Number(userId),
      },
    });
    if (!userExistCheck) {
      throw new BadRequestException("User không tồn tại");
    }
    const pictures = await prisma.pictures.findMany({
      where: {
        userId: Number(userId),
      },
    });
    return pictures;
  },

  delete: async function (req) {
    const picId = req.params.id;
    const picExistCheck = await prisma.pictures.findUnique({
      where: {
        id: Number(picId),
      },
    });
    if (!picExistCheck) {
      throw new BadRequestException("Ảnh không tồn tại");
    }
    await prisma.comments.deleteMany({
      where: {
        picId: Number(picId),
      },
    });
    await prisma.savePictures.deleteMany({
      where: {
        picId: Number(picId),
      },
    });
    const result = await prisma.pictures.delete({
      where: {
        id: Number(picId),
      },
    });
    return `Remove a picure id: ${req.params.id} successfully`;
  },
};
