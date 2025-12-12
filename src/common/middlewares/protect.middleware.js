import tokenService from "../../services/token.service.js";
import { UnauthorizedException } from "../helpers/exception.helper.js";
import prisma from "../prisma/connect.prisma.js";

const protect = async (req, res, next) => {
  const authKey = req.headers.authorization;

  if (!authKey) {
    throw new UnauthorizedException("Không có quyền truy cập");
  }

  const [type, accessToken] = authKey.split(" ");

  if (type !== "Bearer") {
    throw new UnauthorizedException("Token không hợp lệ");
  }

  if (!accessToken) {
    throw new UnauthorizedException("Token không hợp lệ");
  }

  const { userId } = tokenService.verifyAccessToken(accessToken);

  const userExist = await prisma.users.findUnique({
    where: { id: userId },
  });

  if (!userExist) {
    throw new UnauthorizedException("Không có người dùng này trong hệ thống");
  }
  req.user = userExist;

  next();
};

export default protect;
