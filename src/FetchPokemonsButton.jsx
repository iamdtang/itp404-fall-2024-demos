import { useState } from "react";

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

function timeout(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
}

export default function FetchPokemonsButton(props) {
  const [isPending, setIsPending] = useState(false);

  return (
    <button
      type="button"
      onClick={() => {
        setIsPending(true);

        const promise = Promise.all([fetchPokemons(), timeout(1000)]);

        promise.then((fulfilledValues) => {
          const pokemons = fulfilledValues[0];
          props.onFetch(pokemons);
          setIsPending(false);
        });
      }}
    >
      {isPending ? "Loading ..." : props.text}
    </button>
  );
}
