export default function FetchPokemonsButton(props) {
  return (
    <button
      type="button"
      onClick={() => {
        const promise = fetch("https://pokeapi.co/api/v2/pokemon");

        promise
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            props.onFetch(response.results);
          });
      }}
    >
      {props.text}
    </button>
  );
}
