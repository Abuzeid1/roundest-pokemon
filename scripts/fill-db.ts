import { PrismaClientValidationError } from "@prisma/client/runtime";
import { PokemonClient } from "pokenode-ts";
import { prisma } from "../src/server/db/client";

const doBackfill = async () => {
    const pokeApi = new PokemonClient();
    const allPokemon = await pokeApi.listPokemons(0, 493);

    const formattedPokemon = allPokemon.results.map((p, index) => ({
        id: index+1,
        name: (p as {name:string}).name,
        spriteUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`
    }))

    return  prisma.pokemon.updateMany({data: formattedPokemon})
    // const creation = formattedPokemon.forEach( async (el) => {


    //     await prisma.pokemon.create({
    //         data:el,
    //     })

    // })


}
export default doBackfill;