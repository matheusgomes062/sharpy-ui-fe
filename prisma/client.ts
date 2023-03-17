import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  const user = await prisma.user.create({
    data: {
      name: 'Gomes',
      email: 'gomes@sharpy.dev',
      surname: 'De Paula',
      cv: 'app.rezi.ai/s/pjj4bdj2XZTaGtmWhpL2',
      acceptedPrivacyPolitics: true,
      roleId: 1
    },
  })
  console.log(user)
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