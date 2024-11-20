import { Carousel } from "flowbite-react";
import { CCarousel } from "@coreui/react";
import { CCarouselItem } from "@coreui/react";
import { useRef } from "react";
import { useState, useEffect } from "react";
import AnimatedWrapper from "./components/AnimatedWrapper.tsx";
import "@coreui/coreui/dist/css/coreui.min.css";
import ServiceCard from "./components/Service-card";
import ClientCard from "./components/Client-card";
import NewsCard from "./components/News-card";
import banner_1 from "./images/banner/banner-1.png";
import banner_2 from "./images/banner/banner-2.png";
import banner_3 from "./images/banner/banner-3.png";
import banner_4 from "./images/banner/banner-4.png";
import banner_5 from "./images/banner/banner-5.png";
import welcome_img from "./images/welcome-img.png";
import welcome_img_mob from "./images/welcome-img-mobile.png";
import client_img from "./images/client-img.png";
import card_1 from "./images/banner-cards/card-1.png";
import card_2 from "./images/banner-cards/card-2.png";
import card_3 from "./images/banner-cards/card-3.png";
import card_4 from "./images/banner-cards/card-4.png";
import news_1 from "./images/news-cards/news-1.png";
import news_2 from "./images/news-cards/news-2.png";
import news_3 from "./images/news-cards/news-3.png";
import figma_i from "./images/dev-logos/devicon_figma.png";
import react_i from "./images/dev-logos/skill-icons_react-dark.png";
import laravel_i from "./images/dev-logos/logos_laravel.png";
import nodejs_i from "./images/dev-logos/devicon_nodejs-wordmark.png";
import flutter_i from "./images/dev-logos/devicon_flutter.png";
import catppuccin_i from "./images/dev-logos/catppuccin_nest.png";
import nextjs_i from "./images/dev-logos/logos_nextjs-icon.png";
import python_i from "./images/dev-logos/logos_python.png";
import springboot_i from "./images/dev-logos/bxl_spring-boot.png";
import java_i from "./images/dev-logos/logos_java.png";
import quality from "./images/our-quality-img.png";
import quality_mob from "./images/our-quality-img-mob.png";

