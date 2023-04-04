import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

async function getProspects(req: { body: any; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: Role): void; new(): any; }; }; }) {
  try {
    const data = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    const result = await prisma.role.create({
      data: {
        role: data.role,
        isRemote: data.isRemote,
        country: data.country,
        description: data.description,
        area: data.area
      },
    });
    res.status(200).json(result);
    await prisma.$disconnect();
  } catch (err) {
    console.log(err);
    res.status(403);
    await prisma.$disconnect();
  }
}

export default getProspects;