"use client";
import { ROUTER } from "@/router/router.enum";
import Link from "next/link";
import React from "react";
import "./header.scss";
import Image from "next/image";
import Logo from "@/img/logo.svg";
import { usePathname } from "next/navigation";

const Header = () => {
  const router = usePathname();
  return (
    <header>
      <div className="header_shadow">
        <div className="wrapper_header">
          <input id="menu-toggle" type="checkbox" />
          <div className="container_logo">
            <Image className="logoMain" src={Logo} alt="" />
          </div>
          <label className="menu-button-container" htmlFor="menu-toggle">
            <div className="menu-button"></div>
          </label>
          <ul className="menu wrapper_link">
            <li className="container_link">
              <Image className="logo" src={Logo} alt="" />
              <div className="container_active">
                <Link className="link" href={ROUTER.HOME}>
                  <div className="text_link" id="home">
                    Home
                  </div>
                </Link>
                <div className={router == ROUTER.HOME ? "line" : ""}></div>
              </div>
              <div className="container_active">
                <Link className="link" href={ROUTER.Pokédex}>
                  <div className="text_link" id="pokedex">
                    Pokédex
                  </div>
                </Link>
                <div className={router == ROUTER.Pokédex ? "line" : ""}></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
    // <header>
    //   <div className="header_shadow">
    //     <div className="wrapper_header">
    //       <Image src={Logo} alt="" />
    //       <div className="wrapper_link">
    //         <div className="container_link">
    //           <Link className="link" href={ROUTER.HOME}>
    //             <div className="text_link" id="home">Home</div>
    //           </Link>
    //           <div className={router == ROUTER.HOME ? "line" : ""}></div>
    //         </div>
    //         <div className="container_link">
    //           <Link className="link" href={ROUTER.Pokédex}>
    //             <div className="text_link" id="pokedex">Pokédex</div>
    //           </Link>
    //           <div className={router == ROUTER.Pokédex ? "line" : ""}></div>
    //         </div>
    //         <input id="menu-toggle" type="checkbox" />
    //         <label className="menu-button-container" for="menu-toggle">
    //           <div className="menu-button"></div>
    //         </label>
    //       </div>
    //     </div>
    //   </div>
    // </header>
  );
};
export default Header;
