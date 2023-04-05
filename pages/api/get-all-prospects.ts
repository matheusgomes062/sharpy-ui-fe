import { PrismaClient, Prospects } from "@prisma/client";

const prisma = new PrismaClient();

async function GetProspects(_req: { body: any; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: Prospects[]): void; new(): any; }; }; }) {
  try {
    const result = await prisma.prospects.findMany();
    res.status(200).json(result);
    await prisma.$disconnect();
  } catch (err) {
    console.log(err);
    res.status(403);
    await prisma.$disconnect();
  }
}

export default GetProspects;