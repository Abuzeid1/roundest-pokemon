"use server";

import { prisma } from "../server/db/client";

export default async function voteForRoundest(
  firstId: number,
  secondId: number,
) {
  try {
    await prisma.vote.create({
      data: {
        votedForId: firstId,
        votedAgainstId: secondId,
      },
    });
  } catch (error) {
    console.log(error);
  }
}
