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
    <div className="h-fit">
      <div
        className="h-fit py-24 bg-no-repeat bg-cover flex flex-col justify-center text-start text-white"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="flex flex-col gap-2">
          <h1 className="font-thin m-0 pl-12 max-md:pl-0 tiro-bangla text-5xl max-xl:text-4xl max-md:text-center">
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
      <div className="hidden max-md:h-fit max-md:py-12 max-md:flex justify-center items-center">
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
      <div className="h-fit py-12 max-sm:justify-center max-sm:items-center">
        {/* Static grid for larger screens */}
        <div className="h-full flex justify-center flex-wrap px-24 gap-5 w-full max-md:hidden">
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
        {/* Static grid for smaller screens */}
        <div className="h-full hidden flex-col justify-center gap-12 items-center w-full max-md:flex">
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
