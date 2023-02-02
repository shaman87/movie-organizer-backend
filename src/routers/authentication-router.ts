import { Router } from "express";
import { signUpPost } from "../controllers";
import { validateBody } from "../middlewares/validation-middleware";
import { signUpSchema } from "../schemas";

const authenticationRouter = Router();

authenticationRouter.post("/sign-up", validateBody(signUpSchema), signUpPost);

export { authenticationRouter };
