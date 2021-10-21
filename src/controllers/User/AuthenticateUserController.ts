import { Request, Response } from "express";
import { AuthenticateUserService } from "../../services/User/AuthenticateUserService";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const service = new AuthenticateUserService();

    try {
      const result = await service.execute({ email, password });
      return response.json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }
}

export { AuthenticateUserController };