function Landing() {
  const banners = [
    // for storing images and banner text
    {
      img: banner_1,
      text: "Silicon Radon Networks offers premier Web Development services designed to elevate your online presence. Our team of expert developers crafts responsive, dynamic, and secure websites tailored to your unique business needs. From e-commerce platforms to corporate websites, we ensure a seamless user experience and cutting-edge functionality. Partner with us to create a powerful online identity and drive your business forward with our custom web solutions.",
    },
    {
      img: banner_2,
      text: "Welcome to Silicon Radon Networks, where cutting-edge software solutions meet unparallelad innovation. Our dedicated team of experts is committed to delivering robust, scalable, and user-friendly applications tailored to your business needs. Whether you're a startup or an established enterprise, we provide the technology to drive your success. Partner with us and experience the future of software development today.",
    },
    {
      img: banner_3,
      text: "Welcome to Silicon Radon Networks (Pvt) Ltd  where innovation meets excellence in IT solutions. At Silicon Radon Networks, we specialize in delivering cutting-edge technology services that drive growth, enhance productivity, and empower businesses to succeed in the digital era. Our team of experts is committed to providing tailored networking, cybersecurity, and IT infrastructure solutions, designed to meet the unique needs of our clients.",
    },
    {
      img: banner_4,
      text: "Our customers are at the heart of everything we do. We partner with businesses of all sizes to deliver tailored software solutions that drive growth, efficiency, and innovation. By understanding your unique needs, we craft technology that empowers you to thrive in a rapidly changing digital landscape. Your success is our mission, and we are committed to supporting you every step of the way.",
    },
    {
      img: banner_5,
      text: "Welcome to Silicon Radon Networks, where cutting-edge software solutions meet unparallelad innovation. Our dedicated team of experts is committed to delivering robust, scalable, and user-friendly applications tailored to your business needs. Whether you're a startup or an established enterprise, we provide the technology to drive your success. Partner with us and experience the future of software development today.",
    },
  ];
  const [currentBanner, setCurrentBanner] = useState(0); // initialize current banner image/text
  const [isTransitioning, setIsTransitioning] = useState(false); // initialize text transitioning

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentBanner((prev) => (prev + 1) % banners.length);
        setIsTransitioning(false);
      }, 300); // Match transition delay in bg
    }, 7500); // 7.5 seconds

    return () => clearInterval(interval);
  });

  const qualityEnd = useRef(null); // reference of 'Our Quality' right side div

  const scrollDown = () => {
    // scroll to end of the 'quality-scrollable' div
    document.getElementById("quality-scrollable").scrollTo({
      top: qualityEnd.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/*Banner*/}
      <div
        className="flex flex-col min-h-fit h-4/5 bg-no-repeat bg-cover transition-all delay-300 max-md:h-[100vh]"
        style={{ backgroundImage: `url(${banners[currentBanner].img})` }}
      >
        {/*Top layer (backdrop)*/}
        <div className="absolute h-4/5 inset-0 bg-gradient-to-br from-[transparent] to-[#022E39] max-md:h-[100vh]"></div>
        <AnimatedWrapper>
          {/*text content*/}
          <div className="flex flex-col gap-12 justify-between w-full h-full items-center py-56 max-sm:py-40 px-[70px] max-sm:px-[30px]">
            <h1 className="text-5xl text-white z-10 font-medium w-full text-start max-lg:text-4xl max-md:font-thin">
              Nothing Is More Attractive Than Quality
            </h1>
            <p
              className={`text-base font-light text-white text-start bg-gray-950 bg-opacity-30 z-10 p-3 max-sm:text-sm transition-all duration-300 ${
                isTransitioning
                  ? "opacity-0 translate-y-5"
                  : "opacity-100 translate-y-0"
              }`}
            >
              {banners[currentBanner].text}
            </p>
          </div>
        </AnimatedWrapper>
      </div>
      <AnimatedWrapper>
        {/*card container*/}
        <div className="flex h-1/5 w-full items-center justify-center gap-6 relative bottom-8 max-md:hidden">
          <div
            className="w-1/5 xl:w-1/6 aspect-square bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${card_1})` }}
          ></div>
          <div
            className="w-1/5 xl:w-1/6 aspect-square bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${card_2})` }}
          ></div>
          <div
            className="w-1/5 xl:w-1/6 aspect-square bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${card_3})` }}
          ></div>
          <div
            className="w-1/5 xl:w-1/6 aspect-square bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${card_4})` }}
          ></div>
        </div>
      </AnimatedWrapper>
      <AnimatedWrapper>
        {/*spacing div*/}
        <div className="max-md:h-0 h-[30px]"></div>
        {/*welcome to silicon radon... */}
        <div
          className="flex flex-col gap-3 px-9 items-center justify-center h-fit w-full bg-no-repeat bg-cover bg-fixed bg-center py-6"
          style={
            window.innerWidth > 768
              ? { backgroundImage: `url(${welcome_img})` }
              : { backgroundImage: `url(${welcome_img_mob})` }
          }
        >
          <h1 className="pt-serif-caption-regular text-4xl text-green-950 max-md:text-xl">
            Welcome To Silicon Radon Networks
          </h1>
          <p className="text-sm max-md:text-xs">
            Welcome to Silicon Radon Networks (Pvt) Ltd where innovation meets
            excellence in IT solutions. At Silicon Radon Networks, we specialize
            in delivering cutting-edge technology services that drive growth,
            enhance productivity, and empower businesses to succeed in the
            digital era. Our team of experts is committed to providing tailored
            networking, cybersecurity, and IT infrastructure solutions, designed
            to meet the unique needs of our clients.
          </p>
          <p className="text-sm max-md:text-xs">
            With a focus on reliability, scalability, and customer satisfaction,
            we bring you the best in technology-driven solutions to keep you
            ahead of the curve. Whether you're a small business seeking to
            optimize your operations or an enterprise ready to embrace the
            future, Silicon Radon Networks is your trusted partner in achieving
            success
          </p>
          <p className="text-sm max-md:text-xs">
            Welcome to a new level of innovation. Welcome to Silicon Radon
            Networks (Pvt) Ltd.
          </p>
        </div>
      </AnimatedWrapper>
      <AnimatedWrapper>
        {/*services*/}
        <div className="h-fit w-full flex flex-col gap-12 justify-center items-center p-[100px] max-sm:p-[30px]">
          <h1 className="text-4xl uppercase w-full text-start max-md:text-xl">
            Our Services
          </h1>
          {/* Carousel visible only on max-md */}
          <div className="hidden max-md:flex w-full">
            <Carousel
              leftControl={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-arrow-right-circle w-[30px] h-[30px] text-[#006E8A] max-sm:text-transparent"
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
                  className="bi bi-arrow-right-circle w-[30px] h-[30px] text-[#006E8A] max-sm:text-transparent"
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
              <ServiceCard
                whichImg="mob"
                cardTitle="Mobile Application Development"
                cardText="Our customers are at the heart of everything we do. We partner with businesses of all sizes to deliver tailored software solutions that drive growth, efficiency, and innovation. By understanding your unique needs, we craft technology that empowers you to thrive in a rapidly changing digital landscape. Your success is our mission, and we are committed to supporting you every step of the way."
              />
              <ServiceCard
                whichImg="desk"
                cardTitle="Desktop Application Development"
                cardText="Our customers are at the heart of everything we do. We partner with businesses of all sizes to deliver tailored software solutions that drive growth, efficiency, and innovation. By understanding your unique needs, we craft technology that empowers you to thrive in a rapidly changing digital landscape. Your success is our mission, and we are committed to supporting you every step of the way."
              />
              <ServiceCard
                whichImg="web"
                cardTitle="Web Development"
                cardText="Our customers are at the heart of everything we do. We partner with businesses of all sizes to deliver tailored software solutions that drive growth, efficiency, and innovation. By understanding your unique needs, we craft technology that empowers you to thrive in a rapidly changing digital landscape. Your success is our mission, and we are committed to supporting you every step of the way."
              />
              <ServiceCard
                whichImg="uxui"
                cardTitle="UI/UX Designing"
                cardText="Our customers are at the heart of everything we do. We partner with businesses of all sizes to deliver tailored software solutions that drive growth, efficiency, and innovation. By understanding your unique needs, we craft technology that empowers you to thrive in a rapidly changing digital landscape. Your success is our mission, and we are committed to supporting you every step of the way."
              />
              <ServiceCard
                whichImg="va"
                cardTitle="Virtual Assistant"
                cardText="Our customers are at the heart of everything we do. We partner with businesses of all sizes to deliver tailored software solutions that drive growth, efficiency, and innovation. By understanding your unique needs, we craft technology that empowers you to thrive in a rapidly changing digital landscape. Your success is our mission, and we are committed to supporting you every step of the way."
              />
            </Carousel>
          </div>
          {/* Static grid for larger screens */}
          <div className="w-full flex flex-wrap justify-center max-md:hidden">
            <ServiceCard
              whichImg="mob"
              cardTitle="Mobile Application Development"
              cardText="Our customers are at the heart of everything we do. We partner with businesses of all sizes to deliver tailored software solutions that drive growth, efficiency, and innovation. By understanding your unique needs, we craft technology that empowers you to thrive in a rapidly changing digital landscape. Your success is our mission, and we are committed to supporting you every step of the way."
              imgOnSide="true"
            />
            <ServiceCard
              whichImg="desk"
              cardTitle="Desktop Application Development"
              cardText="Our customers are at the heart of everything we do. We partner with businesses of all sizes to deliver tailored software solutions that drive growth, efficiency, and innovation. By understanding your unique needs, we craft technology that empowers you to thrive in a rapidly changing digital landscape. Your success is our mission, and we are committed to supporting you every step of the way."
            />
            <ServiceCard
              whichImg="web"
              cardTitle="Web Development"
              cardText="Our customers are at the heart of everything we do. We partner with businesses of all sizes to deliver tailored software solutions that drive growth, efficiency, and innovation. By understanding your unique needs, we craft technology that empowers you to thrive in a rapidly changing digital landscape. Your success is our mission, and we are committed to supporting you every step of the way."
            />
            <ServiceCard
              whichImg="uxui"
              cardTitle="UI/UX Designing"
              cardText="Our customers are at the heart of everything we do. We partner with businesses of all sizes to deliver tailored software solutions that drive growth, efficiency, and innovation. By understanding your unique needs, we craft technology that empowers you to thrive in a rapidly changing digital landscape. Your success is our mission, and we are committed to supporting you every step of the way."
            />
            <ServiceCard
              whichImg="va"
              cardTitle="Virtual Assistant"
              cardText="Our customers are at the heart of everything we do. We partner with businesses of all sizes to deliver tailored software solutions that drive growth, efficiency, and innovation. By understanding your unique needs, we craft technology that empowers you to thrive in a rapidly changing digital landscape. Your success is our mission, and we are committed to supporting you every step of the way."
              imgOnSide="true"
            />
          </div>
        </div>
      </AnimatedWrapper>
      <AnimatedWrapper>
        {/*clients*/}
        <div
          className="flex flex-col items-center gap-6 h-fit w-full bg-no-repeat bg-cover bg-fixed bg-center py-12 px-20 max-lg:py-10 max-lg:px-10 max-md:py-6 max-md:px-3"
          style={{ backgroundImage: `url(${client_img})` }}
        >
          <h1 className="relative z-10 text-4xl text-white underline underline-offset-8 max-md:text-xl">
            Our Clients
          </h1>
          <p className="text-sm text-white font-thin">
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
          <div className="hidden max-md:flex w-3/4">
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
              className="rounded-se-3xl rounded-es-3xl bg-white transition-all delay-500"
            >
              <ClientCard
                whichImg={"slair"}
                cardTitle={"SRI LANKAN AIRLINES"}
                cardText={
                  "“Our customers are at the heart of everything we do. We partner with businesses of all sizes to deliver tailored software solutions that drive growth, efficiency, and innovation. By understanding your unique needs, we craft technology that empowers you to thrive in a rapidly changing digital landscape. Your success is our mission, and we are committed to supporting you every step of the way.”"
                }
                cardAuthor={"- Dr. Darshana Haputhanthri -"}
              ></ClientCard>
              <ClientCard
                whichImg={"slcus"}
                cardTitle={"SRI LANKA CUSTOMS"}
                cardText={
                  "“Our customers are at the heart of everything we do. We partner with businesses of all sizes to deliver tailored software solutions that drive growth, efficiency, and innovation. By understanding your unique needs, we craft technology that empowers you to thrive in a rapidly changing digital landscape. Your success is our mission, and we are committed to supporting you every step of the way.”"
                }
                cardAuthor={"- Dr. Darshana Haputhanthri -"}
              ></ClientCard>
              <ClientCard
                whichImg={"sample"}
                cardTitle={"LOGO TEXT"}
                cardText={
                  "“Our customers are at the heart of everything we do. We partner with businesses of all sizes to deliver tailored software solutions that drive growth, efficiency, and innovation. By understanding your unique needs, we craft technology that empowers you to thrive in a rapidly changing digital landscape. Your success is our mission, and we are committed to supporting you every step of the way.”"
                }
                cardAuthor={"- Dr. Darshana Haputhanthri -"}
              ></ClientCard>
            </Carousel>
          </div>
          {/* Static grid for larger screens */}
          <div className="flex justify-center gap-12 max-md:hidden">
            <ClientCard
              whichImg={"slair"}
              cardTitle={"SRI LANKAN AIRLINES"}
              cardText={
                "“Our customers are at the heart of everything we do. We partner with businesses of all sizes to deliver tailored software solutions that drive growth, efficiency, and innovation. By understanding your unique needs, we craft technology that empowers you to thrive in a rapidly changing digital landscape. Your success is our mission, and we are committed to supporting you every step of the way.”"
              }
              cardAuthor={"- Dr. Darshana Haputhanthri -"}
            ></ClientCard>
            <ClientCard
              whichImg={"slcus"}
              cardTitle={"SRI LANKA CUSTOMS"}
              cardText={
                "“Our customers are at the heart of everything we do. We partner with businesses of all sizes to deliver tailored software solutions that drive growth, efficiency, and innovation. By understanding your unique needs, we craft technology that empowers you to thrive in a rapidly changing digital landscape. Your success is our mission, and we are committed to supporting you every step of the way.”"
              }
              cardAuthor={"- Dr. Darshana Haputhanthri -"}
            ></ClientCard>
            <ClientCard
              whichImg={"sample"}
              cardTitle={"LOGO TEXT"}
              cardText={
                "“Our customers are at the heart of everything we do. We partner with businesses of all sizes to deliver tailored software solutions that drive growth, efficiency, and innovation. By understanding your unique needs, we craft technology that empowers you to thrive in a rapidly changing digital landscape. Your success is our mission, and we are committed to supporting you every step of the way.”"
              }
              cardAuthor={"- Dr. Darshana Haputhanthri -"}
            ></ClientCard>
          </div>
        </div>
      </AnimatedWrapper>
      <AnimatedWrapper>
        {/*strength*/}
        <div className="flex flex-col items-center gap-6 h-fit w-full py-12 px-20 max-lg:py-10 max-lg:px-10 max-md:py-6 max-md:px-3">
          <h1 className="relative z-10 text-4xl text-[#022E39] max-md:text-xl">
            Our Strength
          </h1>
          <p className="text-sm">
            Coding languages are the building blocks of software development,
            enabling us to create tailored, efficient, and scalable solutions.
            At Silicon Radon Networks, we specialize in languages like Python,
            Java, JavaScript and Ect using their unique strengths to develop
            innovative applications, websites, and systems that meet diverse
            business needs and drive success.
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
                  className="w-1/12 max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-contain"
                  style={{ backgroundImage: `url(${figma_i})` }}
                ></div>
                <div
                  className="w-1/12 max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-contain"
                  style={{ backgroundImage: `url(${react_i})` }}
                ></div>
                <div
                  className="w-1/12 max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-contain"
                  style={{ backgroundImage: `url(${laravel_i})` }}
                ></div>
              </div>
              <div className="flex gap-12 justify-center">
                <div
                  className="w-1/12 max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-contain"
                  style={{ backgroundImage: `url(${nodejs_i})` }}
                ></div>
                <div
                  className="w-1/12 max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-contain"
                  style={{ backgroundImage: `url(${flutter_i})` }}
                ></div>
                <div
                  className="w-1/12 max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-contain"
                  style={{ backgroundImage: `url(${catppuccin_i})` }}
                ></div>
              </div>
              <div className="flex gap-12 justify-center">
                <div
                  className="w-1/12 max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-contain"
                  style={{ backgroundImage: `url(${nextjs_i})` }}
                ></div>
                <div
                  className="w-1/12 max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-contain"
                  style={{ backgroundImage: `url(${python_i})` }}
                ></div>
                <div
                  className="w-1/12 max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-contain"
                  style={{ backgroundImage: `url(${springboot_i})` }}
                ></div>
              </div>
              <div className="flex justify-center">
                <div
                  className="w-1/12 max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-contain"
                  style={{ backgroundImage: `url(${java_i})` }}
                ></div>
              </div>
            </Carousel>
          </div>
          {/* Static grid for larger screens */}
          <div className="flex flex-col gap-6 px-20 w-full max-md:hidden">
            <div className="flex gap-10 justify-center">
              <div
                className="w-[5%] aspect-square rounded-lg bg-no-repeat bg-contain"
                style={{ backgroundImage: `url(${figma_i})` }}
              ></div>
              <div
                className="w-[5%] aspect-square rounded-lg bg-no-repeat bg-contain"
                style={{ backgroundImage: `url(${react_i})` }}
              ></div>
              <div
                className="w-[5%] aspect-square rounded-lg bg-no-repeat bg-contain"
                style={{ backgroundImage: `url(${laravel_i})` }}
              ></div>
              <div
                className="w-[5%] aspect-square rounded-lg bg-no-repeat bg-contain"
                style={{ backgroundImage: `url(${nodejs_i})` }}
              ></div>
              <div
                className="w-[5%] aspect-square rounded-lg bg-no-repeat bg-contain"
                style={{ backgroundImage: `url(${flutter_i})` }}
              ></div>
            </div>
            <div className="flex gap-10 justify-center">
              <div
                className="w-[5%] aspect-square rounded-lg bg-no-repeat bg-contain"
                style={{ backgroundImage: `url(${catppuccin_i})` }}
              ></div>
              <div
                className="w-[5%] aspect-square rounded-lg bg-no-repeat bg-contain"
                style={{ backgroundImage: `url(${nextjs_i})` }}
              ></div>
              <div
                className="w-[5%] aspect-square rounded-lg bg-no-repeat bg-contain"
                style={{ backgroundImage: `url(${python_i})` }}
              ></div>
              <div
                className="w-[5%] aspect-square rounded-lg bg-no-repeat bg-contain"
                style={{ backgroundImage: `url(${springboot_i})` }}
              ></div>
              <div
                className="w-[5%] aspect-square rounded-lg bg-no-repeat bg-contain"
                style={{ backgroundImage: `url(${java_i})` }}
              ></div>
            </div>
          </div>
        </div>
      </AnimatedWrapper>
      <AnimatedWrapper>
        {/*our quality*/}
        <div
          className="flex justify-between h-fit bg-no-repeat bg-cover bg-fixed bg-center max-md:flex-col max-md:bg-t"
          style={
            window.innerWidth > 768
              ? { backgroundImage: `url(${quality})` }
              : { backgroundImage: `url(${quality_mob})` }
          }
        >
          <div className="w-1/2 flex flex-col justify-center max-md:w-full max-md:py-24">
            <div className="flex items-center flex-col">
              <div className="w-fit">
                <h1 className="text-white text-3xl max-lg:text-2xl text-start max-[375px]:text-xl">
                  The Best
                </h1>
                <h1 className="text-white text-9xl max-lg:text-8xl text-start font-bold max-[375px]:text-7xl">
                  Quality
                </h1>
                <h1 className="text-white text-3xl text-nowrap max-lg:text-2xl text-start max-[375px]:text-xl">
                  Software Solutions For You
                </h1>
              </div>
            </div>
          </div>
          <div
            id="quality-scrollable"
            className="w-1/2 flex flex-col items-center gap-6 px-12 max-md:bg-[#000000CF] max-sm:px-4 max-lg:gap-3 max-md:text-sm max-sm:text-xs max-h-[500px] overflow-y-scroll no-scrollbar max-md:w-full max-md:h-1/2"
          >
            <p className="text-white text-start pt-12 max-md:pt-6">
              At Silicon Radon Networks, we place our customers at the heart of
              everything we do. We’re passionate about transforming ideas into
              reality and delivering innovative software solutions that drive
              real business value. Here’s why our customers continue to choose
              us as their trusted technology partner:
            </p>
            <p className="text-white text-start">
              <strong>Cutting-Edge Technology:</strong> We harness the latest
              technologies to deliver robust, scalable, and future-proof
              solutions tailored to your business needs.
            </p>
            <p className="text-white text-start">
              <strong>Cutting-Edge Technology:</strong> We harness the latest
              technologies to deliver robust, scalable, and future-proof
              solutions tailored to your business needs.
            </p>
            <p className="text-white text-start">
              <strong>Cutting-Edge Technology:</strong> We harness the latest
              technologies to deliver robust, scalable, and future-proof
              solutions tailored to your business needs.
            </p>
            <p className="text-white text-start pb-6 max-sm:pb-2">
              <strong>Customer-Centric Approach:</strong> Our solutions are
              driven by a deep understanding of our clients' goals. We listen,
              collaborate, and customize our offerings to fit your unique
              requirements.
            </p>
            <button
              onClick={scrollDown}
              className="sticky bottom-5 bg-white rounded-full max-md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-arrow-down-short h-[20px] w-[20px] text-black"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"
                />
              </svg>
            </button>
            <span className="max-md:hidden" ref={qualityEnd}></span>
          </div>
        </div>
      </AnimatedWrapper>
      <AnimatedWrapper>
        {/*news*/}
        <div className="h-fit w-full flex flex-col gap-12 justify-center items-center p-[100px] max-sm:p-[30px]">
          <h1 className="relative z-10 text-4xl text-[#022E39] max-md:text-xl">
            News & Upcoming Events
          </h1>
          {/*max-lg -> one card per slide*/}
          <CCarousel
            indicators
            dark
            className="hidden max-lg:flex w-full justify-center items-center"
          >
            <CCarouselItem className="">
              <div className="h-[350px] flex justify-center">
                <NewsCard
                  whichImg={news_1}
                  cardText={
                    "Silicon Radon Networks Annual Trip & Event Will Start On 2024.12.14..."
                  }
                ></NewsCard>
              </div>
            </CCarouselItem>
            <CCarouselItem className="">
              <div className="h-[350px] flex justify-center">
                <NewsCard
                  whichImg={news_2}
                  cardText={"Silicon Radon Networks Annual Award Ceremony..."}
                ></NewsCard>
              </div>
            </CCarouselItem>
            <CCarouselItem className="">
              <div className="h-[350px] flex justify-center">
                <NewsCard
                  whichImg={news_3}
                  cardText={
                    "Silicon Radon Networks 31 Night Events And Dj Party Will Be..."
                  }
                ></NewsCard>
              </div>
            </CCarouselItem>
          </CCarousel>
          {/*else -> three cards per slide*/}
          <CCarousel
            indicators
            dark
            className="w-5/6 flex justify-center items-center max-lg:hidden"
          >
            <CCarouselItem className="">
              <div className="h-[350px] flex justify-center gap-3">
                <NewsCard
                  whichImg={news_1}
                  cardText={
                    "Silicon Radon Networks Annual Trip & Event Will Start On 2024.12.14..."
                  }
                ></NewsCard>
                <NewsCard
                  whichImg={news_2}
                  cardText={"Silicon Radon Networks Annual Award Ceremony..."}
                ></NewsCard>
                <NewsCard
                  whichImg={news_3}
                  cardText={
                    "Silicon Radon Networks 31 Night Events And Dj Party Will Be..."
                  }
                ></NewsCard>
              </div>
            </CCarouselItem>
            <CCarouselItem className="">
              <div className="h-[350px] flex justify-center gap-3">
                <NewsCard
                  whichImg={news_1}
                  cardText={
                    "Silicon Radon Networks Annual Trip & Event Will Start On 2024.12.14..."
                  }
                ></NewsCard>
                <NewsCard
                  whichImg={news_2}
                  cardText={"Silicon Radon Networks Annual Award Ceremony..."}
                ></NewsCard>
                <NewsCard
                  whichImg={news_3}
                  cardText={
                    "Silicon Radon Networks 31 Night Events And Dj Party Will Be..."
                  }
                ></NewsCard>
              </div>
            </CCarouselItem>
            <CCarouselItem className="">
              <div className="h-[350px] flex justify-center gap-3">
                <NewsCard
                  whichImg={news_1}
                  cardText={
                    "Silicon Radon Networks Annual Trip & Event Will Start On 2024.12.14..."
                  }
                ></NewsCard>
                <NewsCard
                  whichImg={news_2}
                  cardText={"Silicon Radon Networks Annual Award Ceremony..."}
                ></NewsCard>
                <NewsCard
                  whichImg={news_3}
                  cardText={
                    "Silicon Radon Networks 31 Night Events And Dj Party Will Be..."
                  }
                ></NewsCard>
              </div>
            </CCarouselItem>
          </CCarousel>
        </div>
      </AnimatedWrapper>
    </>
  );
}

export default Landing;
