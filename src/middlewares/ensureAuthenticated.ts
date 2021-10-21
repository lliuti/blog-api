import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface IPayload {
  sub: string;
}

export const ensureAuthenticated = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { authorization } = request.headers;

  const token = authorization.split(" ")[1];

  if (!token || !authorization) {
    return response.status(401).json({ error: "Missing token" });
  }

  try {
    const { sub } = jwt.verify(token, process.env.JWT_SECRET) as IPayload;

    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).json({ error: err.message });
  }
};
