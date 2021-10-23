import axios from "axios";
import jwt from "jsonwebtoken";
import { IGithubDTO } from "../../dtos/IGithubDTO";
import { prismaClient } from "../../prisma";

interface IAccessTokenResponse {
  access_token: string;
}

class CreateUserService {
  async execute(code: string) {
    const accessTokenUrl = `https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}&code=${code}`;

    const { data: accessTokenResponse } =
      await axios.post<IAccessTokenResponse>(accessTokenUrl, null, {
        headers: {
          Accept: "application/json",
        },
      });

    const { access_token } = accessTokenResponse;

    const response = await axios.get<IGithubDTO>(
      "https://api.github.com/user",
      {
        headers: {
          authorization: `Bearer ${access_token}`,
        },
      }
    );

    const { login, name, avatar_url } = response.data;

    let user = await prismaClient.user.findFirst({
      where: {
        github_username: login,
      },
    });

    if (!user) {
      user = await prismaClient.user.create({
        data: {
          github_username: login,
          name,
          avatar_url,
        },
      });
    }

    const token = jwt.sign(
      {
        user: {
          id: user.id,
          github_username: user.github_username,
          name: user.name,
          avatar_url: user.avatar_url,
        },
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
        subject: user.id,
      }
    );

    return { token, user };
  }
}

export { CreateUserService };
