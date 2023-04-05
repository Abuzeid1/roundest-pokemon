// src/server/router/_app.ts
import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { exampleRouter } from "./example";

import { PokemonClient } from "pokenode-ts";

import { getOptionsForVote } from "../../../utils/getRandomPokemon";
const api = new PokemonClient();

export const appRouter = router({
  example: exampleRouter,
  pokemonPair: publicProcedure.query(async ({ ctx }) => {
    const [id1, id2] = getOptionsForVote();

    const pokemonPair = await ctx.prisma.pokemon.findMany({
      where: { OR: [{ id: id1 }, { id: id2 }] },
    });
    if (!pokemonPair) throw new Error("lol doesn't exist");

    const [firstPokemon, secondPokemon] = pokemonPair;

    return { firstPokemon, secondPokemon };
  }),

  pokemonVoteUpdate: publicProcedure
    .input(z.object({ votedFor: z.number(), votedAgainst: z.number() }))
    .mutation(async ({ input, ctx }) => {
      const voteInDb = await ctx.prisma.vote.create({
        data: {
          votedForId: input.votedFor,
          votedAgainstId: input.votedAgainst,
        },
      });

      return { success: true, vote: voteInDb };
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
