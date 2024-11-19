import { Carousel } from "flowbite-react";
import AwardCard from "./components/Award-card";
import banner from "./images/AboutUs/banner.png";
import VideoPlayer from "./components/Video";
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
import brbg from "./images/AboutUs/branches/branches-background.png";

function AboutUs() {
  return (
    <>
      {/*Banner*/}
      <div
        className="bg-cover h-[100vh] flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="w-full flex text-white text-start px-12">
          <h1>
            <span className="urbanist max-sm:text-xl max-md:text-2xl max-lg:text-3xl max-xl:text-5xl">
              “
            </span>
          </h1>
          <h1 className="max-md:text-center">
            <span className="tiro-tamil max-sm:text-xl max-md:text-2xl max-lg:text-3xl max-xl:text-5xl">
              At Silicon Radon Networks, we are dedicated to empowering
              businesses with cutting-edge IT solutions tailored to the demands
              of the modern digital era. Founded with a vision to drive
              innovation and excellence, we have become a trusted partner for
              companies seeking reliable and scalable technology solutions.
            </span>
            <span className="urbanist max-sm:text-xl max-md:text-2xl max-lg:text-3xl max-xl:text-5xl">
              ”
            </span>
          </h1>
        </div>
      </div>
      {/*Mission*/}
      <div className="h-fit py-12 gap-12 flex items-center flex-col">
        <h1 className="poltawski-nowy text-4xl text-[#022E39] max-md:text-3xl">
          Our Mission
        </h1>
        <p className="text-3xl max-md:text-2xl max-sm:text-xl font-light px-24 max-md:px-12">
          Our mission is to deliver high-performing IT infrastructure, network
          security, and managed services that enhance productivity, streamline
          operations, and secure data for organizations worldwide. We take pride
          in building lasting relationships with our clients by consistently
          providing unmatched expertise, innovation, and exceptional customer
          service.
        </p>
      </div>
      {/*Video*/}
      <VideoPlayer></VideoPlayer>
      {/*CEO*/}
      <div className="bg-[#00838F26] h-fit py-12 flex text-start px-24 max-md:px-6 gap-6 max-md:flex-col">
        <h1 className="tiro-bangla text-5xl p-0 m-0 hidden text-center max-md:block">
          C.E.O
        </h1>
        <img
          src={ceo}
          className="max-md:max-h-[400px] object-contain"
          alt="ceo"
        ></img>
        <div className="flex flex-col gap-6 max-md:items-center">
          <h1 className="tiro-bangla text-5xl p-0 m-0 max-md:hidden">C.E.O</h1>
          <p className="text-xl font-light text-justify p-0 m-0 max-md:text-center">
            At Silicon Radon Networks, we believe that your success is our
            success. By leveraging our expertise, experience, and
            forward-thinking approach, we ensure that every project we undertake
            enhances your business's ability to thrive in an ever-changing
            digital landscape. Partner with us and experience IT solutions
            redefined for today's challenges and tomorrow's possibilities.
          </p>
          <div className="flex items-center justify-end gap-2">
            <span className="border-t-[1px] border-black w-[30px]"></span>
            <p className="m-0">Mr. Niroshan Kulathunga</p>
            <span className="border-t-[1px] border-black w-[30px]"></span>
          </div>
        </div>
      </div>
      {/*Partnerships*/}
      <div className="w-full flex flex-col items-center py-12 gap-12">
        <h1 className="tiro-bangla text-4xl p-0 m-0">Our Partnerships</h1>
        <p className="px-12 m-0">
          Silicon Radon Networks offers premier Web Development services
          designed to elevate your online presence. Our team of expert
          developers crafts responsive, dynamic, and secure websites tailored to
          your unique business needs. From e-commerce platforms to corporate
          websites, we ensure a seamless user experience and cutting-edge
          functionality. Partner with us to create a powerful online identity
          and drive your business forward with our custom web solutions.
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
              className="w-[5%] aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${depositPhotos})` }}
            ></div>
            <div
              className="w-[5%] aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${slair})` }}
            ></div>
            <div
              className="w-[5%] aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${slcus})` }}
            ></div>
            <div
              className="w-[5%] aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${examplecus})` }}
            ></div>
          </div>
          <div className="flex gap-10 justify-center">
            <div
              className="w-[5%] aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${creative})` }}
            ></div>
            <div
              className="w-[5%] aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${vw})` }}
            ></div>
            <div
              className="w-[5%] aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${adcreative})` }}
            ></div>
            <div
              className="w-[5%] aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${colorful})` }}
            ></div>
          </div>
        </div>
      </div>
      {/*Branches*/}
      <div
        className="py-12 gap-12 max-md:gap-1 flex flex-col items-center bg-fixed bg-cover"
        style={{ backgroundImage: `url(${brbg})` }}
      >
        <h1 className="tiro-bangla p-0 m-0 text-4xl">Our Branches</h1>
        <span className="hidden max-md:flex h-11"></span>
        <div className="w-5/6 flex gap-1 max-md:flex-col">
          <div className="w-3/5 flex flex-col gap-1 max-md:w-full">
            <img src={gam1} alt="1" className="w-full"></img>
            <div className="flex">
              <img src={gam2} alt="2" className="w-1/2 pr-1"></img>
              <img src={gam3} alt="3" className="w-1/2"></img>
            </div>
          </div>
          <div className="w-2/5 bg-[#006E8A] text-white flex flex-col justify-center items-center gap-6 max-md:gap-0 max-md:w-full">
            <h1 className="text-center py-6 tiro-bangla w-full hidden m-0 max-md:block">
              Gampaha Branch
            </h1>
            <div className="w-full px-12 tiro-bangla max-md:hidden">
              <h1 className="text-start w-full">Gampaha</h1>
              <h1 className="text-end w-full">Branch</h1>
            </div>
            <div className="w-full px-12">
              <ul className="flex flex-col m-0 max-md:pb-6 text-start gap-3">
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-clock w-[16px]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                  </svg>
                  Open At 9.00 am to 4.00 pm
                </li>
                <li className="flex items-center gap-3">
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
                  033 22 31 456
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-signpost-split-fill w-[16px]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7 16h2V6h5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.8 2.4A1 1 0 0 0 14 2H9v-.586a1 1 0 0 0-2 0V7H2a1 1 0 0 0-.8.4L.225 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4h5z" />
                  </svg>
                  201 / P Kandy Road ,Yakkala, Gampaha
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-geo-alt-fill w-[16px]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                  </svg>
                  <a
                    href="https://www.google.com/"
                    className="text-white underline underline-offset-4"
                  >
                    View Location
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#006E8A] h-[100px] max-md:h-fit max-md:py-3 w-5/6 flex items-center">
          <ul className="uppercase text-white flex w-full justify-between px-12 m-0 max-md:p-0 max-sm:text-xs">
            <li className="cursor-pointer max-md:p-1 max-[350px]:p-0">
              Gampaha Branch
            </li>
            <li className="cursor-pointer opacity-50 max-md:p-1 max-[350px]:p-0">
              Colombo Branch
            </li>
            <li className="cursor-pointer opacity-50 max-md:p-1 max-[350px]:p-0">
              Anuradhapura Branch
            </li>
            <li className="cursor-pointer opacity-50 max-md:p-1 max-[350px]:p-0">
              Kandy Branch
            </li>
          </ul>
        </div>
      </div>
      {/*Awards*/}
      <div className="py-12 gap-12 flex flex-col items-center">
        <h1 className="tiro-bangla p-0 m-0 text-4xl">Awards</h1>
        <p className="px-12 m-0">
          Silicon Radon Networks offers premier Web Development services
          designed to elevate your online presence. Our team of expert
          developers crafts responsive, dynamic, and secure websites tailored to
          your unique business needs. From e-commerce platforms to corporate
          websites, we ensure a seamless user experience and cutting-edge
          functionality. Partner with us to create a powerful online identity
          and drive your business forward with our custom web solutions.
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
        <div className="w-full max-md:hidden flex justify-evenly">
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
    </>
  );
}

export default AboutUs;
