import React from "react";
import open from "../assets/images/mobile-menu-btn.svg";
import close from "../assets/images/mobile-menu-bn-close.svg";

import Opensea from "../assets/images/opensea.svg";
import Discord from "../assets/images/discord.svg";
import Twitter from "../assets/images/twitter.svg";
import Instagram from "../assets/images/instagram.svg";
import Etherscan from "../assets/images/etherscan.svg";

import HomeIcon from "../assets/images/moca-home.svg";

function Header() {
  return (
    <>
      <header>
        <nav>
          <div className="desktop">
            <li>
              <a href="/">
                <img src={HomeIcon} alt="Mocaverse" />
              </a>
            </li>
            <li>
              <a href="#stroy-of-mocas">Story of Mocas</a>
            </li>
            <li>
              <a href="#realms">Realms</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <div className="connect btn">Connect</div>
            </li>
          </div>
          <div className="mobile">
            <div className="mobile-btn">
              <img src={open} className="mobile-btn-open"  alt=""/>
              <img src={close} className="mobile-btn-close hide"  alt=""/>
            </div>
            <div className="mobile-nav">
              <li>
                <a href="#stroy-of-mocas">Mocaverse</a>
              </li>
              <li>
                <a href="#realms">Realms</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <div className="disconnect">Disconnect</div>
              </li>
              <div className="social-btn">
                <ul>
                  <li>
                    <div className="socials">
                      <img src={Opensea} alt="Opensea" />
                    </div>
                  </li>
                  <li>
                    <div className="socials">
                      <img src={Discord} alt="Discord" />
                    </div>
                  </li>
                  <li>
                    <div className="socials">
                      <img src={Twitter} alt="Twitter" />
                    </div>
                  </li>
                  <li>
                    <div className="socials">
                      <img src={Instagram} alt="Instagram" />
                    </div>
                  </li>
                  <li>
                    <div className="socials">
                      <img src={Etherscan} alt="Etherscan" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <li>
              <div className="connect btn">Connect</div>
            </li>
          </div>
        </nav>
        <div className="overlay"></div>
      </header>
    </>
  );
}

export default Header;
