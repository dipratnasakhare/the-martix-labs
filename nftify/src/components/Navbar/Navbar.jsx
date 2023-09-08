import React, { useState } from "react";
import navbarCss from "./Navbar.module.css";
// images
import logo from "../../icons/Vector.png";
import token_logo from "../../icons/baseline-token.png";
import pair_logo from "../../icons/baseline-pair.png";
import facebook from "../../icons/facebook.png";
import linkedin from "../../icons/linkedin.png";
import twitter from "../../icons/twitter.png";
export const Navbar = () => {

  const [bool, setBool] = useState(true)

  const HandelClick = () => {
    setBool(!bool)
  }

  return (
    <div className={navbarCss.navbar}>
      <div> <div id={navbarCss.firstDiv}>
        <img src={logo} alt="logo" /><p> NFTify </p>
      </div>

      <div onClick={HandelClick} style={{backgroundColor:bool ? 'rgba(243, 0, 80, 1)' : ""}}>
        <img src={token_logo} alt="token logo" />
        <p>Token Address</p>
      </div>

      <div  onClick={HandelClick} style={{backgroundColor: !bool ? 'rgba(243, 0, 80, 1)' : ""}}>
        <img src={pair_logo} alt="pair logo" />
        <p>Pair Address</p>
      </div></div>

      <div id={navbarCss.social_logo}>
        <img src={facebook} alt="facebook" />
        <img src={linkedin} alt="linkedin" />
        <img src={twitter} alt="twiter" />
      </div>
    </div>
  );
};
