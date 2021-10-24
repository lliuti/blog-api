import { IPostDTO } from "../../dtos/IPostDTO";
import { prismaClient } from "../../prisma";

class GetPostsService {
  async execute(): Promise<IPostDTO[]> {
    const posts = await prismaClient.post.findMany({
      orderBy: {
        created_at: "desc",
      },
      skip: 4,
    });

    return posts;
  }
}

export { GetPostsService };
