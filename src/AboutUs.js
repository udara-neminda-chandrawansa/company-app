import { Carousel } from "flowbite-react";
import { useState } from "react";
import AwardCard from "./components/Award-card";
import banner from "./images/AboutUs/banner.png";
import VideoPlayer from "./components/Video";
import TextTypingAnimation from "./components/TextTypingAnimation";
import AnimatedWrapper from "./components/AnimatedWrapper.tsx";
import { BlurIn } from "./components/TextBlurIn.tsx";
import { BlurImage } from "./components/BlurImage.tsx";
import ceo from "./images/AboutUs/ceo.png";
import depositPhotos from "./images/AboutUs/partners/depositphotos.png";
import slair from "./images/AboutUs/partners/slair.png";
import slcus from "./images/AboutUs/partners/slcus.png";
import examplecus from "./images/AboutUs/partners/examplecus.png";
import creative from "./images/AboutUs/partners/creative.png";
import vw from "./images/AboutUs/partners/vw.png";
import adcreative from "./images/AboutUs/partners/adcreative.png";
import colorful from "./images/AboutUs/partners/colorful.png";
import gam1 from "./images/AboutUs/branches/gampaha/gam1.png";
import gam2 from "./images/AboutUs/branches/gampaha/gam2.png";
import gam3 from "./images/AboutUs/branches/gampaha/gam3.png";
import col1 from "./images/AboutUs/branches/colombo/col1.png";
import col2 from "./images/AboutUs/branches/colombo/col2.png";
import col3 from "./images/AboutUs/branches/colombo/col3.png";
import anu1 from "./images/AboutUs/branches/anuradhapura/anu1.jpg";
import anu2 from "./images/AboutUs/branches/anuradhapura/anu2.jpg";
import anu3 from "./images/AboutUs/branches/anuradhapura/anu3.jpg";
import kan1 from "./images/AboutUs/branches/kandy/kan1.png";
import kan2 from "./images/AboutUs/branches/kandy/kan2.jpg";
import kan3 from "./images/AboutUs/branches/kandy/kan3.jpg";
import brbg from "./images/AboutUs/branches/branches-background.png";

