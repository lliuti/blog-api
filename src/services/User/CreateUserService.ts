import { hash } from "bcryptjs";
import { IUserDTO } from "../../dtos/IUserDTO";
import { prismaClient } from "../../prisma";

class CreateUserService {
  async execute({ name, email, password }: IUserDTO) {
    const hashedPassword = await hash(password, 8);

    let user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      user = await prismaClient.user.create({
        data: {
          name: name,
          email: email,
          password: hashedPassword,
        },
      });
    }

    return user;
  }
}

export { CreateUserService };
