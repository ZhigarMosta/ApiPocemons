"use client";
import React from "react";
import "./spiner.scss";
import Pokeball from "@/img/Pokeball.svg";
import Image from "next/image";
const Spiner = () => {
  return (
    <div className="wrapper_spiner">
      <div className="spiner">
        <Image src={Pokeball} alt="" />
      </div>
    </div>
  );
};
export default Spiner;
