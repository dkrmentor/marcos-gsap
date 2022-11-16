import React from "react";
import Learn from "../assets/images/realm-learn-text.svg";
import Grow from "../assets/images/realm-grow-text.svg";
import Play from "../assets/images/realm-play-text.svg";
import DoGood from "../assets/images/realm-dogood-text.svg";

import { Player } from "@lottiefiles/react-lottie-player";

function Realms() {
  return (
    <>
      <section id="realms" className="realms-section">
        <div className="left-side">
          <div className="content">
            <div className="realms-play">
              <div className="realm-info-bg">
                <img src={Play} alt="Play Realm" className="text" />
                <div className="realm-text">
                  Investing into the future is more than just a singular action.
                  In the Mocaverse, there will be opportunities to have rights
                  to your PFP and a space to build out our treasury.
                </div>
                <div className="realm-utility">
                  Utility coming soon on
                  <br />
                  dd/mm/yy HH:MM Local time
                </div>
              </div>
            </div>
          </div>

          <div className="content">
            <div className="realms-linvest">
              <div className="realm-info-bg">
                <img src={Grow} alt="Invest Realm" className="text" />
                <div className="realm-text">
                  Investing into the future is more than just a singular action.
                  In the Mocaverse, there will be opportunities to have rights
                  to your PFP and a space to build out our treasury.
                </div>
                <div className="realm-utility">
                  Utility coming soon on
                  <br />
                  dd/mm/yy HH:MM Local time
                </div>
              </div>
            </div>
          </div>

          <div className="content">
            <div className="realms-learn">
              <div className="realm-info-bg">
                <img src={Learn} alt="Learn Realm" className="text" />
                <div className="realm-text">
                  Investing into the future is more than just a singular action.
                  In the Mocaverse, there will be opportunities to have rights
                  to your PFP and a space to build out our treasury.
                </div>
                <div className="realm-utility">
                  Utility coming soon on
                  <br /> dd/mm/yy HH:MM Local time
                </div>
              </div>
            </div>
          </div>

          <div className="content">
            <div className="realms-do-good">
              <div className="realm-info-bg">
                <img src={DoGood} alt="DoGood Realm" className="text" />
                <div className="realm-text">
                  Investing into the future is more than just a singular action.
                  In the Mocaverse, there will be opportunities to have rights
                  to your PFP and a space to build out our treasury.
                </div>
                <div className="realm-utility">
                  Utility coming soon on
                  <br />
                  dd/mm/yy HH:MM Local time
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right-side">
          <div className="realm-block p1">
            <div className="invest-realm ">
              <Player
                src="https://lottie.host/8dfc5e5d-80d3-46c2-8aac-d7d916469638/zeD1N64UDY.json"
                background="transparent"
                speed="1"
                loop
                autoplay
                className="realm"
              />
            </div>
            <div className="play-realm ">
              <Player
                src="https://lottie.host/d1e80d63-f2fb-419b-9a54-dc2d341090ca/XmTPMpvUSZ.json"
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
          </div>
        </div>
      </section>
    </>
  );
}

export default Realms;
