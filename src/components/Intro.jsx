import React from "react";

import homeLogo from "../assets/images/mocaverse.svg";
import Learn from "../assets/images/realm-learn-text.svg";
import Grow from "../assets/images/realm-grow-text.svg";
import Play from "../assets/images/realm-play-text.svg";
import DoGood from "../assets/images/realm-dogood-text.svg";

import scrollIcon from "../assets/images/scroll.svg";

import { Player } from '@lottiefiles/react-lottie-player';

function Intro() {
  return (
    <>
    <section className="intro">
      <div className="home-logo-counter-block">
        <img src={homeLogo} alt="OFF TO THE REALMS" className="home-logo" />
        <div className="home-wrapper">
          <div className="home-countdown">
            <div className="timer">
            6d:22h:22m:22s

            </div>
            </div>
          <div className="home-moca-counter">
            <div className="home-moca-counter-wrapper">
              <div className="counter">1</div>
              <div className="counter">0</div>
              <div className="counter">0</div>
              <div className="counter">0</div>
            </div>
            <div className="text">Moca Are Minted</div>
          </div>
          <a href="#" className="btn">Connect</a>
        </div>
        <div className="learn-realm">
          <img src={Learn} alt="Learn Realm"  className="text"/>
        <Player
          src="https://lottie.host/fd30ef63-fc4a-4d60-a1f9-a3a822d4232d/HsoBY6mjLU.json"
          background="transparent"
          speed="1"
          loop
          autoplay
          className="realm"
        />
      </div>
      <div className="dogood-realm">
        <img src={DoGood} alt="DoGood Realm"  className="text"/>
        <Player
          src="https://lottie.host/157af767-3686-40a8-8604-9e6bf2573199/eSs10T3eEJ.json"
          background="transparent"
          speed="1"
          loop
          autoplay
          className="realm"
        />
      </div>
        <div className="invest-realm">
          <img src={Grow} alt="Invest Realm"  className="text"/>
        <Player
          src="https://lottie.host/8dfc5e5d-80d3-46c2-8aac-d7d916469638/zeD1N64UDY.json"
          background="transparent"
          speed="1"
          loop
          autoplay
          className="realm"
        />
      </div>
        <div className="play-realm">
          <img src={Play} alt="Play Realm"  className="text"/>
        <Player
          src="https://lottie.host/d1e80d63-f2fb-419b-9a54-dc2d341090ca/XmTPMpvUSZ.json"
          background="transparent"
          speed="1"
          loop
          autoplay
          className="realm"
        />
      </div>
    </div>
    <div className="scroll-icon"><img src={scrollIcon} alt="Scroll" /></div>
    </section>
    </>
  );
}

export default Intro;
