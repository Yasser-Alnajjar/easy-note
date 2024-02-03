import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { faker } from "@faker-js/faker";
async function main() {
  await prisma.user.createMany({
    data: Array.from({ length: 10 }, () => ({
      name: faker.internet.userName(),
      email: faker.internet.email(),
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
