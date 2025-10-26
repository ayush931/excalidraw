import { JWT_TOKEN } from '@repo/backend-common/config';
import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';


export function middleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers['authorization'] ?? '';

  const decode = jwt.verify(token, JWT_TOKEN);

  if (decode) {
    //@ts-ignore
    req.userId = decode.userId;
    next()
  }
  else {
    res.status(300).json({
      message: 'Unauthorized'
    })
  }
}