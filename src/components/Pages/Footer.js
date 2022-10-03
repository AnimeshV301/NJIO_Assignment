import React from "react";
import "./Footer.css";
let Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <p className="footpara">Call us or WhatsApp 'Hi' to +603 9543 8100</p>
        <span className="footicon">
          <i class="fa fa-whatsapp" aria-hidden="true"></i>
        </span>
        <span className="footicon">
          <i class="fa fa-whatsapp" aria-hidden="true"></i>
        </span>
        <span className="footicon">
          <i class="fa fa-whatsapp" aria-hidden="true"></i>
        </span>
        <hr></hr>
        <p className="footpara">
          Privacy Policy &nbsp; | &nbsp; Privacy Notice &nbsp; | &nbsp;Terms of
          Use &nbsp; |&nbsp; Terms & Conditions
        </p>
        <p className="footpara">
          © 2022 MEASAT Broadcast Network Systems Sdn Bhd 199201008561
          (240064-A). All Rights Reserved.
        </p>
      </div>
    </React.Fragment>
  );
};
export default Footer;
