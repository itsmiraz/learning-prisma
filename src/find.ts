import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const result = await prisma.post.findMany();

  const findFirst = await prisma.post.findFirst({
    where: {
      id: 1,
    },
  });
  console.log(findFirst);
};
main();
