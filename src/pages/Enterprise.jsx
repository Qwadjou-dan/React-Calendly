import React from "react";
import dropboxLogo from "../assets/images/enterprisepage/dropbox-logo.png";
import ebayLogo from "../assets/images/enterprisepage/ebay-logo.png";
import visaLogo from "../assets/images/enterprisepage/visa-logo.png";
import lyftLogo from "../assets/images/enterprisepage/lyft-logo.png";
import lorealLogo from "../assets/images/enterprisepage/loreal-logo.png";
import shape1 from "../assets/images/enterprisepage/shape1.png";
import shape2 from "../assets/images/enterprisepage/shape2.png";
import picture1 from "../assets/images/enterprisepage/picture1.png";
import picture2 from "../assets/images/enterprisepage/picture2.png";
import picture3 from "../assets/images/enterprisepage/picture3.png";

const Enterprise = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <p className="font-extrabold text-2xl w-48 text-textBb mb-8">
          <span className="text-blue-600">Way more</span> than a scheduling link
        </p>
        <p className="text-[14px] w-[320px] mb-5">
          Standardize on the #1 scheduling platform and deliver the power of
          Calendly across your entire
          <span className="ml-[120px]">organization</span>
        </p>
        <button className="border h-8 w-24 p-2 rounded-[80px] bg-black text-white text-[8px] mb-10">
          Contact sales
        </button>
        <div className="bg-black h-36 w-[700px] flex flex-col justify-center items-center gap-5 relative mb-10">
          <p className="text-[16px] text-white w-[310px]">
            Trusted by more than 50,000 of the{" "}
            <span className="ml-5">world's leading organizations</span>
          </p>
          <div className="flex flex-row justify-center items-center gap-16">
            <img src={dropboxLogo} className="w-14 h-8" alt="Dropbox Logo" />
            <img src={ebayLogo} className="w-10 h-10" alt="eBay Logo" />
            <img src={visaLogo} className="w-10 h-5" alt="Visa Logo" />
            <img src={lyftLogo} className="w-10 h-5" alt="Lyft Logo" />
            <img src={lorealLogo} className="w-10 h-10" alt="L'Oréal Logo" />
          </div>
          <div className="absolute left-[645px]">
            <img src={shape1} className="w-20 h-36" alt="Shape 1" />
          </div>
          <div className="absolute right-[650px] top-[65px]">
            <img src={shape2} className="w-20 h-20" alt="Shape 2" />
          </div>
        </div>
        <div className="flex flex-row gap-10 mb-10">
          <div className="flex flex-col justify-center items-center gap-5 border rounded-xl shadow-2xl p-2">
            <p className="text-[10px] text-blue-600 font-extrabold ml-[-80px]">
              Sales
            </p>
            <img src={picture1} className="w-20 h-20" alt="Sales" />
            <p className="text-[8px] w-28 leading-4">
              Converts more leads and prospects into meetings and revenue.
              Easily book demos and customer calls without the back and forth.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-5 border rounded-xl shadow-2xl p-2">
            <p className="text-[10px] text-blue-600 font-extrabold ml-[-20px]">
              Customer Success
            </p>
            <img src={picture2} className="w-20 h-20" alt="Customer Success" />
            <p className="text-[8px] w-28 leading-4">
              Deliver better support interactions and customer consultations.
              Stay connected with automated reminders and follow-ups.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-5 border rounded-xl shadow-2xl p-2">
            <p className="text-[10px] text-blue-600 font-extrabold ml-[-60px]">
              Recruiting
            </p>
            <img src={picture3} className="w-20 h-20" alt="Recruiting" />
            <p className="text-[8px] w-28 leading-4">
              Fill your candidate pipeline and book more interviews and
              recruiter screens with easy, standardized scheduling.
            </p>
          </div>
        </div>
        <div>
          <button className="border h-8 w-20 p-2 rounded-[80px] bg-black text-white text-[8px] mb-10">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Enterprise;
