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
    console.log("pokemon?", allPokemon)
    const creation = formattedPokemon.forEach( async (el) => {
        console.log(el)

        await prisma.pokemon.create({
            data:el,
        })

    })


}
doBackfill();