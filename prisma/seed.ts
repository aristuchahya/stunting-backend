import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.fuzzyRule.createMany({
    data: [
      {
        ageRange: '0-6 bulan',
        weightMin: 2.5,
        weightMax: 4.5,
        heightMin: 45,
        heightMax: 65,
        output: 'STUNTING',
      },
      {
        ageRange: '0-6 bulan',
        weightMin: 4.6,
        weightMax: 6.5,
        heightMin: 66,
        heightMax: 75,
        output: 'NORMAL',
      },
      {
        ageRange: '6-12 bulan',
        weightMin: 5.5,
        weightMax: 8.5,
        heightMin: 65,
        heightMax: 80,
        output: 'STUNTING',
      },
      {
        ageRange: '6-12 bulan',
        weightMin: 8.6,
        weightMax: 10.5,
        heightMin: 81,
        heightMax: 90,
        output: 'NORMAL',
      },
      {
        ageRange: '12-24 bulan',
        weightMin: 8.0,
        weightMax: 12.0,
        heightMin: 75,
        heightMax: 90,
        output: 'STUNTING',
      },
      {
        ageRange: '12-24 bulan',
        weightMin: 12.1,
        weightMax: 15.0,
        heightMin: 91,
        heightMax: 100,
        output: 'NORMAL',
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
