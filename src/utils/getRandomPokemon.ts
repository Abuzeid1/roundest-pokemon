const MAX_DEX_id = 493;
export const getRandomPokemon:(notThisOne?: number)=> number = (notThisOne) =>  {

    const pokedexNumber = Math.floor((Math.random() * MAX_DEX_id) + 1)

    if (pokedexNumber != notThisOne) return pokedexNumber
    return getRandomPokemon(notThisOne)
}

export const getOptionsForVote = ():[number, number] => {
    const firstId = getRandomPokemon()
    const secondId = getRandomPokemon(firstId)

    return [firstId, secondId]
}