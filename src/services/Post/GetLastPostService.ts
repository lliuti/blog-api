import { prismaClient } from "../../prisma";

class GetLastPostService {
  async execute() {
    const lastPost = await prismaClient.post.findFirst({
      orderBy: {
        created_at: "desc",
      },
      take: 1,
    });

    if (!lastPost) {
      throw new Error("There is no post registered!");
    }

    return lastPost;
  }
}

export { GetLastPostService };
