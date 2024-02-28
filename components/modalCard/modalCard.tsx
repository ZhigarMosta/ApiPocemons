"use client";
import React from "react";

interface ModalProps {
  onClose: any;
  name: string;
  urlImage: string;
  attack_stat: string;
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

const Modal = (props: ModalProps) => {
  return (
    <div className="wrapper_modal">
      <div className="modal">
        <div className="modal-content">
          <button className="close" onClick={() => props.onClose(false)}>
            .
          </button>
          <div className="flex">
            <div className="imgSide">
              <img src={props.urlImage} alt="" />
              <div className="btns">
                <p className="mtype_1">{props.type_1}</p>
                <p className="mtype_2">{props.type_2}</p>
              </div>
            </div>
            <div className="discSide">
              <div className="up">
                <p>{props.name}</p>
                <div className="gen">
                  <p>Generation 1</p>
                  <p className="order">{props.order}</p>
                </div>
              </div>
              <div className="abils">
                <p>Abilities</p>
                <p>
                  {props.ab1} - {props.ab2}
                </p>
              </div>
              <div className="points">
                <div className="hp">
                  <p>Healthy Points</p>
                  <p className="pointsStyle">{props.hp}</p>
                  <div style={{ width: props.hp }}></div>
                </div>
                <div className="exp">
                  <p>Experience</p>
                  <p className="pointsStyle">{props.exp}</p>
                  <div style={{ width: props.exp }}></div>
                </div>
              </div>
              <div className="mstats">
                <div className="mstat">
                  <p className="num">{props.defense_stat}</p>
                  <p>Defense</p>
                </div>
                <div className="mstat">
                  <p className="num">{props.attack_stat}</p>
                  <p>Attack</p>
                </div>
                <div className="mstat">
                  <p className="num">{props.spattack}</p>
                  <p>Sp Attack</p>
                </div>
                <div className="mstat">
                  <p className="num">{props.spdefense}</p>
                  <p>Sp Defense</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
