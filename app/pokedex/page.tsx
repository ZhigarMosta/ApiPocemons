"use client";
import "./cards.scss";
import {
  resetPocemons,
  pocemonsStore,
  getPocemonFx,
} from "@/store/pocemonsStore";
import React, { useEffect, useState } from "react";
import { useUnit } from "effector-react";
import FetchCard from "@/components/fetchCard/fetchCard";
import {
  getPocemonSearchFx,
  pocemonsSearchStore,
  resetPocemonsSearch,
} from "@/store/pokemonSearchStore";

export default function About() {
  const pokemons = useUnit({
    pokemons: pocemonsStore,
    getPokemonFx: getPocemonFx,
  });

  const pokemonsSearch = useUnit({
    pokemonsSearch: pocemonsSearchStore,
    getPokemonSearchFx: getPocemonSearchFx,
  });

  const MaxPocemons = 9; // максимальное количество покемонов на страничке (без сортировки)
  const byPocemons = 600; // сколько всего покемонов
  const countPage = Math.ceil(byPocemons / MaxPocemons); // количество страниц с пакемонами

  const [PokenonsArr, setPokenonsArr] = useState([]); // массив с пакемонами, которые отображаютс на экране
  const [BtnPage, setBtnPage] = useState([]); // массив с кнопками

  const firstArrPokemon = async () => {
    // функция, которая перезаписывает в массив с покемонами первые 9 покемонов
    //resetPocemons();
    const newList = await pokemons.getPokemonFx(0);
    setPokenonsArr(newList);
  };

  useEffect(() => {
    firstArrPokemon();
    cteateBtnPage();
  }, []);

  useEffect(() => {
    pokemonsSearch.getPokemonSearchFx();
  }, [pokemonsSearch.getPokemonSearchFx]);

  const cteateBtnPage = () => {
    // тут создаются кнопки
    const arr = [];
    let page = 0;
    for (let i = 0; i < countPage; i++) {
      arr.push(page);
      page += 9;
    }
    setBtnPage(arr);
  };

  const render = async (i: number) => {
    // тут перезаписывается массив покемонов на нужную страничку для пользователя
    resetPocemons();
    await pokemons.getPokemonFx(i);
    setPokenonsArr(pokemons.pokemons);
    console.log(PokenonsArr);
  };

  // это сортировка
  const search = async (query, pokemonsSearch) => {
    if (!query) {
      // если пользователь в input всё стёр, то создаются кнопочки
      firstArrPokemon();
      cteateBtnPage();
      return;
    }
    setBtnPage([]); // если пользователь что то ввёл, то удаляем кнопки
    return pokemonsSearch.filter((pokemon) => pokemon.name.includes(query)); // фильтруем по имени покемона
  };

  const hendleChenge = async (e) => {
    // перезаписываем массив с покемонами. новый запрос на 100 покемонов (можно больше, чтобы сайт долго не грузился)
    // через setTimeout не стали делать, так как апишка медленная
    const newList = await search(e.target.value, pokemonsSearch.pokemonsSearch);
    console.log(e.target.value);
    setPokenonsArr(newList);
    console.log(PokenonsArr);
  };

  return (
    <>
      <div className="container">
        <h1 className="contText">
          603 <b>Pokemons</b> for you to choose your favorite
        </h1>
        <div className="wrapper_input">
          <input
            className="input"
            placeholder="Encuentra tu pokémon..."
            onChange={(e) => {
              hendleChenge(e);
            }}
          />
        </div>
        <div className="wrapper_card">
          {/* {pokemons.pokemons ? (
            pokemons.pokemons.map((item: any, i: number) => {
              return <FetchCard pokemonUrl={item.url} key={i} />;
            })
          ) : (
            <Spiner />
          )} */}
          {PokenonsArr
            ? PokenonsArr.map((item: any, i: number) => {
                return <FetchCard pokemonUrl={item.url} key={i} />;
              })
            : null}
        </div>
        <div className="wrapper_btnPage">
          {BtnPage.map((item: any) => (
            <button
              key={item}
              className="btn_page"
              onClick={() => {
                render(item);
              }}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
}
