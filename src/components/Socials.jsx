import React from "react";
import Opensea from "../assets/images/opensea.svg"
import Discord from "../assets/images/discord.svg"
import Twitter from "../assets/images/twitter.svg"
import Instagram from "../assets/images/instagram.svg"
import Etherscan from "../assets/images/etherscan.svg"

function Socials() {
  return (
    <>
    <div className="socials-links">
      <ul>
        <li>
          <div className="socials"><img src={Opensea} alt="Opensea" /></div>
        </li>
        <li>
          <div className="socials"><img src={Discord} alt="Discord" /></div>
        </li>
        <li>
          <div className="socials"><img src={Twitter} alt="Twitter" /></div>
        </li>
        <li>
          <div className="socials"><img src={Instagram} alt="Instagram" /></div>
        </li>
        <li>
          <div className="socials"><img src={Etherscan} alt="Etherscan" /></div>
        </li>
      </ul>
    </div>
    </>
  );
}

export default Socials;
