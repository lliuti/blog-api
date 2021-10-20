import { Request, Response } from "express";
import { IPostDTO } from "../../dtos/IPostDTO";
import { CreatePostService } from "../../services/Post/CreatePostService";

class CreatePostController {
  async handle(request: Request, response: Response) {
    const { title, description, content, tags }: IPostDTO = request.body;

    const { user_id } = request;

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
