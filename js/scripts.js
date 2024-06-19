let pokemonRepository = (function () {
  let pokemonList = [
    { name: "Bulbasaur", type: ["Monster", "Grass"], height: 0.7, weight: 6.9 },
    { name: "Ivysaur", type: ["Monster", "Grass"], height: 1, weight: 13 },
    { name: "Venusaur", type: ["Monster", "Grass"], height: 2, weight: 100 },
    { name: "Charmander", type: ["Monster", "Dragon"], height: 2, weight: 100 },
  ];

  return {
    add: function (pokemon) {
      pokemonList.push(pokemon);
    },
    getAll: function () {
      return pokemonList;
    },
  };
})();

pokemonRepository.getAll().forEach((pokemonPassport) => {
  if (pokemonPassport.height < 1) {
    document.write(
      `${pokemonPassport.name} has a height of ${pokemonPassport.height}m - Waw! That's small !<br>`
    );
  } else {
    document.write(
      `${pokemonPassport.name} has a height of ${pokemonPassport.height}m<br>`
    );
  }
});