function AboutUs() {
  const [selectedBranch, setBranch] = useState("Gampaha");

  return (
    <>
      {/*Banner*/}
      <div
        className="bg-cover h-[100vh] flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <AnimatedWrapper>
          <div className="w-full flex text-white text-start px-12">
            <h1 className="max-md:hidden">
              <span className="urbanist max-md:text-2xl max-lg:text-3xl max-xl:text-5xl">
                “
              </span>
            </h1>
            <h1 className="max-md:text-center">
              <span className="hidden max-md:inline urbanist max-md:text-2xl max-lg:text-3xl max-xl:text-5xl">
                “
              </span>
              <span className="tiro-tamil max-md:text-2xl max-lg:text-3xl max-xl:text-5xl max-[500px]:text-lg line-height-70 max-md:line-height-40">
                At Silicon Radon Networks, we are dedicated to empowering
                businesses with cutting-edge IT solutions tailored to the
                demands of the modern digital era. Founded with a vision to
                drive innovation and excellence, we have become a trusted
                partner for companies seeking reliable and scalable technology
                solutions.
              </span>
              <span className="urbanist max-md:text-2xl max-lg:text-3xl max-xl:text-5xl">
                ”
              </span>
            </h1>
          </div>
        </AnimatedWrapper>
      </div>
      {/*Mission*/}
      <div className="h-fit py-12 gap-12 flex items-center flex-col">
        <AnimatedWrapper>
          <h1 className="poltawski-nowy w-full text-center text-4xl text-[#022E39] max-md:text-3xl">
            Our Mission
          </h1>
          <p className="text-3xl max-md:text-2xl max-sm:text-lg font-light px-24 max-md:px-12">
            Our mission is to deliver high-performing IT infrastructure, network
            security, and managed services that enhance productivity, streamline
            operations, and secure data for organizations worldwide. We take
            pride in building lasting relationships with our clients by
            consistently providing unmatched expertise, innovation, and
            exceptional customer service.
          </p>
        </AnimatedWrapper>
      </div>

      <AnimatedWrapper>
        {/*Video*/}
        <VideoPlayer></VideoPlayer>
      </AnimatedWrapper>
      <AnimatedWrapper>
        {/*CEO*/}
        <div className="bg-[#00838F26] h-fit py-12 flex text-start px-24 max-md:px-6 gap-6 max-md:flex-col">
          <h1 className="tiro-bangla text-5xl p-0 m-0 hidden text-center max-md:block">
            C.E.O
          </h1>
          <img
            src={ceo}
            className="max-h-[400px] object-contain"
            alt="ceo"
          ></img>
          <div className="flex flex-col justify-between gap-6 max-[900px]:justify-start max-md:items-center">
            <h1 className="tiro-bangla text-5xl p-0 m-0 max-md:hidden">
              C.E.O
            </h1>
            <p className="text-2xl max-lg:text-xl max-[835px]:text-base font-light text-justify p-0 m-0 max-md:text-center">
              At Silicon Radon Networks, we believe that your success is our
              success. By leveraging our expertise, experience, and
              forward-thinking approach, we ensure that every project we
              undertake enhances your business's ability to thrive in an
              ever-changing digital landscape. Partner with us and experience IT
              solutions redefined for today's challenges and tomorrow's
              possibilities.
            </p>
            <div className="flex items-center justify-end gap-2">
              <span className="border-t-[1px] border-black w-[30px]"></span>
              <p className="m-0">Mr. Niroshan Kulathunga</p>
              <span className="border-t-[1px] border-black w-[30px]"></span>
            </div>
          </div>
        </div>
      </AnimatedWrapper>
      <AnimatedWrapper>
        {/*Partnerships*/}
        <div className="w-full flex flex-col items-center py-12 gap-12">
          <h1 className="tiro-bangla text-4xl p-0 m-0">Our Partnerships</h1>
          <p className="px-12 m-0">
            Silicon Radon Networks offers premier Web Development services
            designed to elevate your online presence. Our team of expert
            developers crafts responsive, dynamic, and secure websites tailored
            to your unique business needs. From e-commerce platforms to
            corporate websites, we ensure a seamless user experience and
            cutting-edge functionality. Partner with us to create a powerful
            online identity and drive your business forward with our custom web
            solutions.
          </p>
          {/* Carousel visible only on max-md */}
          <div className="hidden max-md:flex w-3/4 h-[100px]">
            <Carousel
              leftControl={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-arrow-right-circle w-[30px] h-[30px] text-transparent"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                  />
                </svg>
              }
              rightControl={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-arrow-right-circle w-[30px] h-[30px] text-transparent"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                  />
                </svg>
              }
              indicators={false}
            >
              <div className="flex gap-12 justify-center">
                <div
                  className="w-1/12 max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
                  style={{ backgroundImage: `url(${depositPhotos})` }}
                ></div>
                <div
                  className="w-1/12 max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
                  style={{ backgroundImage: `url(${slair})` }}
                ></div>
                <div
                  className="w-1/12 max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
                  style={{ backgroundImage: `url(${slcus})` }}
                ></div>
              </div>
              <div className="flex gap-12 justify-center">
                <div
                  className="w-1/12 max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
                  style={{ backgroundImage: `url(${examplecus})` }}
                ></div>
                <div
                  className="w-1/12 max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
                  style={{ backgroundImage: `url(${creative})` }}
                ></div>
                <div
                  className="w-1/12 max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
                  style={{ backgroundImage: `url(${vw})` }}
                ></div>
              </div>
              <div className="flex gap-12 justify-center">
                <div
                  className="w-1/12 max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
                  style={{ backgroundImage: `url(${adcreative})` }}
                ></div>
                <div
                  className="w-1/12 max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
                  style={{ backgroundImage: `url(${colorful})` }}
                ></div>
              </div>
            </Carousel>
          </div>
          {/* Static grid for larger screens */}
          <div className="flex flex-col gap-6 px-20 w-full max-md:hidden">
            <div className="flex gap-10 justify-center">
              <div
                className="w-[7%] aspect-square rounded-lg bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${depositPhotos})` }}
              ></div>
              <div
                className="w-[7%] aspect-square rounded-lg bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${slair})` }}
              ></div>
              <div
                className="w-[7%] aspect-square rounded-lg bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${slcus})` }}
              ></div>
              <div
                className="w-[7%] aspect-square rounded-lg bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${examplecus})` }}
              ></div>
            </div>
            <div className="flex gap-10 justify-center">
              <div
                className="w-[7%] aspect-square rounded-lg bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${creative})` }}
              ></div>
              <div
                className="w-[7%] aspect-square rounded-lg bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${vw})` }}
              ></div>
              <div
                className="w-[7%] aspect-square rounded-lg bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${adcreative})` }}
              ></div>
              <div
                className="w-[7%] aspect-square rounded-lg bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${colorful})` }}
              ></div>
            </div>
          </div>
        </div>
      </AnimatedWrapper>
      <AnimatedWrapper>
        {/*Branches*/}
        <div
          className="py-12 gap-12 max-md:gap-1 flex flex-col items-center bg-fixed bg-cover"
          style={{ backgroundImage: `url(${brbg})` }}
        >
          <h1 className="tiro-bangla p-0 m-0 text-4xl">Our Branches</h1>
          <span className="hidden max-md:flex h-11"></span>
          <div className="w-5/6 flex gap-1 max-md:flex-col">
            <div className="w-3/5 flex flex-col gap-1 max-md:w-full">
              <BlurImage
                key={`1-${selectedBranch}`} // Unique key per image
                src={
                  selectedBranch === "Gampaha"
                    ? gam1
                    : selectedBranch === "Colombo"
                    ? col1
                    : selectedBranch === "Anuradhapura"
                    ? anu1
                    : kan1
                }
                alt="1"
                className="w-full h-[300px] max-sm:h-[150px] object-cover"
                myDuration={0.8}
              />
              <div className="flex">
                <BlurImage
                  key={`2-${selectedBranch}`} // Unique key per image
                  src={
                    selectedBranch === "Gampaha"
                      ? gam2
                      : selectedBranch === "Colombo"
                      ? col2
                      : selectedBranch === "Anuradhapura"
                      ? anu2
                      : kan2
                  }
                  alt="2"
                  className="w-1/2 pr-1 h-[250px] max-sm:h-[150px] object-cover"
                  myDuration={1.3}
                />
                <BlurImage
                  key={`3-${selectedBranch}`} // Unique key per image
                  src={
                    selectedBranch === "Gampaha"
                      ? gam3
                      : selectedBranch === "Colombo"
                      ? col3
                      : selectedBranch === "Anuradhapura"
                      ? anu3
                      : kan3
                  }
                  alt="3"
                  className="w-1/2 h-[250px] max-sm:h-[150px] object-cover"
                  myDuration={1.8}
                />
              </div>
            </div>
            <div className="w-2/5 bg-[#006E8A] text-white flex flex-col justify-center items-center gap-6 max-md:gap-0 max-md:w-full max-md:min-h-[300px] max-md:justify-between">
              <h1 className="text-center py-6 tiro-bangla w-full hidden m-0 max-md:block">
                <BlurIn key={selectedBranch}>{selectedBranch} Branch</BlurIn>
              </h1>
              <div className="w-full px-12 tiro-bangla max-md:hidden">
                <h1 className="text-start w-full">
                  <BlurIn key={selectedBranch}>{selectedBranch}</BlurIn>
                </h1>
                <h1 className="text-end w-full">
                  <BlurIn key={selectedBranch}>Branch</BlurIn>
                </h1>
              </div>
              <div className="w-full px-12">
                <ul className="flex flex-col m-0 max-md:pb-6 text-start gap-3 max-md:text-sm">
                  <li className="flex items-center gap-3">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-clock w-[16px]"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                      </svg>
                    </div>
                    {selectedBranch === "Gampaha" ? (
                      <TextTypingAnimation
                        key={selectedBranch}
                        text="Open At 9.00 am to 4.00 pm"
                      />
                    ) : selectedBranch === "Colombo" ? (
                      <TextTypingAnimation
                        key={selectedBranch}
                        text="Open At 9.30 am to 4.30 pm"
                      />
                    ) : selectedBranch === "Anuradhapura" ? (
                      <TextTypingAnimation
                        key={selectedBranch}
                        text="Open At 8.00 am to 3.00 pm"
                      />
                    ) : (
                      <TextTypingAnimation
                        key={selectedBranch}
                        text="Open At 8.30 am to 3.30 pm"
                      />
                    )}
                  </li>
                  <li className="flex items-center gap-3">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-telephone-fill w-[16px]"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                        />
                      </svg>
                    </div>
                    {selectedBranch === "Gampaha" ? (
                      <TextTypingAnimation
                        key={selectedBranch}
                        text="033 22 31 456"
                      />
                    ) : selectedBranch === "Colombo" ? (
                      <TextTypingAnimation
                        key={selectedBranch}
                        text="011 32 22 345"
                      />
                    ) : selectedBranch === "Anuradhapura" ? (
                      <TextTypingAnimation
                        key={selectedBranch}
                        text="022 44 52 432"
                      />
                    ) : (
                      <TextTypingAnimation
                        key={selectedBranch}
                        text="044 12 32 365"
                      />
                    )}
                  </li>
                  <li className="flex items-center gap-3 transition-all delay-300">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-signpost-split-fill w-[16px]"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7 16h2V6h5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.8 2.4A1 1 0 0 0 14 2H9v-.586a1 1 0 0 0-2 0V7H2a1 1 0 0 0-.8.4L.225 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4h5z" />
                      </svg>
                    </div>
                    {selectedBranch === "Gampaha" ? (
                      <TextTypingAnimation
                        key={selectedBranch}
                        text="0201 / P Kandy Road ,Yakkala, Gampaha"
                      />
                    ) : selectedBranch === "Colombo" ? (
                      <TextTypingAnimation
                        key={selectedBranch}
                        text="65 / A De Fonseka Road, Bambalapitiya"
                      />
                    ) : selectedBranch === "Anuradhapura" ? (
                      <TextTypingAnimation
                        key={selectedBranch}
                        text="45 Kala Wewa Road, Anuradhapura"
                      />
                    ) : (
                      <TextTypingAnimation
                        key={selectedBranch}
                        text="65 / B Temple Road, Kandy"
                      />
                    )}
                  </li>
                  <li className="flex items-center gap-3">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-geo-alt-fill w-[16px]"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                      </svg>
                    </div>
                    <a
                      href={
                        selectedBranch === "Gampaha"
                          ? "https://www.google.com/"
                          : selectedBranch === "Colombo"
                          ? "https://www.youtube.com/"
                          : selectedBranch === "Anuradhapura"
                          ? "https://www.duckduckgo.com/"
                          : "https://www.facebook.com/"
                      }
                      className="text-white underline underline-offset-4"
                    >
                      <TextTypingAnimation
                        key={selectedBranch}
                        text={"View Location"}
                      ></TextTypingAnimation>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-[#006E8A] h-[100px] max-md:h-fit max-md:py-3 w-5/6 flex items-center">
            <ul className="uppercase text-white flex w-full justify-between px-12 m-0 max-md:p-0 max-sm:text-xs">
              <li
                id="gam-b-clickable"
                className={`branch-clickable cursor-pointer max-md:p-1 max-[350px]:p-0 ${
                  selectedBranch === "Gampaha" ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => setBranch("Gampaha")}
              >
                Gampaha Branch
              </li>
              <li
                id="col-b-clickable"
                className={`branch-clickable cursor-pointer max-md:p-1 max-[350px]:p-0 ${
                  selectedBranch === "Colombo" ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => setBranch("Colombo")}
              >
                Colombo Branch
              </li>
              <li
                id="anu-b-clickable"
                className={`branch-clickable cursor-pointer max-md:p-1 max-[350px]:p-0 ${
                  selectedBranch === "Anuradhapura"
                    ? "opacity-100"
                    : "opacity-50"
                }`}
                onClick={() => setBranch("Anuradhapura")}
              >
                Anuradhapura Branch
              </li>
              <li
                id="kan-b-clickable"
                className={`branch-clickable cursor-pointer max-md:p-1 max-[350px]:p-0 ${
                  selectedBranch === "Kandy" ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => setBranch("Kandy")}
              >
                Kandy Branch
              </li>
            </ul>
          </div>
        </div>
      </AnimatedWrapper>
      <AnimatedWrapper>
        {/*Awards*/}
        <div className="py-12 gap-12 flex flex-col items-center">
          <h1 className="tiro-bangla p-0 m-0 text-4xl">Awards</h1>
          <p className="px-12 m-0">
            Silicon Radon Networks offers premier Web Development services
            designed to elevate your online presence. Our team of expert
            developers crafts responsive, dynamic, and secure websites tailored
            to your unique business needs. From e-commerce platforms to
            corporate websites, we ensure a seamless user experience and
            cutting-edge functionality. Partner with us to create a powerful
            online identity and drive your business forward with our custom web
            solutions.
          </p>
          {/* Carousel visible only on max-md */}
          <div className="hidden max-md:flex w-5/6">
            <Carousel
              leftControl={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-arrow-right-circle w-[30px] h-[30px] text-transparent"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                  />
                </svg>
              }
              rightControl={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-arrow-right-circle w-[30px] h-[30px] text-transparent"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                  />
                </svg>
              }
              indicators={false}
            >
              <AwardCard
                whichImg="award1"
                cardText="The Best Software Company In SRI LANKA -2024"
              ></AwardCard>
              <AwardCard
                whichImg="award2"
                cardText="The Best Software Company In SRI LANKA -2024"
              ></AwardCard>
              <AwardCard
                whichImg="award3"
                cardText="The Best Software Company In SRI LANKA -2024"
              ></AwardCard>
            </Carousel>
          </div>
          {/* Static grid for larger screens */}
          <div className="w-full max-md:hidden flex justify-evenly gap-1">
            <AwardCard
              whichImg="award1"
              cardText="The Best Software Company In SRI LANKA -2024"
            ></AwardCard>
            <AwardCard
              whichImg="award2"
              cardText="The Best Software Company In SRI LANKA -2024"
            ></AwardCard>
            <AwardCard
              whichImg="award3"
              cardText="The Best Software Company In SRI LANKA -2024"
            ></AwardCard>
          </div>
        </div>
      </AnimatedWrapper>
    </>
  );
}

export default AboutUs;
