import "./card.scss";
import "@/components/modalCard/modalCard.scss";
import React from "react";
import { useState } from "react";
import Modal from "@/components/modalCard/modalCard";
interface CardProps {
  name: string;
  urlImage: string;
  attack: string;
  attack_stat: string;
  defense: string;
  defense_stat: string;
  spattack: string;
  spdefense: string;
  type_1: string;
  type_2: string;
  order: string;
  exp: string;
  hp: string;
  ab1: string;
  ab2: string;
}

function Card({
  name,
  urlImage,
  attack,
  attack_stat,
  defense,
  defense_stat,
  type_2,
  type_1,
  order,
  exp,
  hp,
  ab1,
  ab2,
  spattack,
  spdefense,
}: CardProps) {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      {modalActive && (
        <Modal
          name={name}
          onClose={setModalActive}
          urlImage={urlImage}
          attack_stat={attack_stat}
          defense_stat={defense_stat}
          spattack={spattack}
          spdefense={spdefense}
          ab1={ab1}
          ab2={ab2}
          hp={hp}
          order={order}
          exp={exp}
          type_1={type_1}
          type_2={type_2}
        />
      )}
      <div className="pokemon" onClick={() => setModalActive(!modalActive)}>
        {" "}
        <div>
          <h2 className="pokemonName">{name}</h2>
          <div className="stats">
            <div className="stat">
              <p className="stat_circle">{attack_stat}</p>
              <p className="stat_text">{attack}</p>
            </div>
            <div className="stat">
              <p className="stat_circle">{defense_stat}</p>
              <p className="stat_text">{defense}</p>
            </div>
          </div>
          <div className="types">
            <p className="type_1">{type_1}</p>
            <p className="type_2">{type_2}</p>
          </div>
        </div>
        <img src={urlImage} alt="" />
      </div>
    </>
  );
}

export default Card;
