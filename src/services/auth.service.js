import { BadRequestException } from "../common/helpers/exception.helper.js";
import prisma from "../common/prisma/connect.prisma.js";
import bcrypt from "bcrypt";
import tokenService from "./token.service.js";

export const authService = {
  register: async function (req) {
    const { email, password, fullName, age } = req.body;
    console.log({ email, password, fullName, age });
    const userExist = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });
    if (userExist) {
      throw new BadRequestException(
        "Email đã đăng ký tài khoản, vui lòng dùng email khác thử lại."
      );
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const userNew = await prisma.users.create({
      data: {
        email: email,
        password: hashPassword,
        fullName: fullName,
        age: age,
      },
    });
    delete userNew.password;
    return userNew;
  },

  login: async function (req) {
    const { email, password } = req.body;
    const userExist = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });
    if (!userExist) {
      throw new BadRequestException("Tài khoản chưa đăng ký, vui lòng đăng ký");
    }
    const isPassword = bcrypt.compareSync(password, userExist.password);
    if (!isPassword) {
      throw new BadRequestException("Mật khẩu không chính xác");
    }
    const token = tokenService.createTokens(userExist.id);
    console.log(token);
    return token;
  },

  refreshToken: async function (req) {
    const { accessToken, refreshToken } = req.body;

    const decodeAccessToken = tokenService.verifyAccessToken(accessToken, {
      ignoreExpiration: true,
    });

    const decodeRefreshToken = tokenService.verifyRefreshToken(refreshToken);

    if (decodeAccessToken.userId !== decodeRefreshToken.userId) {
      throw new UnauthorizedException("Token không hợp lệ");
    }

    const userExist = await prisma.users.findUnique({
      where: {
        id: decodeAccessToken.userId,
      },
    });

    if (!userExist) {
      throw new UnauthorizedException("User không hợp lệ");
    }

    const tokens = tokenService.createTokens(userExist.id);

    console.log({
      accessToken,
      refreshToken,
      decodeAccessToken,
      decodeRefreshToken,
    });
    return tokens;
  },
};
