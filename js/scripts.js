let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=1302";

  return {
    LoadList: function () {
      pokemonRepository.showLoadingMessage();
      fetch(apiUrl)
        .then((callbackAPI) => {
          return callbackAPI.json();
        })
        .then((json) => {
          json.results.forEach((fetchedPokemonFromAPI) =>
            pokemonRepository.addListItem(fetchedPokemonFromAPI)
          );
        })
        .then(() => {
          pokemonRepository.loadDetails();
        })
        .then(() => {
          pokemonRepository.displayAllPokemonsInButtons();

          console.log(pokemonList);
          pokemonRepository.hideLoadingMessage();
        })

        .catch(function (error) {
          console.error(error);
          console.error("it didn't work!");
        });
    },

    addListItem: function (pokemon) {
      pokemonList.push(pokemon);
    },

    loadDetails: function () {
      pokemonList.forEach((pokemonItem) => {
        fetch(pokemonItem.url)
          .then((callbackAPI) => {
            return callbackAPI.json();
          })
          .then((json) => {
            pokemonItem.height = json.height;
            pokemonItem.weight = json.weight;
            pokemonItem.imgUrl = json.sprites.other.dream_world.front_default;
          });
      });
      console.warn(pokemonList);
    },

    getAll: function () {
      return pokemonList;
    },

    showLoadingMessage: function () {
      document.getElementById("loading_time").innerText =
        "Fetching data from API";
    },

    hideLoadingMessage: function () {
      document.getElementById("loading_time").innerText = "";
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
          console.log(pokemon);
          buildModalContent(pokemon);
        });
        ButtonElementCreation.innerText = pokemon.name;
      });
    },
  };
})();

function buildModalContent(pokemonInfo) {
  let pokemonName = document.getElementById("pokemonName");
  let pokemonWeight = document.getElementById("pokemonWeight");
  let pokemonHeight = document.getElementById("pokemonHeight");
  let pokemonImgUrl = document.getElementById("pokemonPicture");
  let modalWrapper = document.getElementById("modal_wrapper");
  console.log(pokemonImgUrl);

  pokemonName.innerText = pokemonInfo.name;
  pokemonWeight.innerText = `Weight: ${pokemonInfo.weight}`;
  pokemonHeight.innerText = `Height: ${pokemonInfo.height}`;
  pokemonImgUrl.src = pokemonInfo.imgUrl;

  modalWrapper.classList.remove("is_hidden");
  console.log(pokemonInfo.imgUrl);
  console.log(pokemonImgUrl);
  modalManagement();
}

function modalManagement() {
  document.getElementById("modal_wrapper").addEventListener("click", (e) => {
    if (
      e.target.id === "modal_wrapper" ||
      e.target.id === "close_modal_button"
    ) {
      hideModal();
    }
    console.log(e.target.id);
  });
}

function hideModal() {
  let modalWrapper = document.getElementById("modal_wrapper");
  modalWrapper.classList.add("is_hidden");
}

pokemonRepository.LoadList();
