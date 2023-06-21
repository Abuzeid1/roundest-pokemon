import pokemons from "./pokemons";
import { z } from "zod";
import type { Pokemon } from "@prisma/client";
const MAX_DEX_id = 493;

const pokemonSchema = z.object({
  id: z.number(),
  spriteUrl: z.string(),
  name: z.string(),
});

export const getRandomPokemon: (notThisOne?: Pokemon) => Pokemon = (
  notThisOne
) => {
  const pokemonId = Math.floor(Math.random() * MAX_DEX_id + 1);

  if (pokemonId != notThisOne?.id)
    return pokemonSchema.parse(pokemons.find((el) => el.id == pokemonId));
  return getRandomPokemon(notThisOne);
};

export type pokemonPair = { first: Pokemon; second: Pokemon };
export const getPokemonPair: () => pokemonPair = () => {
  const first = getRandomPokemon();

  return { first, second: getRandomPokemon(first) };
};
