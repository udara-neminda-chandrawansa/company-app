import banner_1 from "./images/banner/banner-1.png";
import welcome_img from "./images/welcome-img.png";
import card_1 from "./images/banner-cards/card-1.png";
import card_2 from "./images/banner-cards/card-2.png";
import card_3 from "./images/banner-cards/card-3.png";
import card_4 from "./images/banner-cards/card-4.png";
import ServiceCard from "./components/Service-card";
import { Carousel } from "flowbite-react";

function Landing() {
  return (
    <>
      {/*Banner*/}
      <div
        className="flex flex-col h-4/5 bg-gradient-to-r from-black to-blue-500 bg-no-repeat bg-cover max-md:h-full"
        style={{ backgroundImage: `url(${banner_1})` }}
      >
        {/*Top layer (backdrop)*/}
        <div className="absolute h-4/5 inset-0 bg-gradient-to-br from-[transparent] to-[#022E39] max-md:h-full"></div>
        {/*text content*/}
        <div className="flex flex-col gap-24 w-full h-full items-center justify-center p-[100px] max-sm:p-[30px]">
          <h1 className="text-4xl text-white z-10 font-medium w-full text-start max-lg:text-3xl max-md:text-2xl max-sm:text-xl">
            Nothing Is More Attractive Than Quality
          </h1>
          <p className="text-sm font-light text-white text-start bg-gray-950 bg-opacity-30 z-10 p-3 max-sm:text-xs">
            Our customers are at the heart of everything we do. We partner with
            businesses of all sizes to deliver tailored software solutions that
            drive growth, efficiency, and innovation. By understanding your
            unique needs, we craft technology that empowers you to thrive in a
            rapidly changing digital landscape. Your success is our mission, and
            we are committed to supporting you every step of the way.
          </p>
        </div>
      </div>
      {/*card container*/}
      <div className="flex h-1/5 w-full items-center justify-center gap-6 relative bottom-8 max-md:hidden">
        <div
          className="h-full aspect-square bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${card_1})` }}
        ></div>
        <div
          className="h-full aspect-square bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${card_2})` }}
        ></div>
        <div
          className="h-full aspect-square bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${card_3})` }}
        ></div>
        <div
          className="h-full aspect-square bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${card_4})` }}
        ></div>
      </div>
      {/*welcome to silicon radon... */}
      <div
        className="flex flex-col gap-3 px-9 items-center justify-center h-[300px] w-full bg-no-repeat bg-cover bg-fixed bg-center max-sm:h-fit max-sm:py-6"
        style={{ backgroundImage: `url(${welcome_img})` }}
      >
        <h1 className="pt-serif-caption-regular text-3xl text-green-950 max-md:text-xl">
          Welcome To Silicon Radon Networks
        </h1>
        <p className="text-sm max-md:text-xs">
          Welcome to Silicon Radon Networks (Pvt) Ltd where innovation meets
          excellence in IT solutions. At Silicon Radon Networks, we specialize
          in delivering cutting-edge technology services that drive growth,
          enhance productivity, and empower businesses to succeed in the digital
          era. Our team of experts is committed to providing tailored
          networking, cybersecurity, and IT infrastructure solutions, designed
          to meet the unique needs of our clients.
        </p>
        <p className="text-sm max-md:text-xs">
          With a focus on reliability, scalability, and customer satisfaction,
          we bring you the best in technology-driven solutions to keep you ahead
          of the curve. Whether you're a small business seeking to optimize your
          operations or an enterprise ready to embrace the future, Silicon Radon
          Networks is your trusted partner in achieving success
        </p>
        <p className="text-sm max-md:text-xs">
          Welcome to a new level of innovation. Welcome to Silicon Radon
          Networks (Pvt) Ltd.
        </p>
      </div>
      <div className="h-fit w-full flex flex-col gap-12 justify-center items-center p-[100px] max-sm:p-[30px]">
        <h1 className="text-4xl uppercase w-full text-start">Our Services</h1>
        {/* Carousel visible only on max-md */}
        <div className="hidden max-md:flex w-full">
          <Carousel
            leftControl={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-arrow-right-circle w-[30px] h-[30px] text-[#006E8A]"
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
                className="bi bi-arrow-right-circle w-[30px] h-[30px] text-[#006E8A]"
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
    </>
  );
}

export default Landing;
