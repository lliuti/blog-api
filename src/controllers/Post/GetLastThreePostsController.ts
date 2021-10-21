import { Request, Response } from "express";
import { GetLastThreePostsService } from "../../services/Post/GetLastThreePostsService";

class GetLastThreePostsController {
  async handle(request: Request, response: Response) {
    const service = new GetLastThreePostsService();

    try {
      const result = await service.execute();
      return response.json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }
}

export { GetLastThreePostsController };
