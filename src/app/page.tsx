import { getPokemonPair } from "../utils/getRandomPokemon";
import PokemonListing from "./PokemonListing";
import Link from "next/link";

export default function Home() {
  const pokemonPair = getPokemonPair();

  return (
    <>
      <div className="mt-7 text-center max-sm:mb-20">
        which pokémon is rounder
      </div>

      <div className="mt-auto flex  w-[95%] max-w-xl items-center justify-between max-sm:flex-col">
        <PokemonListing
          pokemon={pokemonPair.first}
          secondId={pokemonPair.second.id}
        />

        <div className="max-sm:py-11">vs</div>

        <PokemonListing
          pokemon={pokemonPair.second}
          secondId={pokemonPair.first.id}
        />
      </div>
      <Link className="mt-auto pb-7 max-sm:pt-16" href="/results">
        Results
      </Link>
    </>
  );
}

export const dynamic = "force-dynamic";
