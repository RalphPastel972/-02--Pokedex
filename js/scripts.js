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
    displayAllPokemonsInButtons: function () {
      pokemonRepository.getAll().forEach((pokemonPassport) => {
        let ulList = document.querySelector(".pokemon_list");
        console.log(ulList);
        let ButtonNodeCreation = document.createElement("button");
        let liNodeCreation = document.createElement("li");
        let liElementCreation = ulList.appendChild(liNodeCreation);
        let ButtonElementCreation =
        liElementCreation.appendChild(ButtonNodeCreation);
        ButtonElementCreation.classList.add("Poke_button");
        console.log(ButtonElementCreation);
        ButtonElementCreation.innerText = pokemonPassport.name;
      });
    },
  };
})();

pokemonRepository.displayAllPokemonsInButtons();
