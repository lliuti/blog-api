import { Router } from "express";
import { CreatePostController } from "./controllers/Post/CreatePostController";
import { AuthenticateUserController } from "./controllers/User/AuthenticateUserController";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

router.post("/users", new CreateUserController().handle);

router.post("/auth", new AuthenticateUserController().handle);

router.post("/posts", ensureAuthenticated, new CreatePostController().handle);

export { router };
