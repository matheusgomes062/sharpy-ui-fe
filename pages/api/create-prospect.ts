import { Prospects } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/client";

async function GetProspects(req: NextApiRequest, res: NextApiResponse<Prospects | null>) {
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