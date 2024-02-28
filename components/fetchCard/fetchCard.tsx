import { useState, useEffect } from "react";
import Card from "@/components/card/card";
import Spiner from "../spiner/spiner";

interface FetchProps {
  pokemonUrl: string;
}

function FetchCard(props: FetchProps) {
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    fetch(props.pokemonUrl)
      .then((result) => result.json())
      .then(setPokemon);
  }, []);

  if (!pokemon) return <Spiner />; // если нет всех покемонов, то крутиться спинер в виде покибола
  let type = "none";
  let ab = " ";
  let a = pokemon.types;
  let b = pokemon.abilities;
  let expp = pokemon.base_experience;

  // совсем чуть чуть хардкода, потому, что у каких то покемонов нет некоторых данных
  // а когда нет каких то данных выдаёт ошибку(((
  // по этому пришлось сделать так

  if (Object.keys(a).length == 1 && Object.keys(b).length == 1) {
    return (
      <Card
        name={pokemon.name}
        urlImage={pokemon.sprites.other.dream_world.front_default}
        attack={pokemon.stats[1].stat.name}
        attack_stat={pokemon.stats[1].base_stat}
        defense={pokemon.stats[2].stat.name}
        defense_stat={pokemon.stats[2].base_stat}
        type_1={pokemon.types[0].type.name}
        type_2={type}
        ab1={pokemon.abilities[0].ability.name}
        ab2={ab}
        order={pokemon.order}
        exp={expp}
        spattack={pokemon.stats[3].base_stat}
        spdefense={pokemon.stats[4].base_stat}
        hp={pokemon.stats[0].base_stat}
      />
    );
  } else if (Object.keys(a).length == 1 && Object.keys(b).length != 1) {
    return (
      <Card
        name={pokemon.name}
        urlImage={pokemon.sprites.other.dream_world.front_default}
        attack={pokemon.stats[1].stat.name}
        attack_stat={pokemon.stats[1].base_stat}
        defense={pokemon.stats[2].stat.name}
        defense_stat={pokemon.stats[2].base_stat}
        type_1={pokemon.types[0].type.name}
        type_2={type}
        ab1={pokemon.abilities[0].ability.name}
        ab2={pokemon.abilities[0].ability.name}
        order={pokemon.order}
        exp={expp}
        spattack={pokemon.stats[3].base_stat}
        spdefense={pokemon.stats[4].base_stat}
        hp={pokemon.stats[0].base_stat}
      />
    );
  } else if (Object.keys(a).length != 1 && Object.keys(b).length == 1) {
    return (
      <Card
        name={pokemon.name}
        urlImage={pokemon.sprites.other.dream_world.front_default}
        attack={pokemon.stats[1].stat.name}
        attack_stat={pokemon.stats[1].base_stat}
        defense={pokemon.stats[2].stat.name}
        defense_stat={pokemon.stats[2].base_stat}
        type_1={pokemon.types[0].type.name}
        type_2={pokemon.types[1].type.name}
        ab1={pokemon.abilities[0].ability.name}
        ab2={ab}
        order={pokemon.order}
        exp={pokemon.abilities.base_experience}
        spattack={pokemon.stats[3].base_stat}
        spdefense={pokemon.stats[4].base_stat}
        hp={pokemon.stats[0].base_stat}
      />
    );
  } else {
    return (
      <Card
        name={pokemon.name}
        urlImage={pokemon.sprites.other.dream_world.front_default}
        attack={pokemon.stats[1].stat.name}
        attack_stat={pokemon.stats[1].base_stat}
        defense={pokemon.stats[2].stat.name}
        defense_stat={pokemon.stats[2].base_stat}
        type_1={pokemon.types[0].type.name}
        type_2={pokemon.types[1].type.name}
        ab1={pokemon.abilities[0].ability.name}
        ab2={pokemon.abilities[1].ability.name}
        order={pokemon.order}
        exp={pokemon.abilities.base_experience}
        spattack={pokemon.stats[3].base_stat}
        spdefense={pokemon.stats[4].base_stat}
        hp={pokemon.stats[0].base_stat}
      />
    );
  }
}

export default FetchCard;
