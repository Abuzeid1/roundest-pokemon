// src/server/router/_app.ts
import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { exampleRouter } from "./example";

import {PokemonClient } from "pokenode-ts"
import { prisma } from "../../db/client";
const api = new PokemonClient();

export const appRouter = router({
  example: exampleRouter,
  pokemonId: publicProcedure.input(z.object({id: z.number()})).query(async ({input}) => {
    const pokemon = await api.getPokemonById(input.id)
    return {name: pokemon.name, sprites: pokemon.sprites}
  }),
  pokemonVoteUpdate: publicProcedure.input(z.object({votedFor: z.number(), votedAgainst: z.number()})).mutation(async ({input}) => {
    const voteInDb = await prisma.vote.create({
      data: {
        ...input
      }
    })


    return {"success": true, vote: voteInDb}
  })
});

// export type definition of API
export type AppRouter = typeof appRouter;
