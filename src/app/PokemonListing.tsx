import { Pokemon } from "@prisma/client";
import Image from "next/image";
import voteForRoundest from "./voteServerAction";

export default function PokemonListing({
  pokemon,
  secondId,
  updatePokemonPair,
}: {
  pokemon: Pokemon;
  secondId: number;
  updatePokemonPair: () => void;
}) {
  function handelClick() {
    updatePokemonPair();
    voteForRoundest(pokemon.id, secondId);
  }
  return (
    <>
      <div
        className={`flex w-2/5 flex-col  max-sm:w-[100%] max-sm:max-w-[15rem]`}
      >
        <div className="text-center text-lg capitalize sm:text-2xl">
          {pokemon?.name}
        </div>

        <Image
          priority={true}
          width={256}
          height={256}
          placeholder={"empty"}
          src={pokemon?.spriteUrl as string}
          className="w-full"
          alt="pokemon"
          style={{ imageRendering: "pixelated" }}
        />

        <button
          onClick={handelClick}
          className="focus:ring:offset-2 mx-auto  mt-5 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-lg font-medium text-gray-700 shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 max-sm:text-sm"
        >
          Rounder
        </button>
      </div>
    </>
  );
}
