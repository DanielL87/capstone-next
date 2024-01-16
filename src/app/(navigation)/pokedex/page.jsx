import PokemonList from '../../components/PokemonList.jsx';

export default function Pokedex() {
  console.log(Pokedex);
  return (
    <div>
      <PokemonList startId={1} endId={151} />
    </div>
  );
}
