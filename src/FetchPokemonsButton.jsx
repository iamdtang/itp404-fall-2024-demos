function fetchPokemons() {
  const promise = fetch("https://pokeapi.co/api/v2/pokemon");

  return promise
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response.results;
    });
}

export default function FetchPokemonsButton(props) {
  return (
    <button
      type="button"
      onClick={() => {
        fetchPokemons().then((pokemons) => {
          props.onFetch(pokemons);
        });
      }}
    >
      {props.text}
    </button>
  );
}
