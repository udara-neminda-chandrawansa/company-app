import banner from "./images/Partners/banner.png";
import depositPhotos from "./images/AboutUs/partners/depositphotos.png";
import slair from "./images/AboutUs/partners/slair.png";
import slcus from "./images/AboutUs/partners/slcus.png";
import examplecus from "./images/AboutUs/partners/examplecus.png";
import creative from "./images/AboutUs/partners/creative.png";
import vw from "./images/AboutUs/partners/vw.png";
import adcreative from "./images/AboutUs/partners/adcreative.png";
import colorful from "./images/AboutUs/partners/colorful.png";

function Partners() {
  return (
    <div className="h-dvh max-md:h-[150dvh] max-sm:h-[150dvh]">
      <div
        className="h-2/5 max-lg:h-1/2 max-md:h-1/3 max-sm:h-1/3 bg-no-repeat bg-cover flex flex-col justify-center text-start text-white"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1 className="font-thin pl-12 max-md:pl-0 tiro-bangla text-5xl max-xl:text-4xl max-md:text-center">
          Our Partners
        </h1>
        <p className="px-12 max-md:px-6 max-md:hidden">
          Silicon Radon Networks offers premier Web Development services
          designed to elevate your online presence. Our team of expert
          developers crafts responsive, dynamic, and secure websites tailored to
          your unique business needs. From e-commerce platforms to corporate
          websites, we ensure a seamless user experience and cutting-edge
          functionality. Partner with us to create a powerful online identity
          and drive your business forward with our custom web solutions.
        </p>
      </div>
      <div className="hidden max-md:h-[50dvh] max-md:flex max-sm:h-1/3 justify-center items-center h-1/6">
        <p className="px-12 max-md:px-6 max-sm:px-3 text-sm m-0 flex-grow">
          Silicon Radon Networks offers premier Web Development services
          designed to elevate your online presence. Our team of expert
          developers crafts responsive, dynamic, and secure websites tailored to
          your unique business needs. From e-commerce platforms to corporate
          websites, we ensure a seamless user experience and cutting-edge
          functionality. Partner with us to create a powerful online identity
          and drive your business forward with our custom web solutions.
        </p>
      </div>
      <div className="h-3/5 max-lg:h-1/2 max-md:h-[50dvh] max-sm:h-1/3 max-sm:justify-center max-sm:items-center">
        {/* Static grid for larger screens */}
        <div className="h-full flex flex-col justify-center items-center w-full max-md:hidden">
          <div className="flex gap-5 justify-center items-center h-full w-full">
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
            <div
              className="w-[7%] aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${creative})` }}
            ></div>
            <div
              className="w-[7%] aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${vw})` }}
            ></div>
          </div>
          <div className="flex gap-5 justify-center items-center h-full w-full">
            <div
              className="w-[7%] aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${adcreative})` }}
            ></div>
            <div
              className="w-[7%] aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${colorful})` }}
            ></div>
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
          <div className="flex gap-5 justify-center items-center h-full w-full">
            <div
              className="w-[7%] aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${slcus})` }}
            ></div>
            <div
              className="w-[7%] aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${examplecus})` }}
            ></div>
            <div
              className="w-[7%] aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${adcreative})` }}
            ></div>
            <div
              className="w-[7%] aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${colorful})` }}
            ></div>
            <div
              className="w-[7%] aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${depositPhotos})` }}
            ></div>
            <div
              className="w-[7%] aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${slair})` }}
            ></div>
          </div>
        </div>
        {/* Static grid for smaller screens */}
        <div className="h-full hidden flex-col justify-center items-center w-full max-md:flex">
          <div className="flex gap-3 justify-center items-center h-full w-full max-sm:gap-0 max-sm:px-3">
            <div
              className="w-[7%] max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${depositPhotos})` }}
            ></div>
            <div
              className="w-[7%] max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${slair})` }}
            ></div>
            <div
              className="w-[7%] max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${slcus})` }}
            ></div>
            <div
              className="w-[7%] max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${examplecus})` }}
            ></div>
            <div
              className="w-[7%] max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${creative})` }}
            ></div>
            <div
              className="w-[7%] max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${vw})` }}
            ></div>
          </div>
          <div className="flex gap-3 justify-center items-center h-full w-full max-sm:gap-0 max-sm:px-3">
            <div
              className="w-[7%] max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${adcreative})` }}
            ></div>
            <div
              className="w-[7%] max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${colorful})` }}
            ></div>
            <div
              className="w-[7%] max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${depositPhotos})` }}
            ></div>
            <div
              className="w-[7%] max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${slair})` }}
            ></div>
            <div
              className="w-[7%] max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${slcus})` }}
            ></div>
            <div
              className="w-[7%] max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${examplecus})` }}
            ></div>
          </div>
          <div className="flex gap-3 justify-center items-center h-full w-full max-sm:gap-0 max-sm:px-3">
            <div
              className="w-[7%] max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${slcus})` }}
            ></div>
            <div
              className="w-[7%] max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${examplecus})` }}
            ></div>
            <div
              className="w-[7%] max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${adcreative})` }}
            ></div>
            <div
              className="w-[7%] max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${colorful})` }}
            ></div>
            <div
              className="w-[7%] max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${depositPhotos})` }}
            ></div>
            <div
              className="w-[7%] max-sm:w-1/6 aspect-square rounded-lg bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${slair})` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
