import { getPokemonPair } from "../utils/getRandomPokemon";
import PokemonListing from "./PokemonListing";
import Spinner from "./Spinner";

export default async function Home() {
  const pokemonPair = await getPokemonPair();

  return (
    <>
      <div className="mt-7 text-center max-sm:mb-20">
        which pokémon is rounder
      </div>

      {pokemonPair ? (
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
      ) : (
        <Spinner />
      )}
    </>
  );
}
