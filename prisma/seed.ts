import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const software_engineer = await prisma.role.upsert({
    where: { id: 1 },
    update: {},
    create: {
      role: 'Banco de Talentos',
      isRemote: true,
      country: 'Brazil',
      description: 'Work as always',
      area: 'IT',
      prospects: {
        create: [
          {
            email: 'matheusgomes062@gmail.com',
            name: 'Matheus',
            surname: 'Gomes',
            cv: 'test.url',
            coverLetter: 'none',
            acceptedPrivacyPolitics: true,
          },
          {
            email: 'rambo@gmail.com',
            name: 'Jhonatan',
            surname: 'Rambo',
            cv: 'test.url',
            coverLetter: 'test',
            acceptedPrivacyPolitics: true,
          },
          {
            email: 'siqueira@gmail.com',
            name: 'Mateus',
            surname: 'Siqueira',
            cv: 'test.url',
            coverLetter: 'test',
            acceptedPrivacyPolitics: true,
          },
        ]
      },
    },
  })
  console.log({ software_engineer })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })