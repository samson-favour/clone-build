import React from "react";
import ThemeToggler from "./ThemeToggler";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-y-10 px-5 md:px-32 py-14 bg-gray-100 text-gray-500">
      <div className="space-y-4 text-xs text-[#144273]">
        <h5 className="font-bold text-[#566985]">ABOUT</h5>
        <p>How Airbnb works</p>
        <p> New rooms</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-[#144273]">
        <h5 className="font-bold text-[#566985]">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not real state</p>
        <p>Its a pretty awesome clone</p>
        <p>Referrals accepted</p>
        <p> Papafam</p>
      </div>
      <div className="space-y-4 text-xs text-[#144273]">
        <h5 className="font-bold text-[#566985]">HOST</h5>
        <p>Papa React</p>
        <p>Presents</p>
        <p>Zero to full stack hero</p>
        <p>Hundreds of Students</p>
        <p>Join Now</p>
      </div>
      <div className="space-y-4 text-xs text-[#144273]">
        <h5 className="font-bold text-[#566985]">SUPPORT</h5>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Say Hi YouTube</p>
        <p>Easter Eggs</p>
        <p>For the Win</p>
      </div>{" "}
      <div className="hidden">
        <ThemeToggler />
      </div>
    </div>
  );
};

export default Footer;
