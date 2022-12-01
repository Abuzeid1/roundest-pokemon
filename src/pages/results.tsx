import { GetServerSideProps, NextPage, InferGetServerSidePropsType } from "next";
import { prisma } from "../server/db/client";
import Image from "next/image";
import { Prisma } from "@prisma/client";




const ResultPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ pokemonScores }) => {

    return <div className="p-5">
        <h1 className="text-center text-5xl my-10 ">Results</h1>
        <ul className="mx-auto ">

            {pokemonScores.map(({ id, _count, spriteUrl, score, name }) => {

                return (
                    <li key={id} className="grid-cols-[1fr_1fr_.5fr] grid sm:grid-cols-[1.5fr_1fr_.5fr_.5fr_.5fr]  sm:gap-2 items-center text-left w-full max-w-2xl border sm:p-2 sm:px-7 mx-auto sm:text-2xl text_l ">


                        <Image src={spriteUrl} width="200" height="200" alt="" />
                        <h2 className="capitalize"> {name}</h2>

                        <div className="sm:block hidden">{_count.VoteFor | 0}</div>
                        <div className="sm:block hidden">{_count.Voteagainst | 0}</div>

                        <div>{score}%</div>
                    </li>
                )
            })}
        </ul>
    </div>
}
export default ResultPage


export const getServerSideProps = async () => {
    const pokemonCollection = await prisma.pokemon.findMany({
        orderBy: {
            VoteFor: { _count: "desc" }
        },
        select: {
            id: true,
            name: true,
            spriteUrl: true,
            _count: {
                select: {
                    VoteFor: true,
                    Voteagainst: true,
                }
            },


        }
    })
    let pokemonScores = pokemonCollection.map(({ id, name, spriteUrl, _count }) => {
        return {
            id, name, spriteUrl, score: Math.trunc((_count.VoteFor / (_count.VoteFor + _count.Voteagainst)) * 100 | 0), _count
        }
    })
    pokemonScores.sort((a, b) => b.score - a.score || a.name.charCodeAt(0) - b.name.charCodeAt(0))

    return { props: { pokemonScores } }
}

