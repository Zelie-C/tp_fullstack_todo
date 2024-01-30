import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function handlerUserRequest (
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
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
  if (req.method === 'POST') {
    const { name } = req.body

    try {
      const newUser = await prisma.user.create({
        data: {
          name
        }
      })

      res.status(200).json({user: name});
    } catch(error) {
      console.error('Erreur création user :', error)
    }
  }
}
