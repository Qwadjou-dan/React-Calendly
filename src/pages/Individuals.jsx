import React from "react";
import pictureOne from "../assets/images/individualpage/picture1.jpeg";
import pictureTwo from "../assets/images/individualpage/picture2.webp";
import colorBg1 from "../assets/images/individualpage/color-bg1.png";
import shape1 from "../assets/images/individualpage/shape1.png";
import shape2 from "../assets/images/individualpage/shape2.png";
import zoomLogo from "../assets/images/individualpage/zoom.png";
import locationLogo from "../assets/images/individualpage/location.png";
import phonecallLogo from "../assets/images/individualpage/phonecall.png";
import googlemeetLogo from "../assets/images/individualpage/google-meet.png";
import colorBg2 from "../assets/images/individualpage/color-bg2.png";
import mainContent from "../assets/images/individualpage/picture3.jpg";
import checkLogo from "../assets/images/individualpage/check.png";
import clockLogo from "../assets/images/individualpage/clock.png";
import line2 from "../assets/images/individualpage/line2.png";
import calendlyLogo from "../assets/images/individualpage/calendly-logo.png";

const Individuals = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row gap-10">
        <div className="w-64">
          <p className="font-extrabold text-3xl">
            The genius way to work <span className="text-textBlue">better</span>
          </p>
          <p className="text-[10px] mt-10 mb-7 tracking-tighter">
            Calendly makes it easier to work smarter when you're working solo.
            Meeting, sessions, and appointments become more efficient ways to
            achieve success and accomplish goals.
          </p>
          <button className="border h-10 w-40 p-2 rounded-[50px] bg-black text-white text-[8px]">
            Sign Up for free
          </button>
        </div>
        <div className="relative mb-10">
          <img
            src={pictureOne}
            alt="Description"
            className="w-96 h-64 mb-5 ml-5"
          />
          <div className="flex flex-col gap-0.2 ml-5 p-2 w-[200px] rounded-[10px] bg-white shadow-sm absolute left-[260px] top-[55px]">
            <p className="text-[6px] font-extrabold  text-black">Event Name*</p>
            <div>
              <input
                type="text"
                name="event_name"
                placeholder="30 minute intro"
                className="border rounded-[5px] placeholder:text-[4px]"
              />
            </div>
            <p className="text-[6px] font-extrabold text-black">Event Link*</p>
            <a href="https://calendly.com" className="text-blue-600 text-[5px]">
              calendly.com/intoduction
            </a>
            <div>
              <input
                type="text"
                name="event_name"
                placeholder="30 minute introduction"
                className="border rounded-[5px] placeholder:text-[4px]"
              />
            </div>
            <p className="text-[6px] font-extrabold  text-black">Location*</p>
            <div className="border w-[180px] space-y-1 p-2 rounded-[10px]">
              <div className="flex flex-row items-center gap-1">
                <img src={zoomLogo} alt="Zoom" className="w-3 h-3" />
                <p className="text-[6px] font-extrabold  text-black">Zoom</p>
              </div>
              <div className="h-[0.2px] w-[160px] border"></div>
              <div className="flex flex-row items-center gap-1">
                <img src={locationLogo} alt="Location" className="w-3 h-3" />
                <div className="text-[5px]">
                  <p className="font-bold  text-black">In-person meeting</p>
                  <p className=" text-black">Set an address or place</p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-1">
                <img src={phonecallLogo} alt="Phone call" className="w-3 h-3" />
                <div className="text-[5px]">
                  <p className="font-bold  text-black">Phone call</p>
                  <p className=" text-black">
                    Send an email to the person hosting the event
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-1">
                <img
                  src={googlemeetLogo}
                  alt="Google meet"
                  className="w-3 h-3"
                />
                <div className="text-[5px]">
                  <p className="font-bold  text-black">Google meet</p>
                  <p className=" text-black">
                    Send a text to all invitees of the event
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-20 mb-10">
        <div className="relative">
          <img src={colorBg1} alt="Background" className="w-64 h-64 z-20" />
          <div className="absolute top-5">
            <img
              src={pictureTwo}
              alt="Person"
              className="w-52 h-52 rounded-full"
            />
            <div className="flex flex-row rounded-lg bg-white gap-1 w-[170px] shadow-xl absolute bottom-12 left-32 z-10">
              <div className="space-y-1 w-20">
                <p className="text-[8px] text-blue-600 font-extrabold m-2">
                  Select a time
                </p>
                <div>
                  <p className="text-[7px]  text-blue-600 font-bold">
                    Available time
                  </p>
                  <p className="text-[6px] text-black">8:00am - 9:00am</p>
                </div>
                <div className="border bg-gray-200 ml-2 h-10 p-1 rounded-sm">
                  <p className="text-[6px]  text-black">
                    2021 Picture Wilson Workshop
                  </p>
                  <div className="w-16 h-[2px] bg-gray-400"></div>
                </div>
              </div>

              <div className="flex flex-col justify-end gap-7">
                <div className="border bg-gray-200 p-1 rounded-sm">
                  <p className="text-[6px]  text-black">
                    Breakfast and Meeting
                  </p>
                  <div className="w-10 h-[2px] bg-gray-400"></div>
                </div>
                <div className="border bg-gray-200 p-1 rounded-sm">
                  <p className="text-[6px]  text-black">Tuesday Standup</p>
                  <div className="w-10 h-[2px] bg-gray-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[300px] space-y-3">
          <p className="text-[8px] text-gray-400">A CURATED CALENDAR</p>
          <p className="text-[16px] font-extrabold">Book up efficiently</p>
          <p className="text-[8px] leading-4">
            When invitees select a meeting slot from your schedule, they only
            see the times you're available, and only the length and type of
            meeting you want to have. Your schedule fills up efficiently and
            everyone avoids excess email exchanges.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-20 mb-20">
        <div className="w-[200px] space-y-5">
          <p className="text-[8px] text-gray-400">
            AUTOMATED NOTIFICATIONS & FOLLOW-UPS
          </p>
          <p className="text-[16px] font-extrabold leading-4">
            Work like you have a personal assistant
          </p>
          <p className="text-[8px] leading-4">
            Because Calendly automates administrative tasks like sending
            reminder emails and follow-ups you can focus on the work that builds
            your business and bring customers back for more
          </p>
        </div>

        <div className="relative">
          <img src={colorBg2} alt="Background" className="w-72 h-52" />
          <div className="absolute top-12 left-12 z-20">
            <img
              src={mainContent}
              alt="Main content"
              className="w-52 h-32 rounded-sm"
            />

            <div className="w-[130px] border-2 border-t-textBlue border-l-textBlue rounded-tl-[20px] rounded-br-[20px] bg-white gap-1 p-2 absolute bottom-24 left-36">
              <div className="space-y-0.5 w-20">
                <div className="flex flex-row items-center justify-center gap-1">
                  <img
                    src={checkLogo}
                    alt="Check"
                    className="w-3 h-3 ml-[-15px]"
                  />
                  <p className="text-[6px] text-textBlue font-extrabold">
                    Meeting
                  </p>
                </div>
                <div className="w-10 h-[2px] bg-gray-200 ml-8"></div>
                <div className="w-5 h-[2px] bg-gray-200 ml-8"></div>

                <div className="flex flex-row items-center justify-center gap-1">
                  <img src={clockLogo} alt="Clock" className="w-3 h-3" />
                  <p className="text-[6px] font-extrabold">45 mins</p>
                </div>

                <div className="flex flex-row items-center justify-center gap-1">
                  <img
                    src={phonecallLogo}
                    alt="Phone call"
                    className="w-3 h-3"
                  />
                  <p className="text-[6px] font-extrabold">ZOOM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute left-[200px] bottom-[-8px] z-10">
            <img src={line2} alt="Line decoration" className="w-32 h-20" />
          </div>

          <div className="absolute top-[140px] left-[30px] z-20">
            <img src={calendlyLogo} alt="Calendly Logo" className="w-14 h-10" />
          </div>
        </div>
      </div>

      <div className="border-none h-52 w-[700px] pl-10 pt-10 bg-[#024795] space-y-5 relative mb-5">
        <p className="w-[210px] text-white text-xl font-extrabold leading-6">
          Find just right-plans for individuals and small teams
        </p>
        <button className="border h-8 w-32 p-2 rounded-[50px] bg-white text-[6px] text-black font-bold">
          See our plans
        </button>
        <img
          src={shape1}
          alt="Shape1"
          className="w-32 h-32 absolute top-[65px] right-[-5px]"
        />
        <img
          src={shape2}
          alt="Shape2"
          className="w-32 h-32 absolute bottom-[78px] right-[105px]"
        />
      </div>
    </div>
  );
};

export default Individuals;
