import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-row justify-center items-center gap-14 mb-20">
        <div className="space-y-5">
          <p className="text-[12px] w-10 font-extrabold leading-[14px]">
            Easy <span className="text-blue-600">ahead</span>
          </p>
          <p className="text-[6px] w-[150px]">
            We take the work out of connecting with others so you can accomplish
            more.
          </p>
          <select
            id="language"
            name="language"
            className="border w-40 text-[8px]"
          >
            <option value="english">English</option>
          </select>
        </div>
        <div className="space-y-1.5">
          <p className="text-[10px] font-extrabold">About</p>
          <p className="text-[8px]">About Calendly</p>
          <p className="text-[8px]">Contact Sales</p>
          <p className="text-[8px]">Newsroom</p>
          <p className="text-[8px]">Careers</p>
          <p className="text-[8px]">Security</p>
        </div>

        <div className="space-y-1.5">
          <p className="text-[10px] font-extrabold">Solutions</p>
          <p className="text-[8px]">Customer Success</p>
          <p className="text-[8px]">Sales</p>
          <p className="text-[8px]">Recruiting</p>
          <p className="text-[8px]">Education</p>
          <p className="text-[8px]">Marketing</p>
        </div>

        <div className="space-y-1.5">
          <p className="text-[10px] font-extrabold">Popular Features</p>
          <p className="text-[8px]">Embed Calendly</p>
          <p className="text-[8px]">Availability</p>
          <p className="text-[8px]">Sending Notifications</p>
          <p className="text-[8px]">Using Calendly Mobile</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
