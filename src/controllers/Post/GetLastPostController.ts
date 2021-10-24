import { Request, Response } from "express";
import { GetLastPostService } from "../../services/Post/GetLastPostService";

class GetLastPostController {
  async handle(request: Request, response: Response) {
    const service = new GetLastPostService();

    try {
      const result = await service.execute();
      return response.json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }
}

export { GetLastPostController };
