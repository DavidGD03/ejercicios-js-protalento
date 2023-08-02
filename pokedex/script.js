// Elementos del DOM
const pokeData = document.getElementById("pokedata");
const modal = document.getElementById("modal");
const modalContent = document.querySelector(".modal-content");
const modalTitle = document.getElementById("modal-title");
const modalNumber = document.getElementById("modal-number");
const modalWeight = document.getElementById("modal-weight");
const modalHeight = document.getElementById("modal-height");
const modalType = document.getElementById("modal-type");
const modalWeakness = document.getElementById("modal-weakness");
const modalClose = document.getElementById("modal-close");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

let allPokemons;

// Función para obtener los datos de los Pokémon
async function fetchPokemon() {
  try {
    const response = await fetch("pokemon.json");
    const data = await response.json();
    allPokemons = data;
  } catch (error) {
    console.error("Error al obtener los datos de los Pokémon:", error);
  }
}

// Función para generar la tarjeta de un Pokémon
function createPokemonCard(pokemon) {
  const article = document.createElement("article");
  article.classList.add("card"); // Se agrega la clase "card" para poder aplicar estilos css
  article.innerHTML = `
    <img src="${pokemon.thumbnail}" alt="${pokemon.name}">
    <h2>${pokemon.name}</h2>
    <p><strong>Peso:</strong> ${pokemon.weight}</p>
    <p><strong>Tipo:</strong> ${pokemon.type}</p>
    <button class="more-details-btn">Más detalles</button>
  `;
  pokeData.appendChild(article);

  const moreDetailsBtn = article.querySelector(".more-details-btn");
  moreDetailsBtn.addEventListener("click", () => {
    showModal(pokemon);
  });
}

// Función para mostrar el modal con los detalles del Pokémon
function showModal(pokemon) {
  modalTitle.textContent = pokemon.name;
  modalNumber.textContent = pokemon.number;
  modalWeight.textContent = pokemon.weight;
  modalHeight.textContent = pokemon.height;
  modalType.textContent = pokemon.type;
  modalWeakness.textContent = pokemon.weakness;
  modal.showModal();
}

// Función para cargar todos los Pokémon
async function cargarPokemones() {
  await fetchPokemon();

  // Limpia el contenido anterior antes de cargar los Pokémon
  pokeData.innerHTML = "";

  const pokemonInfoArray = allPokemons.map((pokemon) => ({
    name: pokemon.name,
    number: pokemon.number,
    weight: pokemon.weight,
    height: pokemon.height,
    type: pokemon.type.join(", "),
    weakness: pokemon.weakness.join(", "),
    thumbnail: pokemon.ThumbnailImage,
  }));

  pokemonInfoArray.forEach(createPokemonCard);
}

// Función para buscar Pokémon por nombre
function searchPokemonByName() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  // Mostrar todos los Pokémon si el campo de búsqueda está vacío
  if (searchTerm === "") {
    cargarPokemones();
    return;
  }

  pokeData.innerHTML = "";

  // Filtrar los Pokémon cuyo nombre contenga el término de búsqueda
  const filteredPokemons = allPokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm)
  );

  // Generar las tarjetas para los Pokémon filtrados
  const pokemonInfoArray = filteredPokemons.map((pokemon) => ({
    name: pokemon.name,
    number: pokemon.number,
    weight: pokemon.weight,
    height: pokemon.height,
    type: pokemon.type.join(", "),
    weakness: pokemon.weakness.join(", "),
    thumbnail: pokemon.ThumbnailImage,
  }));

  pokemonInfoArray.forEach(createPokemonCard);
}

// Obtener todos los Pokémon del archivo JSON al cargar la página
cargarPokemones();

// Evento de clic al botón de búsqueda
searchButton.addEventListener("click", searchPokemonByName);

// Evento al presionar la tecla "Enter" en el input de búsqueda
searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    searchPokemonByName();
  }
});

// Evento de clic en el botón de cierre del modal
modalClose.addEventListener("click", () => {
  modal.close();
});