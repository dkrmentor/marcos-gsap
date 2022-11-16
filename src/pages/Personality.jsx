import React from 'react';
import mintMoca from "../assets/images/mint-moca.png";
import resultsImg from "../assets/images/results-placeholder.png";

import {} from '../components';

const Personality = () => {
    return (
        <>
<section className="minting">
  <div className="personality">
    <div className="result-wrapper">
      <div className="results-info">
        <div className="result-image-block">
          <div className="image">
            <img src={resultsImg} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="title-wrapper">
      <img src={mintMoca} alt="" />
    </div>

    <div className="minting-wrapper">
      <div className="your-quota-wrapper">
        <h3>Your Quota</h3>
        <div className="free-mint">
          <div className="lable">Free Mint</div>
          <div className="number">1</div>
        </div>
        <div className="pay-mint">
          <div className="lable">Pay Mint</div>
          <div className="number">1</div>
        </div>
      </div>
      <div className="quantity-wrapper">
        <div className="quantity">
          <h3>Quantity</h3>
          <div className="quantity-block">
            <span id="qty">999</span>
            <div className="buttons-block">
              <div className="minus"></div>
              <div className="plus"></div>
            </div>
          </div>
          <div className="max">Max</div>
        </div>
        <div className="pay-with">
          <h3>Pay With</h3>
          <div className="pay-with-block">
            <div className="blockchain">
              <div className="blockchain-name">ETH</div>
            </div>
            <div className="dropdown"></div>
          </div>
        </div>
      </div>
      <div className="total-wrapper">
        <h3 className="total">Total</h3>
        <span className="price">0 eth</span>
        <span className="cost-in-usd">(0-usd)</span>
      </div>
    </div>

    <a href="/completion" className="btn">Mint</a>

    <div className="terms-block">
      By minting, you will agree to the <span className="terms-btn"
        >Terms & Conditions</span
      >
    </div>

    <div className="need-help-block">
      <div href="" title="Need Help">Need Help?</div>
    </div>

    <div href="/" className="back-home"></div>
    <div className="wallet"></div>
  </div>
</section>
        </>
    );
}

export default Personality;