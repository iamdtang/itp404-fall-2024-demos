import $ from "jquery";

export default function FetchPokemonsButton(props) {
  return (
    <button
      type="button"
      onClick={() => {
        const promise = $.ajax({
          type: "GET",
          url: "https://pokeapi.co/api/v2/pokemon",
        });

        promise.then((response) => {
          props.onFetch(response.results);
        });
      }}
    >
      {props.text}
    </button>
  );
}
