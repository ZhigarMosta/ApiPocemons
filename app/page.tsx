"use client";
import React from "react";
import "./page.scss";
import Btn from "@/components/btn/Btn";
import DescriptionText from "@/components/descriptionText/descriptionText";
import MainText from "@/components/mainText/mainText";
import Pikachu from "@/img/banner.svg";
import Pikachu2 from "@/img/banner2.svg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="main_home">
      <div className="wrapper_homePage">
        <div className="container_Pikachu2">
          <Image src={Pikachu2} alt="" className="Pikachu" />
        </div>
        <div className="left_side">
          <MainText />
          <DescriptionText>
            You can know the type of Pokemon, its strengths, disadvantages and
            abilities
          </DescriptionText>
          <Btn classBtn="btn">See pokemons</Btn>
        </div>
        <div className="container_Pikachu">
          <Image src={Pikachu} alt="" className="Pikachu" />
        </div>
      </div>
    </main>
  );
}
