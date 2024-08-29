import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.role.upsert({
    where: { id: 1, enumerator: 'admin' },
    update: {},
    create: { enumerator: 'admin' },
  });
  await prisma.role.upsert({
    where: { id: 2, enumerator: 'default' },
    update: {},
    create: { enumerator: 'default' },
  });

  console.log('Roles inserted successfully');

  await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      username: 'admin',
      email: 'admin@email.com',
      password: 'admin',
      document_number: '12345678900',
      role_id: 1,
    },
  });

  await prisma.user.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      username: 'user',
      email: 'user@email.com',
      password: 'user',
      document_number: '12345678901',
      role_id: 2,
    },
  });

  await prisma.user.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      username: 'buyer.user',
      email: 'buyer.user@email.com',
      password: 'buyer.user',
      document_number: '12345678902',
      role_id: 2,
    },
  });

  await prisma.user.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      username: 'seller.user',
      email: 'seller.user@email.com',
      password: 'seller.user',
      document_number: '12345678903',
      role_id: 2,
    },
  });

  console.log('Users inserted successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
