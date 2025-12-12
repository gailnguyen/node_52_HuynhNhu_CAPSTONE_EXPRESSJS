import { statusCodes } from "./status-code.helper.js";

export class BadRequestException extends Error {
  constructor(message = "BadRequestException") {
    super(message);
    this.code = statusCodes.BAD_REQUEST;
  }
}

export class UnauthorizedException extends Error {
  constructor(message = "UnauthorizedException") {
    super(message);
    this.code = statusCodes.UNAUTHORIZED;
  }
}

export class ForbiddenException extends Error {
  constructor(message = "ForbiddenException") {
    super(message);
    this.code = statusCodes.FORBIDDEN;
  }
}

export class NotFoundException extends Error {
  constructor(message = "NotFoundException") {
    super(message);
    this.code = statusCodes.NOT_FOUND;
  }
}
