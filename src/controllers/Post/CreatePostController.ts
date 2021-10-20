import { Request, Response } from "express";
import { IPostDTO } from "../../dtos/IPostDTO";
import { CreatePostService } from "../../services/Post/CreatePostService";

class CreatePostController {
  async handle(request: Request, response: Response) {
    const { title, description, content, tags }: IPostDTO = request.body;

    // const { user_id } = request;
    const user_id = "2c1b314a-1f4d-4826-9b78-1822e28d195c";

    const service = new CreatePostService();
    try {
      const result = await service.execute({
        title,
        description,
        content,
        tags,
        user_id,
      });
      return response.status(201).json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }
}

export { CreatePostController };
