import type { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import { number } from "zod";
import Image from "next/future/image"

import { getOptionsForVote, getRandomPokemon } from "../utils/getRandomPokemon";
import { trpc } from "../utils/trpc";
const btnClass = "mx-auto inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring:offset-2 focus:ring-indigo-500 mt-5"

const Home: NextPage = (props) => {
  const voteMutation = trpc.pokemonVoteUpdate.useMutation();

  const [ids, updateIds] = useState(props)
  const { firstId, secondId } = ids
  const firstPokemon = trpc.pokemonId.useQuery({ id: firstId })
  const secondPokemon = trpc.pokemonId.useQuery({ id: secondId })
  if (firstPokemon.isLoading || secondPokemon.isLoading) return null;



  const voteForRoundest: (num: number) => (any) = (num) => {
    if (num === firstId) {
      voteMutation.mutate({ votedFor: firstId, votedAgainst: secondId })
    }
    else {
      voteMutation.mutate({ votedFor: firstId, votedAgainst: secondId })
    }
    const [id1, id2] = getOptionsForVote()
    updateIds({ firstId: id1, secondId: id2 })
  }
  return (
    <>

      <main className="flex flex-col w-screen h-screen items-center justify-center ">
        <div className="text-center"> which pokémon is rounder</div>
        <br />
        <br />
        <div className="flex p-16 justify-center  items-center max-w-2xl rounded border">
          <div className="w-64 h-64 flex flex-col items-center">
            <Image width={256} height={256} src={firstPokemon.data?.spriteUrl} className="w-full mt-[-2rem] " alt="pokemon" />
            <div className="text-center capitalize " >{firstPokemon.data?.name}</div>
            <button className={btnClass} onClick={(e) => {
              e.preventDefault()
              voteForRoundest(firstId)
            }} >Rounder</button >
          </div>
          <div className="p-8"> vs</div>
          <div className="w-64 h-64 flex flex-col items-center">
            <Image width={256} height={256} className="w-full mt-[-2rem] " src={secondPokemon.data?.spriteUrl} alt="pokemon" />
            <div className="text-center capitalize" >{secondPokemon.data?.name}</div>
            <button className={btnClass} onClick={() => voteForRoundest(secondId)} > rounder</button>
          </div>

        </div>
      </main>
    </>
  )
};

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {

  const [firstId, secondId] = getOptionsForVote()


  return {
    props: { firstId: firstId, secondId: secondId }
  }
}
