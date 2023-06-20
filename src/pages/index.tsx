import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { trpc } from "../utils/trpc";
import type { Pokemon } from "@prisma/client";
import { getOptionsForVote, type pokemonPair } from "../utils/getRandomPokemon";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [pokemonPair, setPokemonPair] = useState<pokemonPair>();
  const voteMutation = trpc.pokemonVoteUpdate.useMutation();

  useEffect(() => {
    setPokemonPair(getOptionsForVote());
  }, []);

  const voteForRoundest: (
    firstId: number | undefined,
    secondId: number | undefined
  ) => void = (firstId, secondId) => {
    if (!firstId || !secondId) return;

    voteMutation.mutate({
      votedFor: firstId,
      votedAgainst: secondId,
    });
    setPokemonPair(getOptionsForVote());
  };

  return (
    <>
      <main className=" flex min-h-[40rem] w-screen flex-col items-center justify-center text-gray-50 sm:h-screen  ">
        <div className="mt-7 text-center max-sm:mb-20">
          which pokémon is rounder
        </div>

        {pokemonPair && (
          <div className="mt-auto flex  w-[95%] max-w-xl items-center justify-between max-sm:flex-col">
            <PokemonListing
              pokemon={pokemonPair[0]}
              vote={() =>
                voteForRoundest(pokemonPair[0]?.id, pokemonPair[1]?.id)
              }
            />

            <div className="max-sm:py-11">vs</div>

            <PokemonListing
              pokemon={pokemonPair[1]}
              vote={() =>
                voteForRoundest(pokemonPair[1]?.id, pokemonPair[0]?.id)
              }
            />
          </div>
        )}
        <Link className="mt-auto pb-7 max-sm:pt-16" href="/results">
          Results
        </Link>
      </main>
    </>
  );
};

export default Home;

const PokemonListing: React.FC<{
  pokemon: Pokemon | undefined;
  vote: () => void;
}> = ({ pokemon, vote }) => {
  return (
    <>
      {!pokemon ? (
        <Spinner />
      ) : (
        <div
          className={`flex w-[40%] flex-col items-center max-sm:w-[100%] max-sm:max-w-[15rem]`}
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
            className="focus:ring:offset-2  mx-auto mt-5 rounded-full border border-gray-300 bg-white px-2.5 py-1.5 text-lg font-medium text-gray-700 shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 max-sm:text-sm"
            onClick={() => {
              vote();
            }}
          >
            Rounder
          </button>
        </div>
      )}
    </>
  );
};

const Spinner: React.FC = () => {
  return (
    <>
      <div className="mx-auto " role="status">
        <svg
          aria-hidden="true"
          className="mr-2 h-8 w-8  animate-spin fill-gray-50 text-gray-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
};
