// src/server/router/_app.ts
import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { exampleRouter } from "./example";

import {PokemonClient } from "pokenode-ts"
import { prisma } from "../../db/client";
import { TRPCError } from "@trpc/server";
const api = new PokemonClient();

export const appRouter = router({
  example: exampleRouter,
  pokemonId: publicProcedure.input(z.object({id: z.number()})).query(async ({input}) => {
    const pokemon = await prisma.pokemon.findFirst({where:{id: input.id}})
    if(!pokemon) throw new Error("lol doesn't exist")
    return pokemon
  }),
  pokemonVoteUpdate: publicProcedure.input(z.object({votedFor: z.number(), votedAgainst: z.number()})).mutation(async ({input}) => {
    const voteInDb = await prisma.vote.create({
      data: {
        votedForId: input.votedFor,
        votedAgainstId: input.votedAgainst,
      }
    })


    return {"success": true, vote: voteInDb}
  })
});

// export type definition of API
export type AppRouter = typeof appRouter;
