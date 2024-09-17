import $ from "jquery";
import { useState } from "react";

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

      {pokemons.length > 0 && (
        <ul>
          {pokemons.map((pokemon) => {
            return <li key={pokemon.name}>{pokemon.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default App;
