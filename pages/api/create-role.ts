import { Role } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../prisma/client";

async function GetProspects(req: NextApiRequest, res: NextApiResponse<Role | null>) {
  try {
    const data = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    const result = await prisma.role.create({
      data: {
        role: data.role,
        journey: data.journey,
        modality: data.modality,
        country: data.country,
        description: data.description,
        area: data.area
      },
    });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(403);
  }
}

export default GetProspects;