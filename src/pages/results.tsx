import { GetServerSideProps, NextPage } from "next";
import { prisma } from "../server/db/client";
import Image from "next/image";
import { Pokemon } from "@prisma/client";


const ResultPage: NextPage<{ pokemonOrderedBy: (Pokemon)[] }> = (props) => {

    return <div className="p-5">
        <h1 className="text-center pb-8">Results</h1>

        {props.pokemonOrderedBy.map(el => {

            return (
                <div className="flex items-center content-center justify-between max-w-2xl border p-2 px-7">
                    <div className="flex items-center">

                        <Image src={el.spriteUrl} width="200" height="200" alt="" />
                        <h2 className="text-2xl capitalize"> {el.name}</h2>
                    </div>
                    <div>{el._count.VoteFor | 0}</div>
                    <div>{el._count.Voteagainst | 0}</div>

                    <div>{((((el._count.VoteFor | 0) / ((el._count.Voteagainst | 0) + (el._count.VoteFor | 0)))) * 100).toFixed()}%</div>
                </div>
            )
        })}</div>
}
export default ResultPage

export const getStaticProps: GetServerSideProps = async () => {
    const pokemonOrderedBy = await prisma.pokemon.findMany({
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
            }
        }
    })



    return { props: { pokemonOrderedBy }, revalidate: 60 }
}