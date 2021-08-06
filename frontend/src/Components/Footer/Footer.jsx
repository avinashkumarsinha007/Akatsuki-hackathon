import React from "react";
import MailIcon from '@material-ui/icons/Mail';
import {
  Wrapper1,
  DivOne,
  DivThree,
  Wrapper3,
  Wrapper4,
} from "./FooterStyle.js";
import CallIcon from '@material-ui/icons/Call';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
export const Footer = () => {
  return (
    <>
      <Wrapper1>
        <DivOne>
          <p>
            <span className="logoOne">
              <MailIcon /> 
            </span>
            Subscribe Us
          </p>
          <input
            className="inputType"
            required
            placeholder="Your Email"
            type="email"
          />
          <button className="btnType">Send</button>
        </DivOne>
        <DivThree>
          <span className="logoFive">
            {" "}
            <CallIcon />
          </span>{" "}
          <p>FOR ANY HELP YOU MAY CALL US AT</p>
          <p>1800-267-4444</p>
          <p>Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM</p>
        </DivThree>
      </Wrapper1>
      <Wrapper3>
        <div>
          <p>SHOW US ON SOCIAL MEDIA</p>
          <div className="logo">
            <InstagramIcon />
            <FacebookIcon />
            <YouTubeIcon />
            <TwitterIcon />
          </div>
        </div>
      </Wrapper3>
      <Wrapper4>
        <div className="policy">
          <p>TERM & CONDITIONS</p>
          <p>CANCELLATION POLICY</p>
          <p>PRIVACY POLICY</p>
        </div>
        <div className="policy2">
          <p>© 2021 Akatsuki E-edu Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </Wrapper4>
    </>
  );
};
