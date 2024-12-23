import React from "react";
import laptopImage from "../assets/images/homepage/calendly_laptop.webp";
import compassLogo from "../assets/images/homepage/compass-customer-logo.svg";
import dropboxLogo from "../assets/images/homepage/dropbox.svg";
import ebayLogo from "../assets/images/homepage/ebay-logo.webp";
import lazboyLogo from "../assets/images/homepage/lazboy.png";
import twilioLogo from "../assets/images/homepage/twilio.png";

const Index = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        {/* Hero Section */}
        <div className="flex flex-row items-center gap-14">
          <div className="w-64">
            <p className="font-extrabold text-4xl">
              Easy scheduling <span className="text-textBlue">ahead</span>
            </p>
            <p className="text-[10px] mt-10 mb-7 tracking-tighter">
              Calendly is your hub for scheduling meetings professionally and
              efficiently, eliminating the hassle of back-and-forth emails so
              you can get back to work
            </p>
            <div className="flex flex-row">
              <input
                className="text-textGray border w-44 h-10 rounded-[50px] placeholder:text-[10px] placeholder:tracking-tighter placeholder:p-2"
                placeholder="Enter your email"
              />
              <button className="border h-10 w-20 p-2 rounded-[50px] bg-black text-white text-[8px] ml-[-50px]">
                Sign Up
              </button>
            </div>
            <p className="text-[8px] ml-2 mt-1">
              Create your free account. No credit card required
            </p>
          </div>

          <div>
            <img
              src={laptopImage}
              alt="Laptop"
              className="w-[310px] h-[350px]"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="w-[700px] h-[200px] mt-10 bg-[#F8FCFD] mb-10">
          <p className="ml-[170px] w-[330px] text-textCaption font-semibold mt-10 mb-5">
            Simplified scheduling for more than{" "}
            <span className="text-textBlue ml-8">10,000,000</span> users
            worldwide
          </p>
          <div className="flex flex-row justify-center items-center gap-14">
            <img src={compassLogo} alt="Compass Logo" className="w-10 h-10" />
            <img src={dropboxLogo} alt="Dropbox Logo" className="w-10 h-10" />
            <img src={ebayLogo} alt="Ebay Logo" className="w-10 h-10" />
            <img src={lazboyLogo} alt="La-Z-Boy Logo" className="w-10 h-10" />
            <img src={twilioLogo} alt="Twilio Logo" className="w-10 h-10" />
          </div>
        </div>

        {/* Steps Section */}
        <div className="flex flex-row ml-10 justify-center gap-10 mb-20">
          {[
            {
              step: "1",
              title: "Create simple rules",
              description:
                "Let Calendly know your availability preferences and it will do the work for you",
            },
            {
              step: "2",
              title: "Share your link",
              description:
                "Send guests your Calendly link or embed it on your website",
            },
            {
              step: "3",
              title: "Get booked",
              description:
                "They pick a time and the event is added to your calendar",
            },
          ].map(({ step, title, description }) => (
            <div key={step} className="flex flex-row gap-2">
              <div className="flex flex-col justify-center items-center">
                <div className="text-white text-[10px] border w-5 h-5 rounded-full bg-textBlue flex items-center justify-center">
                  {step}
                </div>
                <div className="h-32 w-[0.5px] bg-textGray opacity-20"></div>
              </div>
              <div>
                <p className="w-[70px] text-[10px] font-black mb-10 leading-5">
                  {title}
                </p>
                <p className="w-[110px] text-[8px] leading-4 tracking-tight">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
