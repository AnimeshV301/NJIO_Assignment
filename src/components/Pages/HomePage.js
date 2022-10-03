import React from "react";
import MainNavigation from "../MainNavigation";
import Image1 from "../../Assets/Image1.webp";
import Image2 from "../../Assets/Image2.webp";
import slider1 from "../../Assets/slider1.webp";
import slider2 from "../../Assets/slider2.webp";
import slider3 from "../../Assets/slider3.webp";
import Footer from "./Footer";
import "./HomPage.css";
let HomePage = () => {
  return (
    <div>
      <MainNavigation></MainNavigation>
      <React.Fragment>
        <div className="container">
          <div>
            <img className="img1" src={Image1}></img>
          </div>
          <div className="heading">
            <h1>Great entertainment, without commitments</h1>
            <ul className="list">
              <li>&#x2713; NJOI HD Box</li>
              <li>&#x2713; HD Pack 30 days</li>
              <li>&#x2713; World Cup 2022 Pass</li>
              <li>&#x2713; sooka VIP + Sports 30 days (Mobile only) </li>
              <li>
                &#x2713; Free RM50 Go Shop Voucher (first 50 activation only){" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="container container2">
          <div className="heading">
            <h2>What's in NJOI HD Box</h2>
            <p className="para1">
              The NJOI HD Box, comes packed with &nbsp;
              <span className="span1">
                free 18 TV channels & 26 radio channels
              </span>{" "}
              for a variety of entertainment from local, international, kids,
              latest news and sports channels! NJOI HD Box with World Cup 2022
              Pass and HD Pack comes with Pek HD 30 days and access to World Cup
              matches starting 18 November 2022! <br></br>
              <span className="span2"> See what's included</span>
            </p>
          </div>
          <div>
            <img className="img1" src={Image2}></img>
          </div>
        </div>

        <section className="">
          <p className="sec3Head">Keep your family entertained with NJOI!</p>

          <p className="sec3para">
            A great combination of drama, comedies, sports, cartoons and a lot
            more. We <br></br> bring the entire family together.
          </p>
          <p className="sec3para2">See what else can you add</p>
          <div className="sliderdiv">
            <div>
              <img className="sliderimg" src={slider1}></img>
              <p className="imgpara">Murder By MoonLight</p>
              <p className="imgpara2">Drama Series</p>
            </div>
            <div>
              <img className="sliderimg" src={slider2}></img>
              <p className="imgpara">Hesteria The Series</p>
              <p className="imgpara2">Drama Series</p>
            </div>
            <div>
              <img className="sliderimg" src={slider3}></img>
              <p className="imgpara">Sport Mega Pack</p>
              <p className="imgpara2">Drama Series</p>
            </div>
          </div>
        </section>

        <section className="section4">
          <div>
            <img className="img1" src={Image1}></img>
          </div>
          <div className="heading">
            <h1 className="sec4head">
              Save more without sacrificing <br></br> great entertainment
            </h1>
            <p className="sec4para">
              Choose your favourite NJOI and start watching <br></br>{" "}
              immediately.
            </p>
            <button className="sec4btn">NJOI BOX SET AT RM499 ONLY</button>
          </div>
        </section>

        <section className="section5">
          <div className="sec5div1">
            <p>Also available at our official distributor or stores.*</p>
            <p className="sec5para">*Online exclusive promo does not apply</p>
          </div>

          <div className="icondiv">
            <span className="fa fa-search" style={{ color: "green" }}></span>
            <span className="icon1">Find a distributer near you</span>
            <span className="fa fa-home" style={{ color: "red" }}></span>
            <span className="icon1">Go Shop</span>
            <span className="fa fa-heart" style={{ color: "red" }}></span>
            <span className="icon1">Shopee</span>
            <span
              className="fa  fa-shopping-bag"
              style={{ color: "blue" }}
            ></span>
            <span className="icon1">Lazaa</span>
          </div>
        </section>
        <hr></hr>

        <div className="fixes-btn">
          <button className="sec4btn signupbtn">SIGN UP NOW</button>
        </div>

        <Footer></Footer>
      </React.Fragment>
    </div>
  );
};
export default HomePage;
