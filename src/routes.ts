import { Router } from "express";
import { CreatePostController } from "./controllers/Post/CreatePostController";
import { GetLastThreePostsController } from "./controllers/Post/GetLastThreePostsController";
import { AuthenticateUserController } from "./controllers/User/AuthenticateUserController";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

router.post("/users", new CreateUserController().handle);

router.post("/auth", new AuthenticateUserController().handle);

router.post("/posts", ensureAuthenticated, new CreatePostController().handle);
router.get("/posts/recent", new GetLastThreePostsController().handle);

export { router };
