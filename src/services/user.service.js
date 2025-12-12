import cloudinary from "../common/cloudinary/init.cloudinary.js";
import prisma from "../common/prisma/connect.prisma.js";

export const userService = {
  updateAvatar: async function (req) {
    // upload stream method
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: "" }, (error, uploadResult) => {
          if (error) {
            return reject(error);
          }
          return resolve(uploadResult);
        })
        .end(req.file.buffer);
    });
    await prisma.users.update({
      where: {
        id: req.user.id,
      },
      data: {
        avatar: uploadResult.public_id,
      },
    });
    if (req.user.avatar) {
      cloudinary.uploader.destroy(req.user.avatar);
    }
    return `Update avatar done`;
  },

  updateUserInfo: async function (req) {
    const userId = req.user.id;
    const { fullName, age, password } = req.body;
    const updateInfo = await prisma.users.update({
      where: {
        id: Number(userId),
      },
      data: {
        ...(fullName !== undefined && { fullName }),
        ...(age !== undefined && { age }),
        ...(password !== undefined && { password }),
      },
    });
    return updateInfo;
  },
};
