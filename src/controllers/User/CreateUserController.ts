import { Request, Response } from "express";
import { IUserDTO } from "../../dtos/IUserDTO";
import { CreateUserService } from "../../services/User/CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password }: IUserDTO = request.body;

    const service = new CreateUserService();

    try {
      const result = await service.execute({ name, email, password });
      return response.status(201).json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }
}

export { CreateUserController };
