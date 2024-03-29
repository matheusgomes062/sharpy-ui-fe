import { Role } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../prisma/client"

async function GetRoles(_req: NextApiRequest, res: NextApiResponse<Role[] | null>) {
  try {
    const result = await prisma.role.findMany();
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(403);
  }
}

export default GetRoles;