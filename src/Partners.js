import banner from "./images/Partners/banner.png";

import royal_havenwood from "./images/AboutUs/partners/royal_havenwood.jpg";
import muthukuda from "./images/AboutUs/partners/muthukuda.jpg";
import itic from "./images/AboutUs/partners/itic.jpg";
import ceylon_company from "./images/AboutUs/partners/ceylon_company.jpg";
import travel_gate from "./images/AboutUs/partners/travel_gate.jpg";
import insight_media from "./images/AboutUs/partners/insight_media.jpg";
import royal_circle from "./images/AboutUs/partners/royal_circle.jpg";
import royal_circle2 from "./images/AboutUs/partners/royal_circle.png";
import radon_pixel from "./images/AboutUs/partners/radon_pixel.jpg";
import tech_house from "./images/AboutUs/partners/tech_house.jpg";
import kandyan_legends from "./images/AboutUs/partners/kandyan_legends.jpg";
import universal_astrology from "./images/AboutUs/partners/universal_astrology.jpg";


function Partners() {
  return (
    <div className="h-fit">
      <div
        className="flex flex-col justify-center py-24 text-white bg-no-repeat bg-cover h-fit text-start"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="flex flex-col gap-2">
          <h1 className="pl-12 m-0 text-5xl font-thin max-md:pl-0 tiro-bangla max-xl:text-4xl max-md:text-center">
            Our Partners
          </h1>
          <p className="px-12 m-0 max-md:px-6 max-md:hidden line-height-20">
            Silicon Radon Networks offers premier Web Development services
            designed to elevate your online presence. Our team of expert
            developers crafts responsive, dynamic, and secure websites tailored
            to your unique business needs. From e-commerce platforms to
            corporate websites, we ensure a seamless user experience and
            cutting-edge functionality. Partner with us to create a powerful
            online identity and drive your business forward with our custom web
            solutions.
          </p>
        </div>
      </div>
      <div className="items-center justify-center hidden max-md:h-fit max-md:py-12 max-md:flex">
        <p className="flex-grow px-12 m-0 text-sm max-md:px-6 max-sm:px-3">
          Silicon Radon Networks offers premier Web Development services
          designed to elevate your online presence. Our team of expert
          developers crafts responsive, dynamic, and secure websites tailored to
          your unique business needs. From e-commerce platforms to corporate
          websites, we ensure a seamless user experience and cutting-edge
          functionality. Partner with us to create a powerful online identity
          and drive your business forward with our custom web solutions.
        </p>
      </div>
      <div className="py-12 h-fit max-sm:justify-center max-sm:items-center">
        {/* Static grid for larger screens */}
        <div className="flex flex-wrap justify-center w-full h-full gap-5 px-24 max-md:hidden">
        <div
            className="w-[7%] aspect-square rounded-lg bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${royal_havenwood})` }}
          ></div>
          <div
            className="w-[7%] aspect-square rounded-lg bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${muthukuda})` }}
          ></div>
          <div
            className="w-[7%] aspect-square rounded-lg bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${itic})` }}
          ></div>
          <div
            className="w-[7%] aspect-square rounded-lg bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${ceylon_company})` }}
          ></div>
          <div
            className="w-[7%] aspect-square rounded-lg bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${travel_gate})` }}
          ></div>
          <div
            className="w-[7%] aspect-square rounded-lg bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${insight_media})` }}
          ></div>
          <div
            className="w-[7%] aspect-square rounded-lg bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${royal_circle})` }}
          ></div>
          <div
            className="w-[7%] aspect-square rounded-lg bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${radon_pixel})` }}
          ></div>
          <div
            className="w-[7%] aspect-square rounded-lg bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${tech_house})` }}
          ></div>
          <div
            className="w-[7%] aspect-square rounded-lg bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${kandyan_legends})` }}
          ></div>
          <div
            className="w-[7%] aspect-square rounded-lg bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${universal_astrology})` }}
          ></div>
          <div
            className="w-[7%] aspect-square rounded-lg bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${royal_circle2})` }}
          ></div>
        </div>
        {/* Static grid for smaller screens */}
        <div className="flex-col items-center justify-center hidden w-full h-full gap-12 max-md:flex">
          <div className="flex items-center justify-center w-full h-full gap-3 max-sm:gap-0 max-sm:px-3">
            <div
              className="w-[7%] max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${royal_havenwood})` }}
            ></div>
            <div
              className="w-[7%] max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${muthukuda})` }}
            ></div>
            <div
              className="w-[7%] max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${itic})` }}
            ></div>
            <div
              className="w-[7%] max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${ceylon_company})` }}
            ></div>
            <div
              className="w-[7%] max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${travel_gate})` }}
            ></div>
            <div
              className="w-[7%] max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${insight_media})` }}
            ></div>
          </div>
          <div className="flex items-center justify-center w-full h-full gap-3 max-sm:gap-0 max-sm:px-3">
            <div
              className="w-[7%] max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${universal_astrology})` }}
            ></div>
            <div
              className="w-[7%] max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${kandyan_legends})` }}
            ></div>
            <div
              className="w-[7%] max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${tech_house})` }}
            ></div>
            <div
              className="w-[7%] max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${radon_pixel})` }}
            ></div>
            <div
              className="w-[7%] max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${royal_circle})` }}
            ></div>
            <div
              className="w-[7%] max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${royal_circle2})` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
