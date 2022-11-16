import React from 'react';
import Case from "../assets/images/case.svg";
import Book from "../assets/images/book.svg";
import Hammer from "../assets/images/hammer.svg";
import Cube from "../assets/images/cube.svg";
import Keyboard from "../assets/images/keyboard.svg";
import Skateboard from "../assets/images/skateboard.svg";
import Binoculars from "../assets/images/binoculars.svg";

import moca from "../assets/images/Moca.svg";
import MicroMoca from "../assets/images/micromoca.svg";

const Packing = () => {
    return (
        <>
<section className="packing">
    <div class="packing-box-grid">
      <img src={Book} class="item book"alt=""  />
      <img src={Hammer} class="item hammer"alt=""  />
      <img src={Cube} class="item cube"alt=""  />
      <img src={Keyboard} class="item keyboard"alt=""  />
      <img src={Skateboard} class="item skateboard"alt=""  />
      <img src={Binoculars} class="item binoculars"alt=""  />
      <img src={Cube} class="item cube3"alt=""  />
      <img src={Book} class="item book2"alt=""  />
      <img src={Cube} class="item cube2"alt=""  />
      <img src={Keyboard} class="item keyboard2"alt=""  />
      <img src={Skateboard} class="item skateboard2"alt=""  />
      <img src={Binoculars} class="item binoculars2"alt=""  />
    </div>
    <div class="packing-section">
      <img src={Book} class="dragable book"alt=""  />
      <img src={Hammer} class="dragable hammer"alt=""  />
      <img src={Cube} class="dragable cube"alt=""  />
      <img src={Keyboard} class="dragable keyboard"alt=""  />
      <img src={Skateboard} class="dragable skateboard"alt=""  />
      <img src={Binoculars} class="dragable binoculars"alt=""  />
      <img src={Cube} class="dragable cube3"alt=""  />
      <img src={Book} class="dragable book2"alt=""  />
      <img src={Cube} class="dragable cube2"alt=""  />
      <img src={Keyboard} class="dragable keyboard2"alt=""  />
      <img src={Skateboard} class="dragable skateboard2"alt=""  />
      <img src={Binoculars} class="dragable binoculars2"alt=""  />
      <div class="case">
        <img src={Case}alt=""  />
        <div class="dropable dropzone-1"></div>
        <div class="dropable dropzone-2"></div>
        <div class="dropable dropzone-3"></div>
        <span class="res"></span>
      </div>
      <div class="mini-moca">
        <div class="micro-moca"><img src={MicroMoca} alt="" /></div>
        <div class="moca-wrapper">
          <div class="moca-text txt">Seems like you’re ready, shall we?</div>
          <a href="/personality" class="start-button btn"
            >I’m ready to go off to the realms!</a
          >
        </div>
      </div>
    </div>
    <div class="moca-instructions">
      <div class="moca-wrap">
        <div class="moca-character"><img src={moca} alt="" /></div>
        <div class="moca-message">
          <div class="message-1">
            Select 3 objects to put into the suitcase for our Mocas! Be careful,
            some Mocas might not like to work with some tools and personality...
            so what you pack and who you are will <span
              >determine which Moca you can mint!</span
            >
            <div class="next-btn btn">Next</div>
          </div>
          <div class="message-2">
            After minting, your Moca will only be revealed on <span
              >[dd/mm/yyyy hh:mm].</span
            >
            So follow your heart and I’ll see you in a bit!
            <div class="got-it btn">Got it</div>
          </div>
        </div>
      </div>
    </div>
    <div class="back-home"></div>
    <div class="wallet"></div>
</section>
        </>
    );
}

export default Packing;