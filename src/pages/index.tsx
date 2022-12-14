
import type { NextPage } from "next";
import Image from "next/image"
import Link from "next/link";
import { trpc } from "../utils/trpc";
import { Pokemon } from "@prisma/client";

const Home: NextPage = () => {
  const voteMutation = trpc.pokemonVoteUpdate.useMutation();
  const { data: pokemonPair, refetch, isFetching } = trpc.pokemonPair.useQuery(undefined, { refetchInterval: false, refetchOnReconnect: false, refetchOnWindowFocus: false })

  const voteForRoundest: (num: number | undefined) => void = (num) => {
    if (!pokemonPair?.firstPokemon || !pokemonPair.secondPokemon) return

    if (num === pokemonPair?.firstPokemon?.id) {
      voteMutation.mutate({ votedFor: pokemonPair.firstPokemon.id, votedAgainst: pokemonPair?.secondPokemon.id })
    }
    else {
      voteMutation.mutate({ votedFor: pokemonPair.firstPokemon.id, votedAgainst: pokemonPair?.secondPokemon.id })
    }
    refetch()
  }

  return (
    <>
      <main className=" flex flex-col w-screen sm:h-screen min-h-[40rem] items-center justify-center text-gray-50  ">
        <div className="mt-7 max-sm:mb-20 text-center"> which pokémon is rounder</div>

        <div className="flex w-[95%]  justify-between items-center max-w-xl mt-auto max-sm:flex-col">

          <PokemonListing pokemon={pokemonPair?.firstPokemon} vote={() => voteForRoundest(pokemonPair?.firstPokemon?.id)} disabled={isFetching} />

          <div className="max-sm:py-11">vs</div>

          <PokemonListing pokemon={pokemonPair?.secondPokemon} vote={() => voteForRoundest(pokemonPair?.secondPokemon?.id)} disabled={isFetching} />

        </div>
        <Link className="mt-auto pb-7 max-sm:pt-16" href="/results">
          Results
        </Link>


      </main>
    </>
  )
};

export default Home

const PokemonListing: React.FC<{ pokemon: Pokemon | undefined, vote: () => void, disabled: boolean }> = ({ pokemon, vote, disabled }) => {
  return <>
    {disabled ? <Spinner /> : <div className={`w-[40%] flex flex-col items-center ${disabled && "opacity-0"} max-sm:w-[100%] max-sm:max-w-[15rem]`}>
      <div className="text-center capitalize text-lg sm:text-2xl">{pokemon?.name}</div>

      <Image priority={true} width={256} height={256} placeholder={"empty"} src={pokemon?.spriteUrl as string}

        className="w-full" alt="pokemon" />
      <button className="mx-auto  px-2.5 py-1.5 border border-gray-300 shadow-sm max-sm:text-sm text-lg font-medium rounded-full text-gray-700 bg-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring:offset-2 focus:ring-indigo-500 mt-5" onClick={() => {
        vote()
      }} >Rounder</button >

    </div>
    }
  </>
}

const Spinner: React.FC = () => {
  return <>
    <div className="mx-auto " role="status">
      <svg aria-hidden="true" className="mr-2 w-8 h-8  animate-spin text-gray-600 fill-gray-50" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  </>

}

