let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=100";

  return {
    LoadList: function () {
      fetch(apiUrl)
        .then((callbackAPI) => {
          return callbackAPI.json();
        })
        .then((json) => {
          json.results.forEach((fetchedPokemonFromAPI) =>
            pokemonList.push(fetchedPokemonFromAPI)
          );
        })
        .then( () => {
          pokemonRepository.displayAllPokemonsInButtons();
        })

        .catch(function (error) {
          console.error(error);
          console.error("it didn't work!");
        });
    },

    getAll: function () {
      return pokemonList;
    },

    displayAllPokemonsInButtons: function () {
      pokemonRepository.getAll().forEach((pokemon) => {
        let ulList = document.querySelector(".pokemon_list");
        let ButtonNodeCreation = document.createElement("button");
        let liNodeCreation = document.createElement("li");
        let liElementCreation = ulList.appendChild(liNodeCreation);
        let ButtonElementCreation =
          liElementCreation.appendChild(ButtonNodeCreation);
        ButtonElementCreation.classList.add("Poke_button");
        ButtonElementCreation.addEventListener("click", function () {
          console.log(pokemon.name);
        });
        ButtonElementCreation.innerText = pokemon.name;
      });
    },
  };
})();

pokemonRepository.LoadList();