import { IPostDTO } from "../../dtos/IPostDTO";
import { prismaClient } from "../../prisma";

class CreatePostService {
  async execute({ title, description, content, tags, user_id }: IPostDTO) {
    let post = await prismaClient.post.findFirst({
      where: {
        title: title,
      },
    });

    if (post) {
      throw new Error("There is already a post with this title!");
    }

    post = await prismaClient.post.create({
      data: {
        title: title,
        description: description,
        content: content,
        tags: tags,
        author_id: user_id,
      },
      include: {
        author: {
          select: {
            name: true,
            github_username: true,
          },
        },
      },
    });

    return post;
  }
}

export { CreatePostService };
