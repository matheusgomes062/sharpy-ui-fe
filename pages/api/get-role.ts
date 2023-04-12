import { Role } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../prisma/client";

async function GetRoleById(req: NextApiRequest, res: NextApiResponse<Role | null>) {
  try {
    const { id } = req.query;
    const result = await prisma.role.findUnique({
      where: { id: parseInt(id as string) },
    });
    res.status(200).json(result);
  } catch (err: any) {
    console.log(err);
    res.status(403);
  }
}

export default GetRoleById;