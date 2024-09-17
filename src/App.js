import { useState } from "react";
import PokemonList from "./PokemonList";
import FetchPokemonsButton from "./FetchPokemonsButton";

function App() {
  const [pokemons, setPokemons] = useState([]);

  return (
    <div>
      <FetchPokemonsButton
        text="Show Pokemon"
        onFetch={(pokemons) => {
          setPokemons(pokemons);
        }}
      />

      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
