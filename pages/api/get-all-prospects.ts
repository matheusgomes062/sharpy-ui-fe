import { Prospects } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../prisma/client";

async function GetProspects(_req: NextApiRequest, res: NextApiResponse<Prospects[] | null>) {
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