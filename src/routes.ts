import { Router } from "express";
import { CreatePostController } from "./controllers/Post/CreatePostController";
import { GetRecentPostsController } from "./controllers/Post/GetRecentPostsController";
import { AuthenticateUserController } from "./controllers/User/AuthenticateUserController";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

router.post("/users", new CreateUserController().handle);

router.post("/auth", new AuthenticateUserController().handle);

router.post("/posts", ensureAuthenticated, new CreatePostController().handle);
router.get("/posts/recent", new GetRecentPostsController().handle);

export { router };
