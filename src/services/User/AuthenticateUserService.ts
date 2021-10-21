import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import { prismaClient } from "../../prisma";

class AuthenticateUserService {
  async execute({ email, password }) {
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new Error("User not found!");
    }

    const doesPasswordMatch = await compare(password, user.password);

    if (!doesPasswordMatch) {
      throw new Error("Incorrect password!");
    }

    const token = jwt.sign(
      {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
        subject: user.id,
      }
    );

    return { token };
  }
}

export { AuthenticateUserService };
