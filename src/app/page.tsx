"use client";
import dynamic from "next/dynamic";

import { useState } from "react";
import { getPokemonPair, pokemonPair } from "../utils/getRandomPokemon";
import PokemonListing from "./PokemonListing";
import Link from "next/link";
import Loading from "./loading";

function Home() {
  const [pokemonPair, setPokemonPair] = useState<pokemonPair>(getPokemonPair());
  const [isLoading, setIsLoading] = useState(false);
  async function updatePokemonPair() {
    setIsLoading(true);
    setPokemonPair(getPokemonPair());
    setIsLoading(false);
  }

  return (
    <>
      {!isLoading ? (
        <>
          <div className="mt-7 text-center max-sm:mb-20">
            which pokémon is rounder
          </div>

          <div className="mt-auto flex  w-[95%] max-w-xl items-center justify-between max-sm:flex-col">
            <PokemonListing
              pokemon={pokemonPair.first}
              secondId={pokemonPair.second.id}
              updatePokemonPair={updatePokemonPair}
            />

            <div className="max-sm:py-11">vs</div>

            <PokemonListing
              pokemon={pokemonPair.second}
              secondId={pokemonPair.first.id}
              updatePokemonPair={updatePokemonPair}
            />
          </div>
          <Link className="mt-auto pb-7 max-sm:pt-16" href="/results">
            Results
          </Link>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});
