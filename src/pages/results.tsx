import { NextPage, InferGetServerSidePropsType } from "next";
import { prisma } from "../server/db/client";
import Image from "next/image";

const ResultPage: NextPage<
  InferGetServerSidePropsType<typeof getStaticProps>
> = ({ pokemonScores }) => {
  return (
    <div className="p-5 text-gray-50">
      <h1 className="my-10 text-center text-5xl ">Results</h1>
      <ul className="mx-auto ">
        {pokemonScores.map(({ id, _count, spriteUrl, score, name }, index) => {
          return (
            <li
              key={id}
              className="relative mx-auto grid  w-full max-w-2xl grid-cols-[1fr_1fr_.5fr] items-center border text-left max-sm:text-sm sm:grid-cols-[1fr_1fr_.5fr_.5fr_.5fr] sm:gap-2 sm:p-2 sm:px-7 sm:text-2xl"
            >
              <span className="absolute top-0 left-0 rounded-br-lg bg-gray-200 p-2 text-gray-700 max-sm:p-1">
                {index + 1}
              </span>
              <Image
                className="h-auto max-h-full w-full"
                src={spriteUrl}
                priority={index < 10 ? true : false}
                width={200}
                height={200}
                alt={name}
              />
              <h2 className="capitalize"> {name}</h2>

              <div className="hidden sm:block">{_count.VoteFor | 0}</div>
              <div className="hidden sm:block">{_count.Voteagainst | 0}</div>

              <div>{score}%</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ResultPage;

export const getStaticProps = async () => {
  const pokemonCollection = await prisma.pokemon.findMany({
    orderBy: {
      VoteFor: { _count: "desc" },
    },
    select: {
      id: true,
      name: true,
      spriteUrl: true,
      _count: {
        select: {
          VoteFor: true,
          Voteagainst: true,
        },
      },
    },
  });
  let pokemonScores = pokemonCollection.map(
    ({ id, name, spriteUrl, _count }) => {
      return {
        id,
        name,
        spriteUrl,
        score: Math.trunc(
          ((_count.VoteFor / (_count.VoteFor + _count.Voteagainst)) * 100) | 0
        ),
        _count,
      };
    }
  );
  pokemonScores = pokemonScores.sort(
    (a, b) => b.score - a.score || a.name.charCodeAt(0) - b.name.charCodeAt(0)
  );

  return { props: { pokemonScores }, revalidate: 60 };
};
