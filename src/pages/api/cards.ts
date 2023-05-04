import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export async function getCards() {
  const prisma = new PrismaClient()
  const cards = await prisma.cards.findMany()
  // Forth: Je trouve plus propre que ce soit un objet, car un json est un objet
  return { cards }
}

// Forth: J'ai ajouté un type pour symplifier ca
type Data = PromiseReturnType<typeof getCards>

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(await getCards())
}
