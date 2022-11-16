import React from "react";
import story from "../assets/images/storyline.svg";
import storyVector from "../assets/images/storyVector.svg";
import storyVectorDark from "../assets/images/textbox-dark.svg";

import Learnsmall from "../assets/images/realms-learn-small.png";
import Growsmall from "../assets/images/realms-build-small.png";
import Playsmall from "../assets/images/realms-play-small.png";
import DoGoodsmall from "../assets/images/realms-dogood-small.png";

import { Player } from "@lottiefiles/react-lottie-player";
function Story() {

  return (
    <>
      <section id="stroy-of-mocas" className="story-of-mocas-section">
        <div className="story-logo-counter-block">
          <img src={story} alt="OFF TO THE REALMS" className="story-logo" />
          <div className="story-wrapper">
            <img
              src={storyVector}
              alt="OFF TO THE REALMS"
              className="story-content"
            />
            <p className="paragraph">
              You can hear them from light years away.
              <br />
              <br />
              The Mocas are a bustling community of evolved beings in the
              Mocaverse. They are bold and infinitely creative creatures who
              embody the values of togetherness, aspiring to build towards a
              greater purpose in life.
            </p>
          </div>
          <div className="learn-realm">
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
      </section>
      <section id="stroy-of-mocas" className="story-of-mocas-section dark">
        <div className="orbs"></div>
        <div className="story-logo-counter-block">
          <div className="story-wrapper">
            <img
              src={storyVectorDark}
              alt="OFF TO THE REALMS"
              className="story-content"
            />
            <p className="paragraph">
              You can hear them from light years away.
              <br />
              <br />
              The Mocas are a bustling community of evolved beings in the
              Mocaverse. They are bold and infinitely creative creatures who
              embody the values of togetherness, aspiring to build towards a
              greater purpose in life.
            </p>
          </div>
          <div className="learn-realm">
          <img src={Learnsmall} alt="Learn Realm"/>
          </div>
          <div className="dogood-realm">
          <img src={DoGoodsmall} alt="Learn Realm"/>
          </div>
          <div className="invest-realm">
          <img src={Growsmall} alt="Learn Realm"/>
          </div>
          <div className="play-realm">
          <img src={Playsmall} alt="Learn Realm" />
          </div>
        </div>
      </section>
      <section id="stroy-of-mocas" className="story-of-mocas-section">
            <div className="story-final">
            <div className="circles"></div>
            <div className="rainbow"></div>
            <div className="portal"></div>
            <div className="sun-blob">
              <div className="text-block">
              To spread the Mocaverse ethos, the Mocas built a portal. This portal is a conduit for other beings to travel to the Mocaverse, and invites have been sent to current (and future) Mocas.
              </div>
            </div>
        </div>
      </section>
      <section id="stroy-of-mocas" className="story-of-mocas-section">
            <div className="story-final">
            <div className="circles"></div>
            <div className="rainbow"></div>
            <div className="portal"></div>
            <div className="clouds"></div>
            <div className="moca"></div>
            <div className="unicorn">
              <div className="text-block ">
              <p><span>The Mocas are destined to bridge their special abilities with technology to build the Mocaverse.</span></p>
              <p>Treasures are just waiting to be discovered, and the Mocas are continuing to build the realms for onboarding the next billion beings via the portal.</p>
              <p>Join the Mocas for an adventurous life celebrating friendship and shared value. Pack your suitcase, we’re off to the realms!</p>
              <div className="btn">Mint</div>
              </div>
            </div>
        </div>
      </section>
    </>
  );
}

export default Story;
