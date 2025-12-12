import prisma from "../common/prisma/connect.prisma.js";

export const mainPageService = {
  getAllPictures: async function (req) {
    let { page, limit } = req.query;
    const pageDefault = 1;
    const limitDefault = 3;
    page = Math.max(pageDefault, Number(page) || pageDefault);
    limit = Math.max(limitDefault, Number(limit) || limitDefault);
    const index = (page - 1) * limit;

    const listPictures = await prisma.pictures.findMany({
      skip: index,
      take: limit,
    });

    return listPictures;
  },

  getPictureByName: async function (req) {
    let { name } = req.query;

    const pictures = await prisma.pictures.findMany({
      where: {
        picName: {
          contains: name,
        },
      },
    });

    return pictures;
  },
};
