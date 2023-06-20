// src/server/router/_app.ts
import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const appRouter = router({
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
