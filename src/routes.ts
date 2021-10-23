import { Router } from "express";
import { CreatePostController } from "./controllers/Post/CreatePostController";
import { GetPostsController } from "./controllers/Post/GetPostsController";
import { GetRecentPostsController } from "./controllers/Post/GetRecentPostsController";
import { AuthenticateUserController } from "./controllers/User/AuthenticateUserController";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

router.post("/users", new CreateUserController().handle);

router.post("/auth", new AuthenticateUserController().handle);
router.post("/auth/github", new CreateUserController().handle);

router.get("/github", (request, response) => {
  response.json({
    client_id: process.env.GITHUB_CLIENT_ID,
    redirect_uri: process.env.GITHUB_REDIRECT_URI,
  });
});

router.post("/posts", ensureAuthenticated, new CreatePostController().handle);
router.get("/posts/recent", new GetRecentPostsController().handle);
router.get("/posts", new GetPostsController().handle);

export { router };
