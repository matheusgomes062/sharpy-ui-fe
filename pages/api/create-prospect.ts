import { PrismaClient, Prospects } from "@prisma/client";

const prisma = new PrismaClient();

async function GetProspects(req: { body: any; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: Prospects): void; new(): any; }; }; }) {
  try {
    const data = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    const result = await prisma.prospects.create({
      data: {
        acceptedPrivacyPolitics: data.acceptedPrivacyPolitics,
        cv: data.cv,
        email: data.email,
        name: data.name,
        surname: data.surname,
        coverLetter: data.coverLetter,
        roleId: data.roleId,
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

export default GetProspects;