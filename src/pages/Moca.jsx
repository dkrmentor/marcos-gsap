import React from 'react';
import mocaHello from "../assets/images/moca-hello.png";
import moca from "../assets/images/Moca.svg";
import { Player } from '@lottiefiles/react-lottie-player';
import homeLogo from "../assets/images/mocaverse.svg";
import mocv1 from "../assets/images/moc-v1.svg";
import mocv2 from "../assets/images/moc-v2.svg";
import mocv3 from "../assets/images/moc-v3.svg";
import mocv0 from "../assets/images/moc-v0.svg";

import Grow from "../assets/images/realm-grow-text.svg";
import Play from "../assets/images/realm-play-text.svg";
import DoGood from "../assets/images/realm-dogood-text.svg";

import scrollIcon from "../assets/images/scroll.svg";


import { } from '../components';

const Moca = () => {
  return (
    <>
      <main className="moca">
        <div class="loadingscreen">
          <div class="wormhole">
            <Player
              src="https://lottie.host/081d51f6-cbd2-48e6-bc56-285d128a4d35/yrHCphvHC7.json"
              background="transparent"
              speed="1"
              loop
              autoplay
              class="portal"
            />
            <div class="fueling">Fueling...</div>
            <div class="loading-bar-block">
              <div class="loading-bar-outer">
                <div class="loading-bar-inner"></div>
              </div>
              <div class="percent"></div>
            </div>
          </div>
        </div>


        <h1>

          WORK IN PROGRESSS
        </h1>


      <section className="moca-section">
        <div className="moca-block">


          <div className="mv1">
            <img src={mocv0} alt="mocaverse" />
          </div>
          <div className="mv2">
            <img src={mocv1} alt="mocaverse" />
          </div>
          <div class="moca-intro">
      <div class="moca-hello"><img src={moca} alt="" /></div>
      <div class="moca-next-step btn">Hi!</div>
    </div>

          <div className="mv3">
            <img src={mocv2} alt="mocaverse" />
          </div>
          <div className="mv4">
            <img src={mocv2} alt="mocaverse" />
          </div>
        </div>

      </section>

      {/* <div class="moca-intro">
      <div class="moca-hello"><img src={mocaHello} alt="" /></div>
      <div class="moca-next-step btn">Hi!</div>
    </div>
    <div class="moca-instructions">
      <div class="moca-wrap">
        <div class="moca-character"><img src={moca} alt="" /></div>
        <div class="moca-message">
          <h2>URGENT!</h2>
          Our Mocas need to take on the spaceship to build the realms SOON! Now,
          can you help to pack some tools for them?
          <a href="/packing" class="next-btn btn">Sure, let’s pack!</a>
        </div>
      </div>
    </div> */}







      
        <div class="back-home"></div>
        <div class="wallet"></div>
      </main>



    </>
  );
}

export default Moca;