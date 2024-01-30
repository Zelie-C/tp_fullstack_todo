// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient()

type Data = {
  message: string;
};

export default async function findUser (
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { username } = req.query

  try {
    console.log("Recherche de l'utilisateur avec le nom:", username);

    const findOneUser = await prisma.user.findUnique({
      where: {
        name: username as String
      }
    })
    console.log("Résultat de la recherche:", findOneUser);

    if (findOneUser) {
      res.status(200).json({ message: "Utilisateur trouvé " + findOneUser.name });
    } else {
      res.status(404).json({ message: "Utilisateur non trouvé" });
    }
  } catch(error) {
    console.error("User non trouvé")
  }
}
