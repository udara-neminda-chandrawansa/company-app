import { Carousel } from "flowbite-react";
import { CCarousel } from "@coreui/react";
import { CCarouselItem } from "@coreui/react";
import { useState } from "react";
import ProductCard from "./components/Product-card";
import banner from "./images/Products/banner.png";
import pos from "./images/Products/cards/pos.png";
import lms from "./images/Products/cards/lms.png";
import inv from "./images/Products/cards/inv.png";
import examplecus from "./images/AboutUs/partners/examplecus.png";
import creative from "./images/AboutUs/partners/creative.png";
import vw from "./images/AboutUs/partners/vw.png";
import adcreative from "./images/AboutUs/partners/adcreative.png";
import prodPaneBanner_1 from "./images/Products/product-pane/banner-1.png";
import feedbackBanner from "./images/Products/product-pane/feedback-side-banner.png";

function Products() {
  const [productPaneVisible, setProductPaneVisible] = useState(false);
  const [selectedProduct, selectProduct] = useState(0);

  const products = [
    // [product img, name, desc, client feedback [[client name, no of stars, desc], [client name, no of stars, desc]...]...]
    [
      pos,
      "POS System",
      "A Point of Sale (POS) system is a combination of hardware and software designed to facilitate sales transactions and manage business operations. It typically includes hardware components such as a POS terminal (computer or tablet), touchscreen monitor, barcode scanne A Point of Sale (POS) system is a combination of hardware and software designed to facilitate sales transactions and manage business operations. It typically includes hardware components such as a POS terminal (computer or tablet), touchscreen monitor, barcode scanne A Point of Sale (POS) system is a combination of hardware and software designed to facilitate sales transactions and manage business operations. It typically includes hardware components such as a POS terminal (computer or tablet), touchscreen monitor, barcode scanneA Point of Sale (POS) system is a combination of hardware and software designed to facilitate sales transactions and manage business operations. It typically includes hardware components such as a POS terminal (computer or tablet), touchscreen monitor, barcode scanne , touchscreen monitor, barcode scanne A Point of Sale (POS) system is a combination of hardware and software designed to facilitate sales transactions and manage business operations. It typically includes hardware components such as a POS terminal (computer or tablet), touchscreen monitor, barcode scanneA Point of Sale (POS) system is a combination of hardware and software designed to facilitate sales transactions and manage business operations. It typically includes hardware components such as a POS terminal (computer or tablet), touchscreen monitor and a barcode scanner.",
      prodPaneBanner_1,
      [
        [
          adcreative,
          "Company 1",
          5,
          "Silicon Radon Networks is a standout IT company known for its innovative solutions, technical expertise, and strong customer focus. The company consistently demonstrates a commitment to delivering cutting-edge network and IT services, meeting client needs with high levels of efficiency and reliability. Their skilled team effectively handles complex challenges, building trust through the timely and high-quality execution of projects. However, there is room for improvement in enhancing communication channels to ensure consistent responsiveness throughout project phases, and expanding their service offerings to support scalability would help meet diverse industry demands. Overall, Silicon Radon Networks’ dedication to excellence and customer-centric approach positions it as a trusted partner in the IT industry.",
        ],
        [
          vw,
          "Company 2",
          5,
          "Silicon Radon Networks is a standout IT company known for its innovative solutions, technical expertise, and strong customer focus. The company consistently demonstrates a commitment to delivering cutting-edge network and IT services, meeting client needs with high levels of efficiency and reliability. Their skilled team effectively handles complex challenges, building trust through the timely and high-quality execution of projects. However, there is room for improvement in enhancing communication channels to ensure consistent responsiveness throughout project phases, and expanding their service offerings to support scalability would help meet diverse industry demands. Overall, Silicon Radon Networks’ dedication to excellence and customer-centric approach positions it as a trusted partner in the IT industry.",
        ],
        [
          creative,
          "Company 3",
          5,
          "Silicon Radon Networks is a standout IT company known for its innovative solutions, technical expertise, and strong customer focus. The company consistently demonstrates a commitment to delivering cutting-edge network and IT services, meeting client needs with high levels of efficiency and reliability. Their skilled team effectively handles complex challenges, building trust through the timely and high-quality execution of projects. However, there is room for improvement in enhancing communication channels to ensure consistent responsiveness throughout project phases, and expanding their service offerings to support scalability would help meet diverse industry demands. Overall, Silicon Radon Networks’ dedication to excellence and customer-centric approach positions it as a trusted partner in the IT industry.",
        ],
        [
          examplecus,
          "Company 4",
          5,
          "Silicon Radon Networks is a standout IT company known for its innovative solutions, technical expertise, and strong customer focus. The company consistently demonstrates a commitment to delivering cutting-edge network and IT services, meeting client needs with high levels of efficiency and reliability. Their skilled team effectively handles complex challenges, building trust through the timely and high-quality execution of projects. However, there is room for improvement in enhancing communication channels to ensure consistent responsiveness throughout project phases, and expanding their service offerings to support scalability would help meet diverse industry demands. Overall, Silicon Radon Networks’ dedication to excellence and customer-centric approach positions it as a trusted partner in the IT industry.",
        ],
      ],
    ],
    [
      lms,
      "LMS System",
      "A Point of Sale (POS) system is a combination of hardware and software designed to facilitate sales transactions and manage business operations. It typically includes hardware components such as a POS terminal (computer or tablet), touchscreen monitor, barcode scanne A Point of Sale (POS) system is a combination of hardware and software designed to facilitate sales transactions and manage business operations. It typically includes hardware components such as a POS terminal (computer or tablet), touchscreen monitor, barcode scanne A Point of Sale (POS) system is a combination of hardware and software designed to facilitate sales transactions and manage business operations. It typically includes hardware components such as a POS terminal (computer or tablet), touchscreen monitor, barcode scanneA Point of Sale (POS) system is a combination of hardware and software designed to facilitate sales transactions and manage business operations. It typically includes hardware components such as a POS terminal (computer or tablet), touchscreen monitor, barcode scanne , touchscreen monitor, barcode scanne A Point of Sale (POS) system is a combination of hardware and software designed to facilitate sales transactions and manage business operations. It typically includes hardware components such as a POS terminal (computer or tablet), touchscreen monitor, barcode scanneA Point of Sale (POS) system is a combination of hardware and software designed to facilitate sales transactions and manage business operations. It typically includes hardware components such as a POS terminal (computer or tablet), touchscreen monitor and a barcode scanner.",
      prodPaneBanner_1,
      [
        [
          adcreative,
          "Company 1",
          5,
          "Silicon Radon Networks is a standout IT company known for its innovative solutions, technical expertise, and strong customer focus. The company consistently demonstrates a commitment to delivering cutting-edge network and IT services, meeting client needs with high levels of efficiency and reliability. Their skilled team effectively handles complex challenges, building trust through the timely and high-quality execution of projects. However, there is room for improvement in enhancing communication channels to ensure consistent responsiveness throughout project phases, and expanding their service offerings to support scalability would help meet diverse industry demands. Overall, Silicon Radon Networks’ dedication to excellence and customer-centric approach positions it as a trusted partner in the IT industry.",
        ],
        [
          vw,
          "Company 2",
          5,
          "Silicon Radon Networks is a standout IT company known for its innovative solutions, technical expertise, and strong customer focus. The company consistently demonstrates a commitment to delivering cutting-edge network and IT services, meeting client needs with high levels of efficiency and reliability. Their skilled team effectively handles complex challenges, building trust through the timely and high-quality execution of projects. However, there is room for improvement in enhancing communication channels to ensure consistent responsiveness throughout project phases, and expanding their service offerings to support scalability would help meet diverse industry demands. Overall, Silicon Radon Networks’ dedication to excellence and customer-centric approach positions it as a trusted partner in the IT industry.",
        ],
        [
          creative,
          "Company 3",
          5,
          "Silicon Radon Networks is a standout IT company known for its innovative solutions, technical expertise, and strong customer focus. The company consistently demonstrates a commitment to delivering cutting-edge network and IT services, meeting client needs with high levels of efficiency and reliability. Their skilled team effectively handles complex challenges, building trust through the timely and high-quality execution of projects. However, there is room for improvement in enhancing communication channels to ensure consistent responsiveness throughout project phases, and expanding their service offerings to support scalability would help meet diverse industry demands. Overall, Silicon Radon Networks’ dedication to excellence and customer-centric approach positions it as a trusted partner in the IT industry.",
        ],
        [
          examplecus,
          "Company 4",
          5,
          "Silicon Radon Networks is a standout IT company known for its innovative solutions, technical expertise, and strong customer focus. The company consistently demonstrates a commitment to delivering cutting-edge network and IT services, meeting client needs with high levels of efficiency and reliability. Their skilled team effectively handles complex challenges, building trust through the timely and high-quality execution of projects. However, there is room for improvement in enhancing communication channels to ensure consistent responsiveness throughout project phases, and expanding their service offerings to support scalability would help meet diverse industry demands. Overall, Silicon Radon Networks’ dedication to excellence and customer-centric approach positions it as a trusted partner in the IT industry.",
        ],
      ],
    ],
    [
      inv,
      "Inventory Control System",
      "A Point of Sale (POS) system is a combination of hardware and software designed to facilitate sales transactions and manage business operations. It typically includes hardware components such as a POS terminal (computer or tablet), touchscreen monitor, barcode scanne A Point of Sale (POS) system is a combination of hardware and software designed to facilitate sales transactions and manage business operations. It typically includes hardware components such as a POS terminal (computer or tablet), touchscreen monitor, barcode scanne A Point of Sale (POS) system is a combination of hardware and software designed to facilitate sales transactions and manage business operations. It typically includes hardware components such as a POS terminal (computer or tablet), touchscreen monitor, barcode scanneA Point of Sale (POS) system is a combination of hardware and software designed to facilitate sales transactions and manage business operations. It typically includes hardware components such as a POS terminal (computer or tablet), touchscreen monitor, barcode scanne , touchscreen monitor, barcode scanne A Point of Sale (POS) system is a combination of hardware and software designed to facilitate sales transactions and manage business operations. It typically includes hardware components such as a POS terminal (computer or tablet), touchscreen monitor, barcode scanneA Point of Sale (POS) system is a combination of hardware and software designed to facilitate sales transactions and manage business operations. It typically includes hardware components such as a POS terminal (computer or tablet), touchscreen monitor and a barcode scanner.",
      prodPaneBanner_1,
      [
        [
          adcreative,
          "Company 1",
          5,
          "Silicon Radon Networks is a standout IT company known for its innovative solutions, technical expertise, and strong customer focus. The company consistently demonstrates a commitment to delivering cutting-edge network and IT services, meeting client needs with high levels of efficiency and reliability. Their skilled team effectively handles complex challenges, building trust through the timely and high-quality execution of projects. However, there is room for improvement in enhancing communication channels to ensure consistent responsiveness throughout project phases, and expanding their service offerings to support scalability would help meet diverse industry demands. Overall, Silicon Radon Networks’ dedication to excellence and customer-centric approach positions it as a trusted partner in the IT industry.",
        ],
        [
          vw,
          "Company 2",
          5,
          "Silicon Radon Networks is a standout IT company known for its innovative solutions, technical expertise, and strong customer focus. The company consistently demonstrates a commitment to delivering cutting-edge network and IT services, meeting client needs with high levels of efficiency and reliability. Their skilled team effectively handles complex challenges, building trust through the timely and high-quality execution of projects. However, there is room for improvement in enhancing communication channels to ensure consistent responsiveness throughout project phases, and expanding their service offerings to support scalability would help meet diverse industry demands. Overall, Silicon Radon Networks’ dedication to excellence and customer-centric approach positions it as a trusted partner in the IT industry.",
        ],
        [
          creative,
          "Company 3",
          5,
          "Silicon Radon Networks is a standout IT company known for its innovative solutions, technical expertise, and strong customer focus. The company consistently demonstrates a commitment to delivering cutting-edge network and IT services, meeting client needs with high levels of efficiency and reliability. Their skilled team effectively handles complex challenges, building trust through the timely and high-quality execution of projects. However, there is room for improvement in enhancing communication channels to ensure consistent responsiveness throughout project phases, and expanding their service offerings to support scalability would help meet diverse industry demands. Overall, Silicon Radon Networks’ dedication to excellence and customer-centric approach positions it as a trusted partner in the IT industry.",
        ],
        [
          examplecus,
          "Company 4",
          5,
          "Silicon Radon Networks is a standout IT company known for its innovative solutions, technical expertise, and strong customer focus. The company consistently demonstrates a commitment to delivering cutting-edge network and IT services, meeting client needs with high levels of efficiency and reliability. Their skilled team effectively handles complex challenges, building trust through the timely and high-quality execution of projects. However, there is room for improvement in enhancing communication channels to ensure consistent responsiveness throughout project phases, and expanding their service offerings to support scalability would help meet diverse industry demands. Overall, Silicon Radon Networks’ dedication to excellence and customer-centric approach positions it as a trusted partner in the IT industry.",
        ],
      ],
    ],
  ];

  return (
    <div className="">
      {/*banner*/}
      <div
        className="h-[40vh] max-lg:h-[50vh] bg-no-repeat bg-cover flex flex-col justify-center text-start text-white"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1 className="font-thin pl-12 max-md:pl-0 tiro-bangla text-5xl max-xl:text-4xl max-md:text-3xl max-sm:text-2xl max-md:text-center">
          Our Products
        </h1>
        <p className="px-12 max-md:px-6 max-md:text-sm max-md:text-center max-sm:text-xs">
          Silicon Radon Networks offers premier Web Development services
          designed to elevate your online presence. Our team of expert
          developers crafts responsive, dynamic, and secure websites tailored to
          your unique business needs. From e-commerce platforms to corporate
          websites, we ensure a seamless user experience and cutting-edge
          functionality. Partner with us to create a powerful online identity
          and drive your business forward with our custom web solutions.
        </p>
      </div>
      {/*product cards*/}
      <div
        className={`h-[60vh] max-lg:h-[50vh] flex justify-center items-center ${
          productPaneVisible === true ? "hidden" : "flex"
        }`}
      >
        {/*max-lg -> one card per slide*/}
        <CCarousel
          dark
          className="hidden max-lg:flex w-full h-full justify-center items-center"
        >
          <CCarouselItem className="">
            <div className="h-full flex justify-center">
              <ProductCard
                whichImg={pos}
                cardTitle={"POS System"}
                onClick={() => {
                  setProductPaneVisible(true);
                  selectProduct(0);
                }}
                cardText={
                  "A Point of Sale (POS) system is a combination of hardware and software designed to facilitate sales transactions and manage business operations. It typically includes hardware components such as a POS terminal (computer or tablet)..."
                }
              ></ProductCard>
            </div>
          </CCarouselItem>
          <CCarouselItem className="">
            <div className="h-full flex justify-center">
              <ProductCard
                whichImg={lms}
                cardTitle={"LMS System"}
                onClick={() => {
                  setProductPaneVisible(true);
                  selectProduct(1);
                }}
                cardText={
                  "A Point of Sale (POS) system is a combination of hardware and software designed to facilitate sales transactions and manage business operations. It typically includes hardware components such as a POS terminal (computer or tablet)..."
                }
              ></ProductCard>
            </div>
          </CCarouselItem>
          <CCarouselItem className="">
            <div className="h-full flex justify-center">
              <ProductCard
                whichImg={inv}
                cardTitle={"Inventory Control System"}
                onClick={() => {
                  setProductPaneVisible(true);
                  selectProduct(2);
                }}
                cardText={
                  "A Point of Sale (POS) system is a combination of hardware and software designed to facilitate sales transactions and manage business operations. It typically includes hardware components such as a POS terminal (computer or tablet)..."
                }
              ></ProductCard>
            </div>
          </CCarouselItem>
        </CCarousel>
        {/*else -> three cards per slide*/}
        <CCarousel
          indicators
          dark
          className="w-5/6 h-full flex justify-center items-center max-lg:hidden"
        >
          <CCarouselItem className="h-full">
            <div className="h-full flex justify-center gap-3">
              <ProductCard
                whichImg={pos}
                cardTitle={"POS System"}
                onClick={() => {
                  setProductPaneVisible(true);
                  selectProduct(0);
                }}
                cardText={
                  "A Point of Sale (POS) system is a combination of hardware and software designed to facilitate sales transactions and manage business operations. It typically includes hardware components such as a POS terminal (computer or tablet)..."
                }
              ></ProductCard>
              <div className="w-[2px] bg-black"></div>
              <ProductCard
                whichImg={lms}
                cardTitle={"LMS System"}
                onClick={() => {
                  setProductPaneVisible(true);
                  selectProduct(1);
                }}
                cardText={
                  "A Point of Sale (POS) system is a combination of hardware and software designed to facilitate sales transactions and manage business operations. It typically includes hardware components such as a POS terminal (computer or tablet)..."
                }
              ></ProductCard>
              <div className="w-[2px] bg-black"></div>
              <ProductCard
                whichImg={inv}
                cardTitle={"Inventory Control System"}
                onClick={() => {
                  setProductPaneVisible(true);
                  selectProduct(2);
                }}
                cardText={
                  "A Point of Sale (POS) system is a combination of hardware and software designed to facilitate sales transactions and manage business operations. It typically includes hardware components such as a POS terminal (computer or tablet)..."
                }
              ></ProductCard>
            </div>
          </CCarouselItem>
          <CCarouselItem className="h-full">
            <div className="h-full flex justify-center gap-3">
              <ProductCard
                whichImg={pos}
                cardTitle={"POS System"}
                onClick={() => {
                  setProductPaneVisible(true);
                  selectProduct(0);
                }}
                cardText={
                  "A Point of Sale (POS) system is a combination of hardware and software designed to facilitate sales transactions and manage business operations. It typically includes hardware components such as a POS terminal (computer or tablet)..."
                }
              ></ProductCard>
              <div className="w-[2px] bg-black"></div>
              <ProductCard
                whichImg={lms}
                cardTitle={"LMS System"}
                onClick={() => {
                  setProductPaneVisible(true);
                  selectProduct(1);
                }}
                cardText={
                  "A Point of Sale (POS) system is a combination of hardware and software designed to facilitate sales transactions and manage business operations. It typically includes hardware components such as a POS terminal (computer or tablet)..."
                }
              ></ProductCard>
              <div className="w-[2px] bg-black"></div>
              <ProductCard
                whichImg={inv}
                cardTitle={"Inventory Control System"}
                onClick={() => {
                  setProductPaneVisible(true);
                  selectProduct(2);
                }}
                cardText={
                  "A Point of Sale (POS) system is a combination of hardware and software designed to facilitate sales transactions and manage business operations. It typically includes hardware components such as a POS terminal (computer or tablet)..."
                }
              ></ProductCard>
            </div>
          </CCarouselItem>
          <CCarouselItem className="h-full">
            <div className="h-full flex justify-center gap-3">
              <ProductCard
                whichImg={pos}
                cardTitle={"POS System"}
                onClick={() => {
                  setProductPaneVisible(true);
                  selectProduct(0);
                }}
                cardText={
                  "A Point of Sale (POS) system is a combination of hardware and software designed to facilitate sales transactions and manage business operations. It typically includes hardware components such as a POS terminal (computer or tablet)..."
                }
              ></ProductCard>
              <div className="w-[2px] bg-black"></div>
              <ProductCard
                whichImg={lms}
                cardTitle={"LMS System"}
                onClick={() => {
                  setProductPaneVisible(true);
                  selectProduct(1);
                }}
                cardText={
                  "A Point of Sale (POS) system is a combination of hardware and software designed to facilitate sales transactions and manage business operations. It typically includes hardware components such as a POS terminal (computer or tablet)..."
                }
              ></ProductCard>
              <div className="w-[2px] bg-black"></div>
              <ProductCard
                whichImg={inv}
                cardTitle={"Inventory Control System"}
                onClick={() => {
                  setProductPaneVisible(true);
                  selectProduct(2);
                }}
                cardText={
                  "A Point of Sale (POS) system is a combination of hardware and software designed to facilitate sales transactions and manage business operations. It typically includes hardware components such as a POS terminal (computer or tablet)..."
                }
              ></ProductCard>
            </div>
          </CCarouselItem>
        </CCarousel>
      </div>
      {/*hidden pane for displaying more details*/}
      <div
        className={`flex-col ${
          productPaneVisible === true ? "flex" : "hidden"
        }`}
      >
        {/*product title/text*/}
        <div className="">
          <h5 className="flex justify-between items-center p-3 m-0 text-[#006E8A]">
            {products[selectedProduct][1]}
            <button
              className="w-fit text-red-500 p-1"
              onClick={() => setProductPaneVisible(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-x-circle w-[16px]"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
            </button>
          </h5>
          <p className="md:text-start text-sm p-3 m-0">
            {products[selectedProduct][2]}
          </p>
        </div>
        {/*prod-pane-banner*/}
        <img
          className="object-top object-cover"
          src={products[selectedProduct][3]}
          alt="product-pane-banner"
        ></img>
        {/*feedbacks*/}
        <div className="py-6 flex flex-col justify-center items-center h-[800px] max-md:h-fit">
          <div className="flex w-full h-full">
            <div
              className="w-1/5 bg-cover bg-center"
              style={{ backgroundImage: `url(${feedbackBanner})` }}
            >
              <span className="relative w-full flex justify-end gap-3 pt-6 max-sm:pt-3 pr-6 max-sm:pr-3 max-[375px]:pr-1">
                <h1 className="uppercase text-white text-5xl max-lg:text-3xl max-sm:text-xl max-[425px]:text-lg m-0">
                  Client
                </h1>
              </span>
            </div>
            <div className="w-4/5 h-full overflow-y-scroll no-scrollbar">
              <span className="absolute w-4/5 flex gap-3 pt-6 pl-6 max-sm:pl-3 max-sm:pt-3 max-[375px]:pl-1 bg-white">
                <h1 className="uppercase z-10 text-[#006E8A] text-5xl max-lg:text-3xl max-sm:text-xl max-[425px]:text-lg m-0">
                  Feedback
                </h1>
              </span>
              {/*client feedback list - for md*/}
              <div className="max-md:hidden block">
                <div className="pt-24 max-sm:pt-12">
                  <span className="flex items-center gap-3 px-3">
                    <img
                      className="w-[60px] max-md:w-[30px] aspect-square object-cover"
                      src={products[selectedProduct][4][0][0]}
                      alt="feedback-company"
                    ></img>
                    <h5 className="max-md:text-sm max-sm:text-xs font-semibold m-0">
                      {products[selectedProduct][4][0][1]}
                    </h5>
                    <span className="flex gap-1">
                      {Array.from(
                        { length: products[selectedProduct][4][0][2] },
                        (_, index) => (
                          <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#faca15"
                            className="bi bi-star-fill w-[16px]"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        )
                      )}
                    </span>
                  </span>
                  <p className="text-start p-3 max-md:text-sm max-sm:text-xs">
                    {products[selectedProduct][4][0][3]}
                  </p>
                </div>
                <div className="">
                  <span className="flex items-center gap-3 px-3">
                    <img
                      className="w-[60px] max-md:w-[30px] aspect-square"
                      src={products[selectedProduct][4][1][0]}
                      alt="feedback-company"
                    ></img>
                    <h5 className="max-md:text-sm max-sm:text-xs font-semibold m-0">
                      {products[selectedProduct][4][1][1]}
                    </h5>
                    <span className="flex gap-1">
                      {Array.from(
                        { length: products[selectedProduct][4][1][2] },
                        (_, index) => (
                          <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#faca15"
                            className="bi bi-star-fill w-[16px]"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        )
                      )}
                    </span>
                  </span>
                  <p className="text-start p-3 max-md:text-sm max-sm:text-xs">
                    {products[selectedProduct][4][1][3]}
                  </p>
                </div>
                <div className="">
                  <span className="flex items-center gap-3 px-3">
                    <img
                      className="w-[60px] max-md:w-[30px] aspect-square"
                      src={products[selectedProduct][4][2][0]}
                      alt="feedback-company"
                    ></img>
                    <h5 className="max-md:text-sm max-sm:text-xs font-semibold m-0">
                      {products[selectedProduct][4][2][1]}
                    </h5>
                    <span className="flex gap-1">
                      {Array.from(
                        { length: products[selectedProduct][4][2][2] },
                        (_, index) => (
                          <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#faca15"
                            className="bi bi-star-fill w-[16px]"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        )
                      )}
                    </span>
                  </span>
                  <p className="text-start p-3 max-md:text-sm max-sm:text-xs">
                    {products[selectedProduct][4][2][3]}
                  </p>
                </div>
                <div className="">
                  <span className="flex items-center gap-3 px-3">
                    <img
                      className="w-[60px] max-md:w-[30px] aspect-square"
                      src={products[selectedProduct][4][3][0]}
                      alt="feedback-company"
                    ></img>
                    <h5 className="max-md:text-sm max-sm:text-xs font-semibold m-0">
                      {products[selectedProduct][4][3][1]}
                    </h5>
                    <span className="flex gap-1">
                      {Array.from(
                        { length: products[selectedProduct][4][3][2] },
                        (_, index) => (
                          <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#faca15"
                            className="bi bi-star-fill w-[16px]"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        )
                      )}
                    </span>
                  </span>
                  <p className="text-start p-3 max-md:text-sm max-sm:text-xs">
                    {products[selectedProduct][4][3][3]}
                  </p>
                </div>
              </div>
              {/*client feedback list - for max-md*/}
              <Carousel className="max-md:block h-[100vh] hidden" leftControl={<p className="text-transparent"></p>} rightControl={<p className="text-transparent"></p>} indicators={false}>
                <div className="pt-24 max-sm:pt-12">
                  <span className="flex items-center h-full gap-3 px-3">
                    <img
                      className="w-[60px] max-md:w-[30px] aspect-square object-cover"
                      src={products[selectedProduct][4][0][0]}
                      alt="feedback-company"
                    ></img>
                    <h5 className="max-md:text-sm max-sm:text-xs font-semibold m-0">
                      {products[selectedProduct][4][0][1]}
                    </h5>
                    <span className="flex gap-1">
                      {Array.from(
                        { length: products[selectedProduct][4][0][2] },
                        (_, index) => (
                          <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#faca15"
                            className="bi bi-star-fill w-[16px]"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        )
                      )}
                    </span>
                  </span>
                  <p className="text-start p-3 max-md:text-sm max-sm:text-xs">
                    {products[selectedProduct][4][0][3]}
                  </p>
                </div>
                <div className="pt-24 max-sm:pt-12">
                  <span className="flex items-center gap-3 px-3">
                    <img
                      className="w-[60px] max-md:w-[30px] aspect-square"
                      src={products[selectedProduct][4][1][0]}
                      alt="feedback-company"
                    ></img>
                    <h5 className="max-md:text-sm max-sm:text-xs font-semibold m-0">
                      {products[selectedProduct][4][1][1]}
                    </h5>
                    <span className="flex gap-1">
                      {Array.from(
                        { length: products[selectedProduct][4][1][2] },
                        (_, index) => (
                          <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#faca15"
                            className="bi bi-star-fill w-[16px]"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        )
                      )}
                    </span>
                  </span>
                  <p className="text-start p-3 max-md:text-sm max-sm:text-xs">
                    {products[selectedProduct][4][1][3]}
                  </p>
                </div>
                <div className="pt-24 max-sm:pt-12">
                  <span className="flex items-center gap-3 px-3">
                    <img
                      className="w-[60px] max-md:w-[30px] aspect-square"
                      src={products[selectedProduct][4][2][0]}
                      alt="feedback-company"
                    ></img>
                    <h5 className="max-md:text-sm max-sm:text-xs font-semibold m-0">
                      {products[selectedProduct][4][2][1]}
                    </h5>
                    <span className="flex gap-1">
                      {Array.from(
                        { length: products[selectedProduct][4][2][2] },
                        (_, index) => (
                          <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#faca15"
                            className="bi bi-star-fill w-[16px]"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        )
                      )}
                    </span>
                  </span>
                  <p className="text-start p-3 max-md:text-sm max-sm:text-xs">
                    {products[selectedProduct][4][2][3]}
                  </p>
                </div>
                <div className="pt-24 max-sm:pt-12">
                  <span className="flex items-center gap-3 px-3">
                    <img
                      className="w-[60px] max-md:w-[30px] aspect-square"
                      src={products[selectedProduct][4][3][0]}
                      alt="feedback-company"
                    ></img>
                    <h5 className="max-md:text-sm max-sm:text-xs font-semibold m-0">
                      {products[selectedProduct][4][3][1]}
                    </h5>
                    <span className="flex gap-1">
                      {Array.from(
                        { length: products[selectedProduct][4][3][2] },
                        (_, index) => (
                          <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#faca15"
                            className="bi bi-star-fill w-[16px]"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        )
                      )}
                    </span>
                  </span>
                  <p className="text-start p-3 max-md:text-sm max-sm:text-xs">
                    {products[selectedProduct][4][3][3]}
                  </p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
