let pokemonList = [
  { name: "Bulbasaur", type: ["Monster", "Grass"], height: 0.7, weight: 6.9 },
  { name: "Ivysaur", type: ["Monster", "Grass"], height: 1, weight: 13 },
  { name: "Venusaur", type: ["Monster", "Grass"], height: 2, weight: 100 },
  { name: "Charmander", type: ["Monster", "Dragon"], height: 2, weight: 100 },
];

for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height < 1) {
    document.write(
      `${pokemonList[i].name} has a height of ${pokemonList[i].height}m - Waw! That's small !<br>`
    );
    // I chose the smallest Pokemon instead of the biggest, I hope that is Ok! :-)
  } else {
    document.write(
      `${pokemonList[i].name} has a height of ${pokemonList[i].height}m <br>`
    );
  }
}
