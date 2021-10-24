import { IPostDTO } from "../../dtos/IPostDTO";
import { prismaClient } from "../../prisma";

class GetRecentPostsService {
  async execute(): Promise<IPostDTO[]> {
    const posts = await prismaClient.post.findMany({
      orderBy: {
        created_at: "desc",
      },
      take: 3,
      skip: 1,
    });

    if (!posts) {
      throw new Error("Not enough posts registered!");
    }

    return posts;
  }
}

export { GetRecentPostsService };
