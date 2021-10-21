import { IPostDTO } from "../../dtos/IPostDTO";
import { prismaClient } from "../../prisma";

class GetRecentPostsService {
  async execute(): Promise<IPostDTO[]> {
    const posts = await prismaClient.post.findMany({
      orderBy: {
        created_at: "desc",
      },
      take: 3,
    });

    return posts;
  }
}

export { GetRecentPostsService };