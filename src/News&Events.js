import banner from "./images/NewsEvents/banner.png";
import djnight from "./images/NewsEvents/events/djnight.png";
import awardcerem from "./images/NewsEvents/events/awardcerem.png";
import hardprac from "./images/NewsEvents/events/hardprac.png";
import indconf from "./images/NewsEvents/events/indconf.png";
import leadercamp from "./images/NewsEvents/events/leadercamp.png";
import nethackathon from "./images/NewsEvents/events/nethackathon.png";
import news1 from "./images/NewsEvents/news/news1.png";
import news2 from "./images/NewsEvents/news/news2.png";
import news3 from "./images/NewsEvents/news/news3.png";
import news4 from "./images/NewsEvents/news/news4.png";
import NewsCard2 from "./components/News-card2";

import { useState } from "react";
import { Modal } from "flowbite-react";

function NewsEvents() {
  const [isEventsDisabled, setIsDisabled] = useState(false);
  const [selectedEventArrayNo, setSelectedEventArrayNo] = useState(0);
  const [selectedNewsArrayNo, setSelectedNewsArrayNo] = useState(0);

  const events = [
    [
      djnight,
      "31 Night DJ Party",
      "2024.12.31",
      "Dear Team, Get ready to end the year with a bang! We are thrilled to invite you to Silicon Radon Networks’ 31st Night DJ Party to ring in the New Year together in style! Join us on December 31st at [Venue Location/Address] from 8:00 PM onwards, dressed in your Party Glam attire. Enjoy electrifying DJ performances, dancing, games, fun contests, delicious food and beverages, and a special midnight countdown celebration. Come for an unforgettable night filled with music, dance, and memories to cherish as we say goodbye to this year and welcome the next as one big team! Please RSVP by [RSVP Date] to [Contact Person/Email] to confirm your attendance. Bring your dancing shoes and party spirit! Warm regards, [Your Name/HR Team], Silicon Radon Networks",
    ],
    [
      indconf,
      "Industrial Conference",
      "2024.12.22",
      "Dear Professionals, Join us at the Silicon Radon Networks Industrial Conference on December 22nd to explore the latest trends and advancements in technology and innovation. This event will take place at [Venue Location/Address] starting from 9:00 AM. Network with industry experts, engage in insightful keynote sessions, and participate in interactive panel discussions that shape the future of our industry. Breakfast and lunch will be provided. Don't miss this opportunity to connect, learn, and grow with the best in the business. Please RSVP by [RSVP Date] to [Contact Person/Email] to confirm your attendance.",
    ],
    [
      nethackathon,
      "Networking Hackathon Competition",
      "2024.12.18",
      "Dear Innovators, Silicon Radon Networks invites you to our Networking Hackathon Competition on December 18th at [Venue Location/Address] from 10:00 AM to 8:00 PM. Test your networking skills, solve challenging real-world problems, and compete for exciting prizes! Teams of up to four are welcome, and all necessary tools and support will be provided. Let’s create innovative solutions together while fostering teamwork and creativity. Please register your team by [Registration Deadline] by contacting [Contact Person/Email]. Let the hacking begin!",
    ],
    [
      hardprac,
      "Computer Hardware Practical Event",
      "2024.12.23",
      "Dear Enthusiasts, Don’t miss the Computer Hardware Practical Event hosted by Silicon Radon Networks on December 23rd at [Venue Location/Address] from 9:30 AM to 3:30 PM. Dive into the world of hardware, where you’ll get hands-on experience assembling, troubleshooting, and optimizing computer systems under expert guidance. This event is perfect for beginners and tech enthusiasts alike. Lunch and refreshments will be provided. Reserve your spot by [RSVP Date] with [Contact Person/Email]. See you there for an engaging and educational experience!",
    ],
    [
      awardcerem,
      "Silicon Radon Award Ceremony",
      "2024.12.20",
      "Dear Team, We are excited to announce the Silicon Radon Award Ceremony, celebrating the achievements and milestones of our incredible team! Join us on December 20th at [Venue Location/Address] from 6:00 PM onwards. This formal event will feature a welcome dinner, award presentations, and special performances. Dress in your best formal attire and get ready to cheer for our shining stars. Let’s come together to honor excellence and toast to success! Kindly RSVP by [RSVP Date] to [Contact Person/Email]. We look forward to seeing you there!",
    ],
    [
      leadercamp,
      "Leadership Camp",
      "2024.12.23",
      "Dear Leaders, Unleash your leadership potential at Silicon Radon Networks’ Leadership Camp on December 23rd. The camp will be held at [Venue Location/Address], beginning at 8:00 AM and concluding at 5:00 PM. Participate in dynamic workshops, team-building exercises, and motivational sessions designed to inspire and empower you. Breakfast and lunch will be provided. Don’t miss this chance to develop your skills and connect with fellow leaders. Please confirm your attendance by [RSVP Date] with [Contact Person/Email]. Together, let’s lead the way!",
    ],
  ];

  const news = [
    [
      news1,
      "Intern Applications",
      "Dear Team, Get ready to end the year with a bang! We are thrilled to invite you to Silicon Radon Networks’ 31st Night DJ Party to ring in the New Year together in style! Join us on December 31st at [Venue Location/Address] from 8:00 PM onwards, dressed in your Party Glam attire. Enjoy electrifying DJ performances.",
    ],
    [
      news2,
      "Intern Applications",
      "Dear Team, Get ready to end the year with a bang! We are thrilled to invite you to Silicon Radon Networks’ 31st Night DJ Party to ring in the New Year together in style! Join us on December 31st at [Venue Location/Address] from 8:00 PM onwards, dressed in your Party Glam attire. Enjoy electrifying DJ performances.",
    ],
    [
      news3,
      "Intern Applications",
      "Dear Team, Get ready to end the year with a bang! We are thrilled to invite you to Silicon Radon Networks’ 31st Night DJ Party to ring in the New Year together in style! Join us on December 31st at [Venue Location/Address] from 8:00 PM onwards, dressed in your Party Glam attire. Enjoy electrifying DJ performances.",
    ],
    [
      news4,
      "Intern Applications",
      "Dear Team, Get ready to end the year with a bang! We are thrilled to invite you to Silicon Radon Networks’ 31st Night DJ Party to ring in the New Year together in style! Join us on December 31st at [Venue Location/Address] from 8:00 PM onwards, dressed in your Party Glam attire. Enjoy electrifying DJ performances.",
    ],
  ];

  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  return (
    <div className="flex flex-col h-dvh tiro-bangla">
      {/*banner*/}
      <div
        className="min-h-[30dvh] bg-no-repeat bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1 className="uppercase text-5xl max-md:text-4xl max-sm:text-2xl max-md:px-0  md:text-start text-white w-full px-12 m-0">
          News & Events
        </h1>
      </div>
      {/*select either event/news*/}
      <div className="p-6">
        <ul className="flex gap-12 m-0 text-[#006E8A] select-none max-md:justify-center">
          <li
            className={`${
              isEventsDisabled
                ? "text-[#006E8A4A] cursor-pointer"
                : "cursor-pointer"
            }`}
            onClick={() => setIsDisabled(!isEventsDisabled)}
          >
            Events
          </li>
          <li
            className={`${
              isEventsDisabled
                ? "cursor-pointer"
                : "cursor-pointer text-[#006E8A4A]"
            }`}
            onClick={() => setIsDisabled(!isEventsDisabled)}
          >
            News
          </li>
        </ul>
      </div>
      {/*events secton - md*/}
      <div
        className={`flex-grow text-white max-md:hidden gap-1 ${
          isEventsDisabled ? "hidden" : "flex"
        }`}
      >
        <div className="w-2/6 flex flex-col flex-grow gap-1 text-start">
          <div
            className="h-1/3 bg-no-repeat bg-cover bg-center flex items-end gap-3 pl-3 cursor-pointer hover:scale-95 transition-all"
            style={{ backgroundImage: `url(${djnight})` }}
            onClick={() => {
              setSelectedEventArrayNo(0);
              setOpenModal1(true);
            }}
          >
            <p className="text-xl m-0 min-h-10 content-center w-fit max-md:text-base">
              31 Night DJ Party
            </p>
            <p className="text-sm m-0 min-h-10 content-center w-fit max-md:text-xs">
              2024.12.31
            </p>
          </div>
          <div
            className="h-2/3 bg-no-repeat bg-cover bg-center flex items-end gap-3 pl-3 cursor-pointer hover:scale-95 transition-all"
            style={{ backgroundImage: `url(${indconf})` }}
            onClick={() => {
              setSelectedEventArrayNo(1);
              setOpenModal1(true);
            }}
          >
            <p className="text-xl m-0 min-h-10 content-center w-fit max-md:text-base">
              Industrial Conference
            </p>
            <p className="text-sm m-0 min-h-10 content-center w-fit max-md:text-xs">
              2024.12.31
            </p>
          </div>
        </div>
        <div className="w-1/6 flex flex-col flex-grow gap-1 text-start">
          <div
            className="h-1/2 bg-no-repeat bg-cover bg-center flex flex-col justify-end gap-3 pl-3 cursor-pointer hover:scale-95 transition-all"
            style={{ backgroundImage: `url(${nethackathon})` }}
            onClick={() => {
              setSelectedEventArrayNo(2);
              setOpenModal1(true);
            }}
          >
            <p className="text-xl m-0 min-h-10 content-center w-fit max-md:text-base">
              Networking Hackathon Competition
            </p>
            <p className="text-sm m-0 min-h-10 content-center w-fit max-md:text-xs">
              2024.12.31
            </p>
          </div>
          <div
            className="h-1/2 bg-no-repeat bg-cover bg-center flex flex-col justify-end gap-3 pl-3 cursor-pointer hover:scale-95 transition-all"
            style={{ backgroundImage: `url(${hardprac})` }}
            onClick={() => {
              setSelectedEventArrayNo(3);
              setOpenModal1(true);
            }}
          >
            <p className="text-xl m-0 min-h-10 content-center w-fit max-md:text-base">
              Computer Hardware Practical Event
            </p>
            <p className="text-sm m-0 min-h-10 content-center w-fit max-md:text-xs">
              2024.12.31
            </p>
          </div>
        </div>
        <div className="w-2/6 flex flex-col flex-grow gap-1 text-start">
          <div
            className="h-3/5 bg-no-repeat bg-cover bg-center flex items-end gap-3 pl-3 max-lg:flex-col max-lg:items-start max-lg:justify-end cursor-pointer hover:scale-95 transition-all"
            style={{ backgroundImage: `url(${awardcerem})` }}
            onClick={() => {
              setSelectedEventArrayNo(4);
              setOpenModal1(true);
            }}
          >
            <p className="text-xl m-0 min-h-10 content-center w-fit max-md:text-base">
              Silicon Radon Award Ceremony
            </p>
            <p className="text-sm m-0 min-h-10 content-center w-fit max-md:text-xs">
              2024.12.31
            </p>
          </div>
          <div
            className="h-2/5 bg-no-repeat bg-cover bg-center flex items-end gap-3 pl-3 max-lg:flex-col max-lg:items-start max-lg:justify-end cursor-pointer hover:scale-95 transition-all"
            style={{ backgroundImage: `url(${leadercamp})` }}
            onClick={() => {
              setSelectedEventArrayNo(5);
              setOpenModal1(true);
            }}
          >
            <p className="text-xl m-0 min-h-10 content-center w-fit max-md:text-base">
              Leadership Camp
            </p>
            <p className="text-sm m-0 min-h-10 content-center w-fit max-md:text-xs">
              2024.12.31
            </p>
          </div>
        </div>
      </div>
      {/*events secton - max-md*/}
      <div
        className={`hidden flex-grow gap-1 text-white text-start ${
          isEventsDisabled ? "hidden" : "max-md:flex"
        }`}
      >
        <div className="w-2/3 h-full flex flex-col gap-1">
          <div
            className="h-1/4 bg-no-repeat bg-cover bg-center flex items-end gap-3 pl-3 cursor-pointer hover:scale-95 transition-all"
            style={{ backgroundImage: `url(${djnight})` }}
            onClick={() => {
              setSelectedEventArrayNo(0);
              setOpenModal1(true);
            }}
          >
            <p className="text-xl m-0 min-h-10 content-center w-fit max-md:text-base">
              31 Night DJ Party
            </p>
            <p className="text-sm m-0 min-h-10 content-center w-fit max-md:text-xs">
              2024.12.31
            </p>
          </div>
          <div
            className="h-1/4 bg-no-repeat bg-cover bg-center flex items-end gap-3 pl-3 cursor-pointer hover:scale-95 transition-all"
            style={{ backgroundImage: `url(${indconf})` }}
            onClick={() => {
              setSelectedEventArrayNo(1);
              setOpenModal1(true);
            }}
          >
            <p className="text-xl m-0 min-h-10 content-center w-fit max-md:text-base">
              Industrial Conference
            </p>
            <p className="text-sm m-0 min-h-10 content-center w-fit max-md:text-xs">
              2024.12.31
            </p>
          </div>
          <div
            className="h-2/4 bg-no-repeat bg-cover bg-center flex flex-col justify-end gap-3 pl-3 cursor-pointer hover:scale-95 transition-all"
            style={{ backgroundImage: `url(${nethackathon})` }}
            onClick={() => {
              setSelectedEventArrayNo(2);
              setOpenModal1(true);
            }}
          >
            <p className="text-xl m-0 min-h-10 content-center w-fit max-md:text-base">
              Networking Hackathon Competition
            </p>
            <p className="text-sm m-0 min-h-10 content-center w-fit max-md:text-xs">
              2024.12.31
            </p>
          </div>
        </div>
        <div className="w-1/3 h-full flex flex-col gap-1">
          <div
            className="h-1/3 bg-no-repeat bg-cover bg-center flex flex-col justify-end gap-3 pl-3 cursor-pointer hover:scale-95 transition-all"
            style={{ backgroundImage: `url(${hardprac})` }}
            onClick={() => {
              setSelectedEventArrayNo(3);
              setOpenModal1(true);
            }}
          >
            <p className="text-xl m-0 min-h-10 content-center w-fit max-md:text-base">
              Computer Hardware Practical Event
            </p>
            <p className="text-sm m-0 min-h-10 content-center w-fit max-md:text-xs">
              2024.12.31
            </p>
          </div>
          <div
            className="h-1/3 bg-no-repeat bg-cover bg-center flex items-end gap-3 pl-3 max-lg:flex-col max-lg:items-start max-lg:justify-end cursor-pointer hover:scale-95 transition-all"
            style={{ backgroundImage: `url(${awardcerem})` }}
            onClick={() => {
              setSelectedEventArrayNo(4);
              setOpenModal1(true);
            }}
          >
            <p className="text-xl m-0 min-h-10 content-center w-fit max-md:text-base">
              Silicon Radon Award Ceremony
            </p>
            <p className="text-sm m-0 min-h-10 content-center w-fit max-md:text-xs">
              2024.12.31
            </p>
          </div>
          <div
            className="h-1/3 bg-no-repeat bg-cover bg-center flex items-end gap-3 pl-3 max-lg:flex-col max-lg:items-start max-lg:justify-end cursor-pointer hover:scale-95 transition-all"
            style={{ backgroundImage: `url(${leadercamp})` }}
            onClick={() => {
              setSelectedEventArrayNo(5);
              setOpenModal1(true);
            }}
          >
            <p className="text-xl m-0 min-h-10 content-center w-fit max-md:text-base">
              Leadership Camp
            </p>
            <p className="text-sm m-0 min-h-10 content-center w-fit max-md:text-xs">
              2024.12.31
            </p>
          </div>
        </div>
      </div>
      {/*news secton*/}
      <div
        className={`flex-grow max-md:h-fit max-md:overflow-scroll justify-center ${
          isEventsDisabled ? "flex" : "hidden"
        }`}
      >
        <div className="w-5/6 h-fit flex justify-center gap-3 max-md:flex-col">
          <NewsCard2
            whichImg={news1}
            cardText={"Intern Applications 2025"}
            onClick={() => {
              setSelectedNewsArrayNo(0);
              setOpenModal2(true);
            }}
          ></NewsCard2>
          <NewsCard2
            whichImg={news2}
            cardText={"Intern Applications 2025"}
            onClick={() => {
              setSelectedNewsArrayNo(1);
              setOpenModal2(true);
            }}
          ></NewsCard2>
          <NewsCard2
            whichImg={news3}
            cardText={"Intern Applications 2025"}
            onClick={() => {
              setSelectedNewsArrayNo(2);
              setOpenModal2(true);
            }}
          ></NewsCard2>
          <NewsCard2
            whichImg={news4}
            cardText={"Intern Applications 2025"}
            onClick={() => {
              setSelectedNewsArrayNo(3);
              setOpenModal2(true);
            }}
          ></NewsCard2>
        </div>
      </div>
      {/*events modal*/}
      <Modal show={openModal1} onClose={() => setOpenModal1(false)}>
        <Modal.Header className="h-fit p-1"></Modal.Header>
        <Modal.Body className="p-0">
          <div className="">
            <div
              className="h-[300px] bg-no-repeat bg-cover bg-center flex items-end gap-3 pl-3 text-white tiro-bangla"
              style={{
                backgroundImage: `url(${events[selectedEventArrayNo][0]})`,
              }}
            >
              <p className="text-xl m-0 min-h-10 content-center w-fit max-md:text-base">
                {events[selectedEventArrayNo][1]}
              </p>
              <p className="text-sm m-0 min-h-10 content-center w-fit max-md:text-xs">
                {events[selectedEventArrayNo][2]}
              </p>
            </div>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 p-6 m-0">
              {events[selectedEventArrayNo][3]}
            </p>
          </div>
        </Modal.Body>
      </Modal>
      {/*news modal*/}
      <Modal show={openModal2} onClose={() => setOpenModal2(false)}>
        <Modal.Header className="h-fit p-1"></Modal.Header>
        <Modal.Body className="p-0">
          <div className="">
            <div
              className="h-[300px] bg-no-repeat bg-cover bg-center flex items-end gap-3 pl-3 text-white tiro-bangla"
              style={{
                backgroundImage: `url(${news[selectedNewsArrayNo][0]})`,
              }}
            ></div>
            <div className="p-3 flex flex-col gap-3">
              <p className="text-xl tiro-bangla m-0 min-h-10 content-center w-fit max-md:text-base">
                {news[selectedNewsArrayNo][1]}
              </p>
              <p className="text-sm m-0 min-h-10 content-center w-fit max-md:text-xs">
                {news[selectedNewsArrayNo][2]}
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default NewsEvents;
