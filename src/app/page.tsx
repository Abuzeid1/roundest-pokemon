"use client";
import { useState, useEffect } from "react";
import { getPokemonPair, pokemonPair } from "../utils/getRandomPokemon";
import PokemonListing from "./PokemonListing";
import Link from "next/link";
import Loading from "./loading";

export default function Home() {
  const [pokemonPair, setPokemonPair] = useState<pokemonPair>();
  const [isLoading, setIsLoading] = useState(false);
  async function updatePokemonPair() {
    setIsLoading(true);
    setPokemonPair(getPokemonPair());
    setIsLoading(false);
  }
  useEffect(() => {
    setPokemonPair(getPokemonPair());
  }, []);

  return (
    <>
      {!isLoading && pokemonPair ? (
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

export const dynamic = "force-dynamic";
