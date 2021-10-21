import { Request, Response } from "express";
import { GetRecentPostsService } from "../../services/Post/GetRecentPostsService";

class GetRecentPostsController {
  async handle(request: Request, response: Response) {
    const service = new GetRecentPostsService();

    try {
      const result = await service.execute();
      return response.json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }
}

export { GetRecentPostsController };
