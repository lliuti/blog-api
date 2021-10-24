-- AlterTable
ALTER TABLE "posts" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "tags" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "avatar_url" DROP DEFAULT,
ALTER COLUMN "github_username" DROP DEFAULT;
