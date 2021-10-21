import { Request, Response } from "express";
import { GetPostsService } from "../../services/Post/GetPostsService";

class GetPostsController {
  async handle(request: Request, response: Response) {
    const service = new GetPostsService();
    try {
      const result = await service.execute();
      return response.json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }
}

export { GetPostsController };
