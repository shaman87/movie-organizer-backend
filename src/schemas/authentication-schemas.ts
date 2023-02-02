import Joi from "joi";
import { SignUpParams } from "../protocols";

export const signUpSchema = Joi.object<SignUpParams>({
  userName: Joi.string().min(2).max(255).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
