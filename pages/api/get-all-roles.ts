import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

async function GetRoles(_req: { body: any; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: Role[]): void; new(): any; }; }; }) {
  try {
    const result = await prisma.role.findMany();
    res.status(200).json(result);
    await prisma.$disconnect();
  } catch (err) {
    console.log(err);
    res.status(403);
    await prisma.$disconnect()
  }
}

export default GetRoles;