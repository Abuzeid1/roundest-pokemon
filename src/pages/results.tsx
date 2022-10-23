import { GetServerSideProps } from "next";
import { prisma } from "../server/db/client";
import Image from "next/future/image";

export default function ResultPage(props) {

    return <div className="p-5">
        <h1 className="text-center pb-8">Results</h1>

        {props.pokemonOrderedBy.map(el => {
            return (
                <div className="flex items-center content-center justify-center max-w-2xl border p-2 ">
                    <Image src={el.spriteUrl} width="200" height="200" alt="" />
                    <h2 className="text-2xl"> {el.name}</h2>
                </div>
            )
        })}</div>
}

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
    console.log(55)
    console.log("I did it", pokemonOrderedBy)

    return { props: { pokemonOrderedBy }, revalidate: 60 }
}