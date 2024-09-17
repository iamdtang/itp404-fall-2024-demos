export default function PokemonList(props) {
  return (
    props.pokemons.length > 0 && (
      <ul>
        {props.pokemons.map((pokemon) => {
          return <li key={pokemon.name}>{pokemon.name}</li>;
        })}
      </ul>
    )
  );
}
