import $ from "jquery";
import { useState } from "react";
import PokemonList from "./PokemonList";

function App() {
  const [pokemons, setPokemons] = useState([]);

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          const promise = $.ajax({
            type: "GET",
            url: "https://pokeapi.co/api/v2/pokemon",
          });

          promise.then((response) => {
            setPokemons(response.results);
          });
        }}
      >
        Show Pokemon
      </button>

      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
