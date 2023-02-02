import { Request, Response } from "express";
import httpStatus from "http-status";
import { SignUpParams } from "../protocols";
import authenticationService from "../services/authentication-service";

export async function signUpPost(req: Request, res: Response) {
  const { userName, email, password } = req.body as SignUpParams;

  try {
    const user = await authenticationService.signUp({ userName, email, password });
    return res.status(httpStatus.CREATED).json({
      id: user.id,
      userName: user.userName,
      email: user.email,
    });
  } catch (error) {
    if (error.name === "DuplicatedEmailError") {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
