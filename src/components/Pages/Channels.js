import React from "react";
import MainNavigation from "../MainNavigation";
import Image2 from "../../Assets/Channelimg1.png";
import slider1 from "../../Assets/slider1.webp";
import slider2 from "../../Assets/slider2.webp";
import slider3 from "../../Assets/slider3.webp";
import tvimg from "../../Assets/tvimg.png";
import brand from "../../Assets/brand.png";
import brand2 from "../../Assets/brand2.png";
import Footer from "./Footer";
import "./Channel.css";
let Channels = () => {
  return (
    <React.Fragment>
      <MainNavigation></MainNavigation>
      <div className="container container2">
        <div>
          <img className="chnlimg" src={Image2}></img>
        </div>
        <div>
          <h2 className="chnlhead">
            It’s so easy to NJOI the hottest <br></br> entertainment with NJOI
            Packs
          </h2>
          <p className="chnlpara1">
            Purchase HD Pack / HD Bundles (Sports Mega Pack Baharu, Kids Pack
            Baharu, Pek Popcorn, Pek Kombolicious Baharu) to enjoy more
            entertainment from other prepaid packs or ala carte channels
          </p>
        </div>
      </div>

      <section className="chnlsec2">
        <p className="sec3Head">Top 9 Purchases</p>

        <div className="sliderdiv">
          <div>
            <img className="sliderimg" src={slider1}></img>
          </div>
          <div>
            <img className="sliderimg" src={slider2}></img>
          </div>
          <div>
            <img className="sliderimg" src={slider3}></img>
          </div>
        </div>
      </section>

      <section className="chnlsec3">
        <div>
          <img className="chnlimg1" src={tvimg}></img>
        </div>
        <div>
          <h1 className="sec3chnlpara">NJOI now in High Definition (HD)</h1>
          <p className="sec3chnlpara1">
            A variety of content including local and international
            entertainment, kids’ shows, latest news, sports events and many more
            exciting programs await you and your family. Buy HD Pack now, it’s
            only RM15 for 30 days. Now with new channels, HITS & HITS Movies.
          </p>
          <img className="brandimg" src={brand}></img>
          <button className="brandbtn">FIND OUT MORE</button>
        </div>
      </section>

      <section className="chnlsec4">
        <div>
          <h1 className="Sec4cnlpara">
            Enjoy non-stop entertainment with <br></br> NJOI prepaid channels in
            HD
          </h1>
          <p className="Sec4chnlpara2">
            Get more out of your favourite programs by purchasing <br></br> HD
            channels with your HD Pack.
          </p>
          <button className="brandbtn brandbtn2">SEE ALL HD CHANNELS</button>
        </div>
        <div>
          <img className="brand2" src={brand2}></img>
        </div>
      </section>
      <Footer></Footer>
    </React.Fragment>
  );
};
export default Channels;
