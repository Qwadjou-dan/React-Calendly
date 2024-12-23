import React from "react";
import picture1 from "../assets/images/teamspage/picture1.jpg";
import colorBg1 from "../assets/images/teamspage/color-bg1.png";
import picture2 from "../assets/images/teamspage/picture2.jpg";
import clockLogo from "../assets/images/teamspage/clock-2.png";
import picture3 from "../assets/images/teamspage/picture3.jpeg";
import picture4 from "../assets/images/teamspage/picture4.jpg";
import picture5 from "../assets/images/teamspage/picture5.jpg";
import picture6 from "../assets/images/teamspage/picture6.webp";

const Teams = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center items-center gap-14 mb-14">
          <div className="space-y-7">
            <p className="font-extrabold text-2xl w-48 text-textBb">
              <span className="text-blue-600">Power up</span> your teams
            </p>
            <p className="text-[10px] w-64 mt-10 mb-7 tracking-tighter">
              s Calendly gives you control over team scheduling with a
              standardized, scalable process. Its secure, easy to manage,
              integrates with your team's favorite tools, so you can everyone as
              efficiently and effectively as possible
            </p>
            <div className="flex flex-row gap-5">
              <button className="border h-8 w-20 p-2 rounded-[50px] bg-blue-600 text-white text-[8px]">
                Start for free
              </button>
              <button className="border border-black h-8 w-20 p-2 rounded-[50px] bg-white text-[8px] text-black">
                Contact sales
              </button>
            </div>
          </div>

          <div className="relative">
            <img src={picture1} alt="Team" className="w-[300px] h-[240px]" />

            <div className="bg-white text-[6px] rounded-lg shadow-lg space-y-4 p-2 absolute bottom-[5px] left-[210px]">
              <div className="flex flex-row gap-5 font-extrabold text-black">
                <p>Group</p>
                <p>People</p>
                <p>Group admin(s)</p>
              </div>
              <div className="w-[140px] h-[0.5px] bg-gray-200"></div>
              <div className="flex flex-row gap-[26px] text-black">
                <p>Product</p>
                <p>12</p>
                <p className="w-14">Bradly Erdman Brenda Lara Danilo Jenkins</p>
              </div>
              <div className="w-[140px] h-[0.5px] bg-gray-200"></div>
              <div className="flex flex-row gap-[31px] text-black">
                <p>Sales</p>
                <p className="ml-[4px]">8</p>
                <p className="ml-[-4px]">Angela Ankuning</p>
              </div>
            </div>

            <div className="bg-white text-[8px] space-y-0.5 p-2 rounded-lg shadow-lg absolute left-[260px] bottom-[140px]">
              <p className="text-black">Event Link*</p>
              <a href="calendly.com" className="text-[6px] text-blue-600">
                calendly.com/teams-connect
              </a>
              <div className="border rounded-sm w-32 text-[6px]">
                <button className="text-black">30mins team connect</button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-textBb text-3xl font-bold w-[500px]">
          <p>
            Streamline tasks, extend team{" "}
            <span className="ml-[180px]">reach</span>
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-28 mb-10">
          <div className="relative">
            <img src={colorBg1} className="w-72 h-64 z-10" alt="Background" />
            <div className="absolute top-12 left-4">
              <img
                src={picture2}
                className="w-64 h-40 rounded-lg"
                alt="Team Meeting"
              />
              <div className="flex flex-row justify-center items-center bg-white border rounded-r-lg rounded-tl-lg border-blue-600 w-[110px] p-2 gap-1 absolute bottom-32 left-[200px]">
                <img src={clockLogo} className="w-6 h-6" alt="Clock Icon" />
                <div className="space-y-[-5px]">
                  <p className="text-blue-600 text-[12px]">
                    <span className="font-extrabold ">15</span> min
                  </p>
                  <p className="text-[8px] font-bold text-black">Meeting</p>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center bg-white border rounded-r-lg rounded-bl-lg border-blue-600 w-[110px] p-2 gap-1 absolute top-32 left-[200px]">
                <img src={clockLogo} className="w-6 h-6" alt="Clock Icon" />
                <div className="space-y-[-5px]">
                  <p className="text-blue-600 text-[12px]">
                    <span className="font-extrabold">15</span> min
                  </p>
                  <p className="text-[8px] font-bold text-black">Meeting</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[300px] space-y-3">
            <p className="text-[8px] text-blue-600">AUTOMATED ASSIGNMENT</p>
            <p className="text-[16px] font-extrabold text-textBb">
              Control how your team gets booked
            </p>
            <p className="text-[8px] leading-4">
              With Calendly, you can offer sessions that are a few minutes or a
              few hours, for one invitee or a group. Automated round-robin,
              first available, or geography-based assignments let you easily
              divvy up meetings in any way that works for your team members.
            </p>
          </div>
        </div>
        <p className="text-blue-600 text-[10px]">SOLUTIONS</p>
        <p className="text-[20px] font-extrabold text-textBb tracking-wider mb-10">
          The right Calendly for the work you do
        </p>
        <div className="flex flex-row gap-5 mb-16">
          <div className="flex flex-col rounded-lg shadow-lg">
            <img src={picture3} className="w-44 h-32 rounded-t-lg shadow-sm" />
            <div className="p-2">
              <p className="text-[10px] text-textBb font-extrabold">Sales</p>
              <p className="text-[8px]">Get to your best leads faster</p>
              <p className="text-blue-600 text-[8px] mt-8">Learn more &gt;</p>
            </div>
          </div>
          <div className="flex flex-col rounded-lg shadow-lg">
            <img src={picture4} className="w-44 h-32 rounded-t-lg shadow-sm" />
            <div className="p-2">
              <p className="text-[10px] text-textBb font-extrabold">
                Recruiting
              </p>
              <p className="text-[8px]">Less emailing, more closing</p>
              <p className="text-blue-600 text-[8px] mt-8">Learn more &gt;</p>
            </div>
          </div>
          <div className="flex flex-col rounded-lg shadow-lg">
            <img src={picture5} className="w-44 h-32 rounded-t-lg shadow-sm" />
            <div className="p-2">
              <p className="text-[10px] text-textBb font-extrabold">
                Customer success
              </p>
              <p className="text-[8px] w-[130px]">
                Connects with customers when it matters
              </p>
              <p className="text-blue-600 text-[8px] mt-5">Learn more &gt;</p>
            </div>
          </div>
          <div className="flex flex-col rounded-lg shadow-lg">
            <img src={picture6} className="w-44 h-32 rounded-t-lg shadow-sm" />
            <div className="p-2">
              <p className="text-[10px] text-textBb font-extrabold">
                Education
              </p>
              <p className="text-[8px]">Boost student success</p>
              <p className="text-blue-600 text-[8px] mt-8">Learn more &gt;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
