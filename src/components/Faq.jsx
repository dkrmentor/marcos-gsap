import {React} from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import helpBtn from "../assets/images/help.svg";
import Accordion from 'react-bootstrap/Accordion';

function Faq() {
  return (
    <>
    <section id="faq" className="faq-section">
      <div class="faq">
    <div className="logo-block">
      <Player
        src="https://lottie.host/851da942-feff-4e13-866e-aec95c4f2b50/w2ENu2yclw.json"
        background="transparent"
        speed="1"
        loop
        autoplay
        className="faq-title"
      />
    </div>
    <div className="faq-block">
      <div className="faq-scroll">
      <Accordion>
      <Accordion.Item eventKey="0" className="questions">
        <Accordion.Header className="btn-wrap">
            Lorem ipsum dolor sit amet?<span className="arrow"></span>
          </Accordion.Header>
          <Accordion.Body> 
            <div className="answers">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequatur ipsam culpa alias ea sed consequuntur illo dicta
                commodi, accusamus soluta saepe quam assumenda ducimus nobis
                tenetur, cumque voluptatum, omnis corrupti.
              </p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="questions">
        <Accordion.Header className="btn-wrap">
            Lorem ipsum dolor sit amet?<span className="arrow"></span>
          </Accordion.Header>
          <Accordion.Body> 
            <div className="answers">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequatur ipsam culpa alias ea sed consequuntur illo dicta
                commodi, accusamus soluta saepe quam assumenda ducimus nobis
                tenetur, cumque voluptatum, omnis corrupti.
              </p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="questions">
        <Accordion.Header className="btn-wrap">
            Lorem ipsum dolor sit amet?<span className="arrow"></span>
          </Accordion.Header>
          <Accordion.Body> 
            <div className="answers">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequatur ipsam culpa alias ea sed consequuntur illo dicta
                commodi, accusamus soluta saepe quam assumenda ducimus nobis
                tenetur, cumque voluptatum, omnis corrupti.
              </p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" className="questions">
        <Accordion.Header className="btn-wrap">
            Lorem ipsum dolor sit amet?<span className="arrow"></span>
          </Accordion.Header>
          <Accordion.Body> 
            <div className="answers">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequatur ipsam culpa alias ea sed consequuntur illo dicta
                commodi, accusamus soluta saepe quam assumenda ducimus nobis
                tenetur, cumque voluptatum, omnis corrupti.
              </p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>
      </div>
    </div>
  </div>
  <a href="https://google.com" class="helpbtn"
      ><img src={helpBtn} alt="check out our discord" />
    </a>
    <p className="legal"><a href="https://google.com">Terms of Use</a> and <a href="https://google.com">License Agreement</a></p>
  </section>
  </>
  );
}

export default Faq;
