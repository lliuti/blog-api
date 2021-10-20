import { Router } from "express";
import { CreatePostController } from "./controllers/Post/CreatePostController";
import { CreateUserController } from "./controllers/User/CreateUserController";

const router = Router();

router.post("/users", new CreateUserController().handle);
router.post("/posts", new CreatePostController().handle);

export { router };
