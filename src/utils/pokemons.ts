const pokemons = [
  {
    name: "bulbasaur",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    name: "ivysaur",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    name: "venusaur",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
  },
  {
    name: "charmander",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
  {
    name: "charmeleon",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
  },
  {
    name: "charizard",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
  },
  {
    name: "squirtle",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  },
  {
    name: "wartortle",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
  },
  {
    name: "blastoise",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
  },
  {
    name: "caterpie",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
  },
  {
    name: "metapod",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
  },
  {
    name: "butterfree",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
  },
  {
    name: "weedle",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
  },
  {
    name: "kakuna",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
  },
  {
    name: "beedrill",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
  },
  {
    name: "pidgey",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
  },
  {
    name: "pidgeotto",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
  },
  {
    name: "pidgeot",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
  },
  {
    name: "rattata",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
  },
  {
    name: "raticate",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
  },
  {
    name: "spearow",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
  },
  {
    name: "fearow",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
  },
  {
    name: "ekans",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
  },
  {
    name: "arbok",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
  },
  {
    name: "pikachu",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  },
  {
    name: "raichu",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
  },
  {
    name: "sandshrew",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
  },
  {
    name: "sandslash",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
  },
  {
    name: "nidoran-f",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
  },
  {
    name: "nidorina",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
  },
  {
    name: "nidoqueen",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
  },
  {
    name: "nidoran-m",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
  },
  {
    name: "nidorino",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
  },
  {
    name: "nidoking",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
  },
  {
    name: "clefairy",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
  },
  {
    name: "clefable",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
  },
  {
    name: "vulpix",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
  },
  {
    name: "ninetales",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
  },
  {
    name: "jigglypuff",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
  },
  {
    name: "wigglytuff",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
  },
  {
    name: "zubat",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
  },
  {
    name: "golbat",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
  },
  {
    name: "oddish",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
  },
  {
    name: "gloom",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
  },
  {
    name: "vileplume",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
  },
  {
    name: "paras",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
  },
  {
    name: "parasect",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
  },
  {
    name: "venonat",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
  },
  {
    name: "venomoth",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
  },
  {
    name: "diglett",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
  },
  {
    name: "dugtrio",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
  },
  {
    name: "meowth",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
  },
  {
    name: "persian",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
  },
  {
    name: "psyduck",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
  },
  {
    name: "golduck",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
  },
  {
    name: "mankey",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
  },
  {
    name: "primeape",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
  },
  {
    name: "growlithe",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
  },
  {
    name: "arcanine",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
  },
  {
    name: "poliwag",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
  },
  {
    name: "poliwhirl",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
  },
  {
    name: "poliwrath",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
  },
  {
    name: "abra",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
  },
  {
    name: "kadabra",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
  },
  {
    name: "alakazam",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
  },
  {
    name: "machop",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
  },
  {
    name: "machoke",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
  },
  {
    name: "machamp",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
  },
  {
    name: "bellsprout",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
  },
  {
    name: "weepinbell",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
  },
  {
    name: "victreebel",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
  },
  {
    name: "tentacool",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
  },
  {
    name: "tentacruel",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
  },
  {
    name: "geodude",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
  },
  {
    name: "graveler",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
  },
  {
    name: "golem",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
  },
  {
    name: "ponyta",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
  },
  {
    name: "rapidash",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
  },
  {
    name: "slowpoke",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
  },
  {
    name: "slowbro",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
  },
  {
    name: "magnemite",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
  },
  {
    name: "magneton",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
  },
  {
    name: "farfetchd",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
  },
  {
    name: "doduo",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
  },
  {
    name: "dodrio",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
  },
  {
    name: "seel",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
  },
  {
    name: "dewgong",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
  },
  {
    name: "grimer",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
  },
  {
    name: "muk",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
  },
  {
    name: "shellder",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
  },
  {
    name: "cloyster",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
  },
  {
    name: "gastly",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
  },
  {
    name: "haunter",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
  },
  {
    name: "gengar",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
  },
  {
    name: "onix",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
  },
  {
    name: "drowzee",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
  },
  {
    name: "hypno",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
  },
  {
    name: "krabby",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
  },
  {
    name: "kingler",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
  },
  {
    name: "voltorb",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
  },
  {
    name: "electrode",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
  },
  {
    name: "exeggcute",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
  },
  {
    name: "exeggutor",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
  },
  {
    name: "cubone",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
  },
  {
    name: "marowak",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
  },
  {
    name: "hitmonlee",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
  },
  {
    name: "hitmonchan",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
  },
  {
    name: "lickitung",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
  },
  {
    name: "koffing",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
  },
  {
    name: "weezing",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
  },
  {
    name: "rhyhorn",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
  },
  {
    name: "rhydon",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
  },
  {
    name: "chansey",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
  },
  {
    name: "tangela",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
  },
  {
    name: "kangaskhan",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
  },
  {
    name: "horsea",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
  },
  {
    name: "seadra",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
  },
  {
    name: "goldeen",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
  },
  {
    name: "seaking",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
  },
  {
    name: "staryu",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
  },
  {
    name: "starmie",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
  },
  {
    name: "mr-mime",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
  },
  {
    name: "scyther",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
  },
  {
    name: "jynx",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
  },
  {
    name: "electabuzz",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
  },
  {
    name: "magmar",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
  },
  {
    name: "pinsir",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
  },
  {
    name: "tauros",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
  },
  {
    name: "magikarp",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
  },
  {
    name: "gyarados",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
  },
  {
    name: "lapras",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
  },
  {
    name: "ditto",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
  },
  {
    name: "eevee",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
  },
  {
    name: "vaporeon",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
  },
  {
    name: "jolteon",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
  },
  {
    name: "flareon",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
  },
  {
    name: "porygon",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
  },
  {
    name: "omanyte",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
  },
  {
    name: "omastar",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
  },
  {
    name: "kabuto",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
  },
  {
    name: "kabutops",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
  },
  {
    name: "aerodactyl",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
  },
  {
    name: "snorlax",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
  },
  {
    name: "articuno",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
  },
  {
    name: "zapdos",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
  },
  {
    name: "moltres",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
  },
  {
    name: "dratini",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
  },
  {
    name: "dragonair",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
  },
  {
    name: "dragonite",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
  },
  {
    name: "mewtwo",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
  },
  {
    name: "mew",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
  },
  {
    name: "chikorita",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png",
  },
  {
    name: "bayleef",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png",
  },
  {
    name: "meganium",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png",
  },
  {
    name: "cyndaquil",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png",
  },
  {
    name: "quilava",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png",
  },
  {
    name: "typhlosion",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png",
  },
  {
    name: "totodile",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png",
  },
  {
    name: "croconaw",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png",
  },
  {
    name: "feraligatr",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png",
  },
  {
    name: "sentret",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/161.png",
  },
  {
    name: "furret",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/162.png",
  },
  {
    name: "hoothoot",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/163.png",
  },
  {
    name: "noctowl",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png",
  },
  {
    name: "ledyba",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/165.png",
  },
  {
    name: "ledian",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/166.png",
  },
  {
    name: "spinarak",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png",
  },
  {
    name: "ariados",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png",
  },
  {
    name: "crobat",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png",
  },
  {
    name: "chinchou",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png",
  },
  {
    name: "lanturn",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/171.png",
  },
  {
    name: "pichu",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png",
  },
  {
    name: "cleffa",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/173.png",
  },
  {
    name: "igglybuff",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png",
  },
  {
    name: "togepi",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png",
  },
  {
    name: "togetic",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/176.png",
  },
  {
    name: "natu",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/177.png",
  },
  {
    name: "xatu",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/178.png",
  },
  {
    name: "mareep",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/179.png",
  },
  {
    name: "flaaffy",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/180.png",
  },
  {
    name: "ampharos",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png",
  },
  {
    name: "bellossom",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png",
  },
  {
    name: "marill",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/183.png",
  },
  {
    name: "azumarill",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/184.png",
  },
  {
    name: "sudowoodo",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/185.png",
  },
  {
    name: "politoed",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/186.png",
  },
  {
    name: "hoppip",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/187.png",
  },
  {
    name: "skiploom",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/188.png",
  },
  {
    name: "jumpluff",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/189.png",
  },
  {
    name: "aipom",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/190.png",
  },
  {
    name: "sunkern",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/191.png",
  },
  {
    name: "sunflora",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/192.png",
  },
  {
    name: "yanma",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png",
  },
  {
    name: "wooper",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png",
  },
  {
    name: "quagsire",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png",
  },
  {
    name: "espeon",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png",
  },
  {
    name: "umbreon",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png",
  },
  {
    name: "murkrow",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/198.png",
  },
  {
    name: "slowking",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/199.png",
  },
  {
    name: "misdreavus",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png",
  },
  {
    name: "unown",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png",
  },
  {
    name: "wobbuffet",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png",
  },
  {
    name: "girafarig",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/203.png",
  },
  {
    name: "pineco",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png",
  },
  {
    name: "forretress",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png",
  },
  {
    name: "dunsparce",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/206.png",
  },
  {
    name: "gligar",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/207.png",
  },
  {
    name: "steelix",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png",
  },
  {
    name: "snubbull",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/209.png",
  },
  {
    name: "granbull",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/210.png",
  },
  {
    name: "qwilfish",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/211.png",
  },
  {
    name: "scizor",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png",
  },
  {
    name: "shuckle",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png",
  },
  {
    name: "heracross",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png",
  },
  {
    name: "sneasel",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/215.png",
  },
  {
    name: "teddiursa",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png",
  },
  {
    name: "ursaring",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/217.png",
  },
  {
    name: "slugma",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/218.png",
  },
  {
    name: "magcargo",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/219.png",
  },
  {
    name: "swinub",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/220.png",
  },
  {
    name: "piloswine",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/221.png",
  },
  {
    name: "corsola",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png",
  },
  {
    name: "remoraid",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/223.png",
  },
  {
    name: "octillery",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png",
  },
  {
    name: "delibird",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png",
  },
  {
    name: "mantine",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/226.png",
  },
  {
    name: "skarmory",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/227.png",
  },
  {
    name: "houndour",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/228.png",
  },
  {
    name: "houndoom",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png",
  },
  {
    name: "kingdra",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png",
  },
  {
    name: "phanpy",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png",
  },
  {
    name: "donphan",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/232.png",
  },
  {
    name: "porygon2",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png",
  },
  {
    name: "stantler",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/234.png",
  },
  {
    name: "smeargle",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/235.png",
  },
  {
    name: "tyrogue",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/236.png",
  },
  {
    name: "hitmontop",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/237.png",
  },
  {
    name: "smoochum",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/238.png",
  },
  {
    name: "elekid",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/239.png",
  },
  {
    name: "magby",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/240.png",
  },
  {
    name: "miltank",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png",
  },
  {
    name: "blissey",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png",
  },
  {
    name: "raikou",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/243.png",
  },
  {
    name: "entei",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png",
  },
  {
    name: "suicune",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png",
  },
  {
    name: "larvitar",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/246.png",
  },
  {
    name: "pupitar",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/247.png",
  },
  {
    name: "tyranitar",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png",
  },
  {
    name: "lugia",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png",
  },
  {
    name: "ho-oh",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png",
  },
  {
    name: "celebi",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png",
  },
  {
    name: "treecko",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png",
  },
  {
    name: "grovyle",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png",
  },
  {
    name: "sceptile",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png",
  },
  {
    name: "torchic",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png",
  },
  {
    name: "combusken",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/256.png",
  },
  {
    name: "blaziken",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png",
  },
  {
    name: "mudkip",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png",
  },
  {
    name: "marshtomp",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/259.png",
  },
  {
    name: "swampert",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png",
  },
  {
    name: "poochyena",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/261.png",
  },
  {
    name: "mightyena",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/262.png",
  },
  {
    name: "zigzagoon",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/263.png",
  },
  {
    name: "linoone",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/264.png",
  },
  {
    name: "wurmple",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/265.png",
  },
  {
    name: "silcoon",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/266.png",
  },
  {
    name: "beautifly",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/267.png",
  },
  {
    name: "cascoon",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/268.png",
  },
  {
    name: "dustox",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/269.png",
  },
  {
    name: "lotad",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/270.png",
  },
  {
    name: "lombre",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/271.png",
  },
  {
    name: "ludicolo",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/272.png",
  },
  {
    name: "seedot",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/273.png",
  },
  {
    name: "nuzleaf",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/274.png",
  },
  {
    name: "shiftry",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/275.png",
  },
  {
    name: "taillow",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/276.png",
  },
  {
    name: "swellow",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/277.png",
  },
  {
    name: "wingull",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/278.png",
  },
  {
    name: "pelipper",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/279.png",
  },
  {
    name: "ralts",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/280.png",
  },
  {
    name: "kirlia",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/281.png",
  },
  {
    name: "gardevoir",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png",
  },
  {
    name: "surskit",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/283.png",
  },
  {
    name: "masquerain",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/284.png",
  },
  {
    name: "shroomish",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/285.png",
  },
  {
    name: "breloom",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png",
  },
  {
    name: "slakoth",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/287.png",
  },
  {
    name: "vigoroth",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/288.png",
  },
  {
    name: "slaking",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png",
  },
  {
    name: "nincada",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/290.png",
  },
  {
    name: "ninjask",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/291.png",
  },
  {
    name: "shedinja",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/292.png",
  },
  {
    name: "whismur",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/293.png",
  },
  {
    name: "loudred",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/294.png",
  },
  {
    name: "exploud",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/295.png",
  },
  {
    name: "makuhita",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/296.png",
  },
  {
    name: "hariyama",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/297.png",
  },
  {
    name: "azurill",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/298.png",
  },
  {
    name: "nosepass",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/299.png",
  },
  {
    name: "skitty",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/300.png",
  },
  {
    name: "delcatty",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/301.png",
  },
  {
    name: "sableye",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/302.png",
  },
  {
    name: "mawile",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/303.png",
  },
  {
    name: "aron",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/304.png",
  },
  {
    name: "lairon",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/305.png",
  },
  {
    name: "aggron",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png",
  },
  {
    name: "meditite",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/307.png",
  },
  {
    name: "medicham",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/308.png",
  },
  {
    name: "electrike",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/309.png",
  },
  {
    name: "manectric",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png",
  },
  {
    name: "plusle",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/311.png",
  },
  {
    name: "minun",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/312.png",
  },
  {
    name: "volbeat",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/313.png",
  },
  {
    name: "illumise",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/314.png",
  },
  {
    name: "roselia",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/315.png",
  },
  {
    name: "gulpin",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/316.png",
  },
  {
    name: "swalot",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/317.png",
  },
  {
    name: "carvanha",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/318.png",
  },
  {
    name: "sharpedo",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/319.png",
  },
  {
    name: "wailmer",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/320.png",
  },
  {
    name: "wailord",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/321.png",
  },
  {
    name: "numel",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/322.png",
  },
  {
    name: "camerupt",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/323.png",
  },
  {
    name: "torkoal",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/324.png",
  },
  {
    name: "spoink",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/325.png",
  },
  {
    name: "grumpig",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/326.png",
  },
  {
    name: "spinda",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/327.png",
  },
  {
    name: "trapinch",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/328.png",
  },
  {
    name: "vibrava",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/329.png",
  },
  {
    name: "flygon",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png",
  },
  {
    name: "cacnea",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/331.png",
  },
  {
    name: "cacturne",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/332.png",
  },
  {
    name: "swablu",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/333.png",
  },
  {
    name: "altaria",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png",
  },
  {
    name: "zangoose",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/335.png",
  },
  {
    name: "seviper",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/336.png",
  },
  {
    name: "lunatone",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/337.png",
  },
  {
    name: "solrock",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/338.png",
  },
  {
    name: "barboach",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/339.png",
  },
  {
    name: "whiscash",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/340.png",
  },
  {
    name: "corphish",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/341.png",
  },
  {
    name: "crawdaunt",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/342.png",
  },
  {
    name: "baltoy",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/343.png",
  },
  {
    name: "claydol",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/344.png",
  },
  {
    name: "lileep",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/345.png",
  },
  {
    name: "cradily",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/346.png",
  },
  {
    name: "anorith",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/347.png",
  },
  {
    name: "armaldo",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/348.png",
  },
  {
    name: "feebas",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/349.png",
  },
  {
    name: "milotic",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png",
  },
  {
    name: "castform",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/351.png",
  },
  {
    name: "kecleon",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/352.png",
  },
  {
    name: "shuppet",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/353.png",
  },
  {
    name: "banette",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/354.png",
  },
  {
    name: "duskull",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/355.png",
  },
  {
    name: "dusclops",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/356.png",
  },
  {
    name: "tropius",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/357.png",
  },
  {
    name: "chimecho",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/358.png",
  },
  {
    name: "absol",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/359.png",
  },
  {
    name: "wynaut",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/360.png",
  },
  {
    name: "snorunt",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/361.png",
  },
  {
    name: "glalie",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/362.png",
  },
  {
    name: "spheal",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/363.png",
  },
  {
    name: "sealeo",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/364.png",
  },
  {
    name: "walrein",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/365.png",
  },
  {
    name: "clamperl",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/366.png",
  },
  {
    name: "huntail",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/367.png",
  },
  {
    name: "gorebyss",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/368.png",
  },
  {
    name: "relicanth",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/369.png",
  },
  {
    name: "luvdisc",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/370.png",
  },
  {
    name: "bagon",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/371.png",
  },
  {
    name: "shelgon",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/372.png",
  },
  {
    name: "salamence",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png",
  },
  {
    name: "beldum",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/374.png",
  },
  {
    name: "metang",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/375.png",
  },
  {
    name: "metagross",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png",
  },
  {
    name: "regirock",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/377.png",
  },
  {
    name: "regice",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/378.png",
  },
  {
    name: "registeel",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/379.png",
  },
  {
    name: "latias",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/380.png",
  },
  {
    name: "latios",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/381.png",
  },
  {
    name: "kyogre",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png",
  },
  {
    name: "groudon",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png",
  },
  {
    name: "rayquaza",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png",
  },
  {
    name: "jirachi",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/385.png",
  },
  {
    name: "deoxys-normal",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/386.png",
  },
  {
    name: "turtwig",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png",
  },
  {
    name: "grotle",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/388.png",
  },
  {
    name: "torterra",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png",
  },
  {
    name: "chimchar",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png",
  },
  {
    name: "monferno",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/391.png",
  },
  {
    name: "infernape",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png",
  },
  {
    name: "piplup",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png",
  },
  {
    name: "prinplup",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/394.png",
  },
  {
    name: "empoleon",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png",
  },
  {
    name: "starly",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/396.png",
  },
  {
    name: "staravia",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/397.png",
  },
  {
    name: "staraptor",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png",
  },
  {
    name: "bidoof",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/399.png",
  },
  {
    name: "bibarel",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/400.png",
  },
  {
    name: "kricketot",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/401.png",
  },
  {
    name: "kricketune",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/402.png",
  },
  {
    name: "shinx",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/403.png",
  },
  {
    name: "luxio",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/404.png",
  },
  {
    name: "luxray",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/405.png",
  },
  {
    name: "budew",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/406.png",
  },
  {
    name: "roserade",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png",
  },
  {
    name: "cranidos",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/408.png",
  },
  {
    name: "rampardos",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/409.png",
  },
  {
    name: "shieldon",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/410.png",
  },
  {
    name: "bastiodon",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/411.png",
  },
  {
    name: "burmy",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/412.png",
  },
  {
    name: "wormadam-plant",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png",
  },
  {
    name: "mothim",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/414.png",
  },
  {
    name: "combee",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/415.png",
  },
  {
    name: "vespiquen",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/416.png",
  },
  {
    name: "pachirisu",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/417.png",
  },
  {
    name: "buizel",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/418.png",
  },
  {
    name: "floatzel",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/419.png",
  },
  {
    name: "cherubi",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/420.png",
  },
  {
    name: "cherrim",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/421.png",
  },
  {
    name: "shellos",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/422.png",
  },
  {
    name: "gastrodon",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/423.png",
  },
  {
    name: "ambipom",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/424.png",
  },
  {
    name: "drifloon",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/425.png",
  },
  {
    name: "drifblim",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/426.png",
  },
  {
    name: "buneary",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/427.png",
  },
  {
    name: "lopunny",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/428.png",
  },
  {
    name: "mismagius",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/429.png",
  },
  {
    name: "honchkrow",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/430.png",
  },
  {
    name: "glameow",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/431.png",
  },
  {
    name: "purugly",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/432.png",
  },
  {
    name: "chingling",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/433.png",
  },
  {
    name: "stunky",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/434.png",
  },
  {
    name: "skuntank",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/435.png",
  },
  {
    name: "bronzor",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/436.png",
  },
  {
    name: "bronzong",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/437.png",
  },
  {
    name: "bonsly",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/438.png",
  },
  {
    name: "mime-jr",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/439.png",
  },
  {
    name: "happiny",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/440.png",
  },
  {
    name: "chatot",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/441.png",
  },
  {
    name: "spiritomb",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/442.png",
  },
  {
    name: "gible",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/443.png",
  },
  {
    name: "gabite",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/444.png",
  },
  {
    name: "garchomp",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png",
  },
  {
    name: "munchlax",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/446.png",
  },
  {
    name: "riolu",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/447.png",
  },
  {
    name: "lucario",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png",
  },
  {
    name: "hippopotas",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/449.png",
  },
  {
    name: "hippowdon",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/450.png",
  },
  {
    name: "skorupi",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/451.png",
  },
  {
    name: "drapion",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/452.png",
  },
  {
    name: "croagunk",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/453.png",
  },
  {
    name: "toxicroak",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/454.png",
  },
  {
    name: "carnivine",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/455.png",
  },
  {
    name: "finneon",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/456.png",
  },
  {
    name: "lumineon",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/457.png",
  },
  {
    name: "mantyke",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/458.png",
  },
  {
    name: "snover",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/459.png",
  },
  {
    name: "abomasnow",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png",
  },
  {
    name: "weavile",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/461.png",
  },
  {
    name: "magnezone",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png",
  },
  {
    name: "lickilicky",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/463.png",
  },
  {
    name: "rhyperior",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png",
  },
  {
    name: "tangrowth",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/465.png",
  },
  {
    name: "electivire",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png",
  },
  {
    name: "magmortar",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png",
  },
  {
    name: "togekiss",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png",
  },
  {
    name: "yanmega",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/469.png",
  },
  {
    name: "leafeon",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png",
  },
  {
    name: "glaceon",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png",
  },
  {
    name: "gliscor",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/472.png",
  },
  {
    name: "mamoswine",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/473.png",
  },
  {
    name: "porygon-z",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/474.png",
  },
  {
    name: "gallade",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/475.png",
  },
  {
    name: "probopass",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/476.png",
  },
  {
    name: "dusknoir",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/477.png",
  },
  {
    name: "froslass",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/478.png",
  },
  {
    name: "rotom",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png",
  },
  {
    name: "uxie",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/480.png",
  },
  {
    name: "mesprit",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/481.png",
  },
  {
    name: "azelf",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/482.png",
  },
  {
    name: "dialga",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png",
  },
  {
    name: "palkia",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png",
  },
  {
    name: "heatran",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/485.png",
  },
  {
    name: "regigigas",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/486.png",
  },
  {
    name: "giratina-altered",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png",
  },
  {
    name: "cresselia",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/488.png",
  },
  {
    name: "phione",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/489.png",
  },
  {
    name: "manaphy",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/490.png",
  },
  {
    name: "darkrai",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png",
  },
  {
    name: "shaymin-land",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/492.png",
  },
  {
    name: "arceus",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png",
  },
  {
    name: "victini",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/494.png",
  },
  {
    name: "snivy",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png",
  },
  {
    name: "servine",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/496.png",
  },
  {
    name: "serperior",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/497.png",
  },
  {
    name: "tepig",
    spriteUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png",
  },
].map((el, index) => ({ id: index + 1, ...el }));

export default pokemons;
