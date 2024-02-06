import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { faker } from "@faker-js/faker";
async function main() {
  await prisma.todo.createMany({
    data: Array.from({ length: 10 }, () => ({
      title: faker.word.words(2),
      description: faker.lorem.paragraphs(5),
    })),
  });
}
main()
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
1;
