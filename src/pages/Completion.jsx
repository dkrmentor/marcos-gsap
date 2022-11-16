import React from 'react';
import totheMOON from "../assets/images/tothemoon.svg";
import Web from "../assets/images/web.svg";
import Contract from "../assets/images/contract.svg";

import Discord from "../assets/images/discord.svg"
import Twitter from "../assets/images/twitter.svg"
import Instagram from "../assets/images/instagram.svg"

import Learn from "../assets/images/realm-learn-text.svg";
import Grow from "../assets/images/realm-grow-text.svg";
import Play from "../assets/images/realm-play-text.svg";
import DoGood from "../assets/images/realm-dogood-text.svg";

import { Player } from '@lottiefiles/react-lottie-player';

import {} from '../components';

const Completion = () => {
    return (
        <>
<section className="completion no-scroll">
  <div className="completion-mint-confirmed-2">
    <div className="tothemoon-2"><img src={totheMOON} alt="" /></div>
    <div className="web-2"><img src={Web} alt="" /></div>
    <div className="content">
      <h2>AWESOME!</h2>
      <p>You minted 1 Moca</p>
      <div className="contract"><img src={Contract} alt="" /></div>
    </div>
  </div>
  <div className="completion-info">
    <h2>
      Send your Moca(s) now to
      <span>build the Realms</span>
    </h2>
    <p>The more Mocas are sent, the faster the realms are built!</p>
    <div className="moca">
      <div className="moca-icon"></div>
      <div className="moca-number">x1</div>
    </div>
  </div>
  <div className="realm-wrapper-desktop">
    <div className="learn-realm">
      <img src={Learn} alt="Learn Realm" className="text" />
      <Player
        src="https://lottie.host/fd30ef63-fc4a-4d60-a1f9-a3a822d4232d/HsoBY6mjLU.json"
        background="transparent"
        speed="1"
        loop
        autoplay
        className="realm"
      />
      <div className="send-moca">
        <div className="mocas"><div className="count">000</div>Mocas</div><div
          className="send"
        >
          Pick Heres
        </div>
      </div>
      <div className="whatsthis"></div>
    </div>
    <div className="invest-realm">
      <img src={Grow} alt="Invest Realm" className="text" />
      <Player
        src="https://lottie.host/8dfc5e5d-80d3-46c2-8aac-d7d916469638/zeD1N64UDY.json"
        background="transparent"
        speed="1"
        loop
        autoplay
        className="realm"
      />
      <div className="send-moca">
        <div className="mocas"><div className="count">000</div>Mocas</div><div
          className="send"
        >
          Pick Heres
        </div>
      </div>
      <div className="whatsthis"></div>
    </div>
    <div className="play-realm">
      <img src={Play} alt="Play Realm" className="text" />
      <Player
        src="https://lottie.host/d1e80d63-f2fb-419b-9a54-dc2d341090ca/XmTPMpvUSZ.json"
        background="transparent"
        speed="1"
        loop
        autoplay
        className="realm"
      />
      <div className="send-moca">
        <div className="mocas"><div className="count">000</div>Mocas</div><div
          className="send"
        >
          Pick Heres
        </div>
      </div>
      <div className="whatsthis"></div>
    </div>
    <div className="dogood-realm">
      <img src={DoGood} alt="DoGood Realm" className="text" />
      <Player
        src="https://lottie.host/157af767-3686-40a8-8604-9e6bf2573199/eSs10T3eEJ.json"
        background="transparent"
        speed="1"
        loop
        autoplay
        className="realm"
      />
      <div className="send-moca">
        <div className="mocas"><div className="count">000</div>Mocas</div><div
          className="send"
        >
          Pick Heres
        </div>
      </div>
      <div className="whatsthis"></div>
    </div>
  </div>

  <div className="realm-wrapper-mobile-block">
    <div className="learn-realm show">
      <img src={Learn} alt="Learn Realm" className="text" />
      <Player
        src="https://lottie.host/fd30ef63-fc4a-4d60-a1f9-a3a822d4232d/HsoBY6mjLU.json"
        background="transparent"
        speed="1"
        loop
        autoplay
        className="realm"
      />
      <div className="send-moca">
        <div className="mocas"><div className="count">000</div>Mocas</div><div
          className="send"
        >
          Pick Heres
        </div>
      </div>
      <div className="whatsthis"></div>
    </div>
    <div className="invest-realm">
      <img src={Grow} alt="Invest Realm" className="text" />
      <Player
        src="https://lottie.host/8dfc5e5d-80d3-46c2-8aac-d7d916469638/zeD1N64UDY.json"
        background="transparent"
        speed="1"
        loop
        autoplay
        className="realm"
      />
      <div className="send-moca">
        <div className="mocas"><div className="count">000</div>Mocas</div><div
          className="send"
        >
          Pick Heres
        </div>
      </div>
      <div className="whatsthis"></div>
    </div>
    <div className="play-realm">
      <img src={Play} alt="Play Realm" className="text" />
      <Player
        src="https://lottie.host/d1e80d63-f2fb-419b-9a54-dc2d341090ca/XmTPMpvUSZ.json"
        background="transparent"
        speed="1"
        loop
        autoplay
        className="realm"
      />
      <div className="send-moca">
        <div className="mocas"><div className="count">000</div>Mocas</div><div
          className="send"
        >
          Pick Heres
        </div>
      </div>
      <div className="whatsthis"></div>
    </div>
    <div className="dogood-realm">
      <img src={DoGood} alt="DoGood Realm" className="text" />
      <Player
        src="https://lottie.host/157af767-3686-40a8-8604-9e6bf2573199/eSs10T3eEJ.json"
        background="transparent"
        speed="1"
        loop
        autoplay
        className="realm"
      />
      <div className="send-moca">
        <div className="mocas"><div className="count">000</div>Mocas</div><div
          className="send"
        >
          Pick Heres
        </div>
      </div>
      <div className="whatsthis"></div>
    </div>
    <div className="realm-wrapper-mobile">
    <Player
    src="https://lottie.host/fd30ef63-fc4a-4d60-a1f9-a3a822d4232d/HsoBY6mjLU.json"
    background="transparent"
    speed="1"
    loop
    autoplay
    className="realm learn-btn"
  />
  <Player
  src="https://lottie.host/8dfc5e5d-80d3-46c2-8aac-d7d916469638/zeD1N64UDY.json"
  background="transparent"
  speed="1"
  loop
  autoplay
  className="realm invest-btn"
/>
<Player
src="https://lottie.host/d1e80d63-f2fb-419b-9a54-dc2d341090ca/XmTPMpvUSZ.json"
background="transparent"
speed="1"
loop
autoplay
className="realm play-btn"
/>
<Player
src="https://lottie.host/157af767-3686-40a8-8604-9e6bf2573199/eSs10T3eEJ.json"
background="transparent"
speed="1"
loop
autoplay
className="realm dogood-btn"
/>
</div>
</div>

  <div className="personality-results">

  </div>
  <div className="result-share-wrapper">
    <div className="share">
      <div className="discord"><img src={Discord} alt="Discord" /></div>
      <div className="twitter"><img src={Twitter} alt="Twitter" /></div>
      <div className="instagram"><img src={Instagram} alt="Instagram" /></div>
      <div className="copy">Copy Content</div>
    </div>
  </div>
  <div className="backtohome">
    <a href="/" className="btn">Back to Home</a>
  </div>
  <div className="completion-screen">
    <div className="completion-mint-confirmed">
      <div className="tothemoon"><img src={totheMOON} alt="" /></div>
      <div className="web"><img src={Web} alt="" /></div>
      <div className="content">
        <h2>AWESOME!</h2>
        <p>You minted 1 Moca</p>
        <div className="contract"><img src={Contract} alt="" /></div>
      </div>
    </div>
  </div>
</section>
        </>
    );
}

export default  Completion;