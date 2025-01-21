import { Button, Label, Modal, Textarea, TextInput } from "flowbite-react";
import { Carousel } from "flowbite-react";
import { CCarousel } from "@coreui/react";
import { CCarouselItem } from "@coreui/react";
import { useState, useRef } from "react";
import ProductCard from "./components/Product-card";
import StarRating from "./components/StarRating";
import banner from "./images/Products/banner.png";
import pos from "./images/Products/cards/pos.png";
import lms from "./images/Products/cards/lms.png";
import inv from "./images/Products/cards/inv.png";

import royal_havenwood from "./images/AboutUs/partners/royal_havenwood.jpg";
import muthukuda from "./images/AboutUs/partners/muthukuda.jpg";
import itic from "./images/AboutUs/partners/itic.jpg";
import tech_house from "./images/AboutUs/partners/tech_house.jpg";

import prodPaneBanner_1 from "./images/Products/product-pane/banner-1.png";
import prodPaneBanner_2 from "./images/Products/product-pane/banner-2.png";
import prodPaneBanner_3 from "./images/Products/product-pane/banner-3.png";
import camera_icon from "./images/Products/product-pane/camera-icon.png";
import feedbackBanner from "./images/Products/product-pane/feedback-side-banner.png";

function Products() {
  const [productPaneVisible, setProductPaneVisible] = useState(false);
  const [selectedProduct, selectProduct] = useState(0);

  const feedbacks = [
    [
      royal_havenwood,
      "Royal Havenwood Real Estate",
      5,
      "Silicon Radon Networks is a standout IT company known for its innovative solutions, technical expertise, and strong customer focus. The company consistently demonstrates a commitment to delivering cutting-edge network and IT services, meeting client needs with high levels of efficiency and reliability. Their skilled team effectively handles complex challenges, building trust through the timely and high-quality execution of projects. However, there is room for improvement in enhancing communication channels to ensure consistent responsiveness throughout project phases, and expanding their service offerings to support scalability would help meet diverse industry demands. Overall, Silicon Radon Networks’ dedication to excellence and customer-centric approach positions it as a trusted partner in the IT industry.",
    ],
    [
      muthukuda,
      "Muthukuda Constructions",
      5,
      "Silicon Radon Networks is a standout IT company known for its innovative solutions, technical expertise, and strong customer focus. The company consistently demonstrates a commitment to delivering cutting-edge network and IT services, meeting client needs with high levels of efficiency and reliability. Their skilled team effectively handles complex challenges, building trust through the timely and high-quality execution of projects. However, there is room for improvement in enhancing communication channels to ensure consistent responsiveness throughout project phases, and expanding their service offerings to support scalability would help meet diverse industry demands. Overall, Silicon Radon Networks’ dedication to excellence and customer-centric approach positions it as a trusted partner in the IT industry.",
    ],
    [
      itic,
      "ITIC",
      5,
      "Silicon Radon Networks is a standout IT company known for its innovative solutions, technical expertise, and strong customer focus. The company consistently demonstrates a commitment to delivering cutting-edge network and IT services, meeting client needs with high levels of efficiency and reliability. Their skilled team effectively handles complex challenges, building trust through the timely and high-quality execution of projects. However, there is room for improvement in enhancing communication channels to ensure consistent responsiveness throughout project phases, and expanding their service offerings to support scalability would help meet diverse industry demands. Overall, Silicon Radon Networks’ dedication to excellence and customer-centric approach positions it as a trusted partner in the IT industry.",
    ],
    [
      tech_house,
      "Tech House",
      5,
      "Silicon Radon Networks is a standout IT company known for its innovative solutions, technical expertise, and strong customer focus. The company consistently demonstrates a commitment to delivering cutting-edge network and IT services, meeting client needs with high levels of efficiency and reliability. Their skilled team effectively handles complex challenges, building trust through the timely and high-quality execution of projects. However, there is room for improvement in enhancing communication channels to ensure consistent responsiveness throughout project phases, and expanding their service offerings to support scalability would help meet diverse industry demands. Overall, Silicon Radon Networks’ dedication to excellence and customer-centric approach positions it as a trusted partner in the IT industry.",
    ],
  ];

  const products = [
    // [product img, name, desc, client feedback [[client name, no of stars, desc], [client name, no of stars, desc]...]...]
    [
      pos,
      "POS System",
      "A Point of Sale (POS) system is a technology solution that facilitates transactions in retail, hospitality, and other customer-facing industries. At its core, it combines hardware (such as cash registers, barcode scanners, and receipt printers) with software to process sales, manage payments, and track customer purchases. Modern POS systems go beyond simple sales processing, offering inventory tracking, employee management, customer relationship management (CRM), and detailed analytics for business growth. POS systems streamline checkout processes, reducing human error and improving customer satisfaction. Integrated with payment gateways, they enable seamless handling of multiple payment methods, such as cash, credit cards, and digital wallets. By analyzing sales data, POS systems help businesses identify trends, track product performance, and optimize stock levels. Cloud-based POS solutions further enhance accessibility by enabling real-time monitoring and reporting across multiple locations. Whether for small businesses or large enterprises, a POS system is an essential tool for efficient operations and informed decision-making.",
      prodPaneBanner_1,
      feedbacks,
    ],
    [
      lms,
      "LMS System",
      "A Learning Management System (LMS) is a digital platform designed to deliver, manage, and assess educational or training content. LMS solutions are widely used in schools, universities, and businesses for e-learning and employee training programs. These systems centralize course materials, such as videos, documents, quizzes, and discussion forums, enabling learners to access content anytime and from anywhere. Administrators can track progress, measure engagement, and evaluate the effectiveness of courses using built-in analytics and reporting tools. For educators and trainers, LMS platforms simplify course creation, customization, and scheduling, often supporting gamification, certification, and social learning features. Learners benefit from interactive and self-paced modules, fostering greater retention and motivation. Cloud-based LMS solutions also integrate with other tools, such as video conferencing and collaboration platforms, enhancing the overall learning experience. By bridging gaps between learners and instructors, LMS systems promote accessibility, scalability, and lifelong learning.",
      prodPaneBanner_2,
      feedbacks,
    ],
    [
      inv,
      "Inventory Control System",
      "An Inventory Management System (IMS) is a software solution designed to track, control, and optimize the storage and flow of goods within a business. It ensures that stock levels are accurately monitored, minimizing overstocking or shortages that could disrupt operations or customer satisfaction. IMS tools automate processes such as inventory tracking, order management, restocking alerts, and reporting, improving efficiency across supply chains. Modern inventory systems integrate with barcode scanners, RFID technology, and point-of-sale systems, enabling real-time updates and streamlined inventory audits. For businesses with large-scale operations, advanced IMS platforms incorporate predictive analytics and demand forecasting to align inventory levels with market trends. Cloud-based solutions offer centralized management across multiple locations, allowing businesses to monitor stock status remotely. From small retailers to large warehouses, an Inventory Management System is indispensable for reducing costs, improving productivity, and maintaining customer satisfaction.",
      prodPaneBanner_3,
      feedbacks,
    ],
  ];

  const feedbackEnd = useRef(null); // reference of 'feedback' right side div

  const scrollDown = () => {
    // scroll to end of the 'feedback-scrollable' div
    document.getElementById("feedback-scrollable").scrollTo({
      top: feedbackEnd.current.offsetTop,
      behavior: "smooth",
    });
  };

  const [openModal, setOpenModal] = useState(false); // for toggling modal

  const [rating, setRating] = useState(0); // number of stars given by user

  const handleRatingChange = (newRating) => {
    setRating(newRating); // Capture the rating from StarRating
  };

  return (
    <div className="">
      {/*banner*/}
      <div
        className="h-[45%] max-lg:h-[50%] bg-no-repeat bg-cover flex flex-col justify-center text-start text-white"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="flex flex-col gap-3 py-24">
          <h1 className="pl-12 m-0 text-5xl font-thin max-md:pl-0 tiro-bangla max-xl:text-4xl max-md:text-3xl max-sm:text-2xl max-md:text-center">
            Our Products
          </h1>
          <p className="px-12 m-0 max-md:px-6 max-md:text-sm max-md:text-center max-sm:text-xs">
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
      {/*product cards*/}
      <div
        className={`h-[55%] max-lg:h-[50%] py-12 flex justify-center items-center ${
          productPaneVisible === true ? "hidden" : "flex"
        }`}
      >
        {/*max-lg -> one card per slide*/}
        <CCarousel
          dark
          className="items-center justify-center hidden w-full max-lg:flex"
        >
          <CCarouselItem className="">
            <div className="flex justify-center h-full">
              <ProductCard
                whichImg={pos}
                cardTitle={"POS System"}
                onClick={() => {
                  setProductPaneVisible(true);
                  selectProduct(0);
                }}
                cardText={
                  "A Point of Sale (POS) system is a technology solution that facilitates transactions in retail, hospitality, and other customer-facing industries. At its core, it combines hardware (such as cash registers, barcode scanners, and rec..."
                }
              ></ProductCard>
            </div>
          </CCarouselItem>
          <CCarouselItem className="">
            <div className="flex justify-center h-full">
              <ProductCard
                whichImg={lms}
                cardTitle={"LMS System"}
                onClick={() => {
                  setProductPaneVisible(true);
                  selectProduct(1);
                }}
                cardText={
                  "A Learning Management System (LMS) is a digital platform designed to deliver, manage, and assess educational or training content. LMS solutions are widely used in schools, universities, and businesses for e-learning and employee t..."
                }
              ></ProductCard>
            </div>
          </CCarouselItem>
          <CCarouselItem className="">
            <div className="flex justify-center h-full">
              <ProductCard
                whichImg={inv}
                cardTitle={"Inventory Control System"}
                onClick={() => {
                  setProductPaneVisible(true);
                  selectProduct(2);
                }}
                cardText={
                  "An Inventory Management System (IMS) is a software solution designed to track, control, and optimize the storage and flow of goods within a business. It ensures that stock levels are accurately monitored, minimizing overstocking o..."
                }
              ></ProductCard>
            </div>
          </CCarouselItem>
        </CCarousel>
        {/*else -> three cards per slide*/}
        <CCarousel
          indicators
          dark
          className="flex items-center justify-center w-5/6 h-full mt-3 max-lg:hidden"
        >
          <CCarouselItem className="h-full">
            <div className="flex justify-center h-full gap-4 mb-5">
              <ProductCard
                whichImg={pos}
                cardTitle={"POS System"}
                onClick={() => {
                  setProductPaneVisible(true);
                  selectProduct(0);
                }}
                cardText={
                  "A Point of Sale (POS) system is a technology solution that facilitates transactions in retail, hospitality, and other customer-facing industries. At its core, it combines hardware (such as cash registers, barcode scanners, and rec..."
                }
              ></ProductCard>
              <div className="w-[1px] bg-black"></div>
              <ProductCard
                whichImg={lms}
                cardTitle={"LMS System"}
                onClick={() => {
                  setProductPaneVisible(true);
                  selectProduct(1);
                }}
                cardText={
                  "A Learning Management System (LMS) is a digital platform designed to deliver, manage, and assess educational or training content. LMS solutions are widely used in schools, universities, and businesses for e-learning and employee t..."
                }
              ></ProductCard>
              <div className="w-[1px] bg-black"></div>
              <ProductCard
                whichImg={inv}
                cardTitle={"Inventory Control System"}
                onClick={() => {
                  setProductPaneVisible(true);
                  selectProduct(2);
                }}
                cardText={
                  "An Inventory Management System (IMS) is a software solution designed to track, control, and optimize the storage and flow of goods within a business. It ensures that stock levels are accurately monitored, minimizing overstocking o..."
                }
              ></ProductCard>
            </div>
          </CCarouselItem>
          <CCarouselItem className="h-full">
            <div className="flex justify-center h-full gap-4 mb-5">
              <ProductCard
                whichImg={pos}
                cardTitle={"POS System"}
                onClick={() => {
                  setProductPaneVisible(true);
                  selectProduct(0);
                }}
                cardText={
                  "A Point of Sale (POS) system is a technology solution that facilitates transactions in retail, hospitality, and other customer-facing industries. At its core, it combines hardware (such as cash registers, barcode scanners, and rec..."
                }
              ></ProductCard>
              <div className="w-[1px] bg-black"></div>
              <ProductCard
                whichImg={lms}
                cardTitle={"LMS System"}
                onClick={() => {
                  setProductPaneVisible(true);
                  selectProduct(1);
                }}
                cardText={
                  "A Learning Management System (LMS) is a digital platform designed to deliver, manage, and assess educational or training content. LMS solutions are widely used in schools, universities, and businesses for e-learning and employee t..."
                }
              ></ProductCard>
              <div className="w-[1px] bg-black"></div>
              <ProductCard
                whichImg={inv}
                cardTitle={"Inventory Control System"}
                onClick={() => {
                  setProductPaneVisible(true);
                  selectProduct(2);
                }}
                cardText={
                  "An Inventory Management System (IMS) is a software solution designed to track, control, and optimize the storage and flow of goods within a business. It ensures that stock levels are accurately monitored, minimizing overstocking o..."
                }
              ></ProductCard>
            </div>
          </CCarouselItem>
          <CCarouselItem className="h-full">
            <div className="flex justify-center h-full gap-4 mb-5">
              <ProductCard
                whichImg={pos}
                cardTitle={"POS System"}
                onClick={() => {
                  setProductPaneVisible(true);
                  selectProduct(0);
                }}
                cardText={
                  "A Point of Sale (POS) system is a technology solution that facilitates transactions in retail, hospitality, and other customer-facing industries. At its core, it combines hardware (such as cash registers, barcode scanners, and rec..."
                }
              ></ProductCard>
              <div className="w-[1px] bg-black"></div>
              <ProductCard
                whichImg={lms}
                cardTitle={"LMS System"}
                onClick={() => {
                  setProductPaneVisible(true);
                  selectProduct(1);
                }}
                cardText={
                  "A Learning Management System (LMS) is a digital platform designed to deliver, manage, and assess educational or training content. LMS solutions are widely used in schools, universities, and businesses for e-learning and employee t..."
                }
              ></ProductCard>
              <div className="w-[1px] bg-black"></div>
              <ProductCard
                whichImg={inv}
                cardTitle={"Inventory Control System"}
                onClick={() => {
                  setProductPaneVisible(true);
                  selectProduct(2);
                }}
                cardText={
                  "An Inventory Management System (IMS) is a software solution designed to track, control, and optimize the storage and flow of goods within a business. It ensures that stock levels are accurately monitored, minimizing overstocking o..."
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
        {/*product title, text*/}
        <div className="">
          <h5 className="flex justify-between items-center p-3 m-0 text-[#006E8A]">
            {products[selectedProduct][1]}
            <button
              className="p-1 text-red-500 w-fit"
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
          <p className="p-3 m-0 text-sm md:text-start">
            {products[selectedProduct][2]}
          </p>
        </div>
        {/*prod-pane-banner (left side with thumbs up image)*/}
        <img
          className="object-cover object-top"
          src={products[selectedProduct][3]}
          alt="product-pane-banner"
        ></img>
        {/*feedbacks (list with stars)*/}
        <div className="py-6 flex flex-col justify-center items-center h-[800px]">
          <div className="flex w-full h-full">
            <div
              className="w-1/5 bg-center bg-cover"
              style={{ backgroundImage: `url(${feedbackBanner})` }}
            >
              <span className="relative w-full flex justify-end gap-3 pt-6 max-sm:pt-3 pr-6 max-sm:pr-3 max-[375px]:pr-1">
                <h1 className="uppercase text-white text-5xl max-lg:text-3xl max-sm:text-xl max-[425px]:text-lg m-0">
                  Client
                </h1>
              </span>
            </div>
            <div
              id="feedback-scrollable"
              className="w-4/5 h-full overflow-y-scroll no-scrollbar"
            >
              <span className="absolute w-4/5 flex gap-3 pt-6 pl-6 max-sm:pl-3 max-sm:pt-3 max-[375px]:pl-1 bg-white">
                <h1 className="uppercase z-10 text-[#006E8A] text-5xl max-lg:text-3xl max-sm:text-xl max-[425px]:text-lg m-0">
                  Feedback
                </h1>
              </span>
              {/*client feedback list - for md*/}
              <div className="block max-md:hidden">
                <div className="pt-24 max-sm:pt-12">
                  <span className="flex items-center gap-3 px-3">
                    <img
                      className="w-[60px] max-md:w-[30px] aspect-square object-cover"
                      src={products[selectedProduct][4][0][0]}
                      alt="feedback-company"
                    ></img>
                    <h5 className="m-0 font-semibold max-md:text-sm max-sm:text-xs">
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
                  <p className="p-3 text-start max-md:text-sm max-sm:text-xs">
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
                    <h5 className="m-0 font-semibold max-md:text-sm max-sm:text-xs">
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
                  <p className="p-3 text-start max-md:text-sm max-sm:text-xs">
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
                    <h5 className="m-0 font-semibold max-md:text-sm max-sm:text-xs">
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
                  <p className="p-3 text-start max-md:text-sm max-sm:text-xs">
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
                    <h5 className="m-0 font-semibold max-md:text-sm max-sm:text-xs">
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
                  <p className="p-3 text-start max-md:text-sm max-sm:text-xs">
                    {products[selectedProduct][4][3][3]}
                  </p>
                </div>
                <div className="sticky flex items-center bottom-5 justify-evenly">
                  <button
                    onClick={scrollDown}
                    className="bg-white border-2 border-black rounded-full"
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
                  <button
                    onClick={() => setOpenModal(true)}
                    className="absolute px-1 text-sm bg-white border-2 border-black rounded-full right-5"
                  >
                    Add your feedback
                  </button>
                </div>
              </div>
              {/*client feedback list - for max-md*/}
              <div className="max-md:block md:hidden">
                <Carousel
                  className="max-md:h-[600px] w-full"
                  leftControl={<p className="text-transparent">left</p>}
                  rightControl={<p className="text-transparent">right</p>}
                >
                  {/*feedback items*/}
                  <div className="pt-24 h-[600px] flex flex-col justify-center max-sm:pt-12">
                    <span className="flex items-center gap-3 px-3">
                      <img
                        className="w-[60px] max-md:w-[30px] aspect-square"
                        src={products[selectedProduct][4][0][0]}
                        alt="feedback-company"
                      ></img>
                      <h5 className="m-0 font-semibold max-md:text-sm max-sm:text-xs">
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
                    <p className="p-3 text-start max-md:text-sm max-sm:text-xs">
                      {products[selectedProduct][4][0][3]}
                    </p>
                  </div>
                  <div className="pt-24 h-[600px] flex flex-col justify-center max-sm:pt-12">
                    <span className="flex items-center gap-3 px-3">
                      <img
                        className="w-[60px] max-md:w-[30px] aspect-square"
                        src={products[selectedProduct][4][1][0]}
                        alt="feedback-company"
                      ></img>
                      <h5 className="m-0 font-semibold max-md:text-sm max-sm:text-xs">
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
                    <p className="p-3 text-start max-md:text-sm max-sm:text-xs">
                      {products[selectedProduct][4][1][3]}
                    </p>
                  </div>
                  <div className="pt-24 h-[600px] flex flex-col justify-center max-sm:pt-12">
                    <span className="flex items-center gap-3 px-3">
                      <img
                        className="w-[60px] max-md:w-[30px] aspect-square"
                        src={products[selectedProduct][4][2][0]}
                        alt="feedback-company"
                      ></img>
                      <h5 className="m-0 font-semibold max-md:text-sm max-sm:text-xs">
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
                    <p className="p-3 text-start max-md:text-sm max-sm:text-xs">
                      {products[selectedProduct][4][2][3]}
                    </p>
                  </div>
                  <div className="pt-24 h-[600px] flex flex-col justify-center max-sm:pt-12">
                    <span className="flex items-center gap-3 px-3">
                      <img
                        className="w-[60px] max-md:w-[30px] aspect-square"
                        src={products[selectedProduct][4][3][0]}
                        alt="feedback-company"
                      ></img>
                      <h5 className="m-0 font-semibold max-md:text-sm max-sm:text-xs">
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
                    <p className="p-3 text-start max-md:text-sm max-sm:text-xs">
                      {products[selectedProduct][4][3][3]}
                    </p>
                  </div>
                </Carousel>
                <button
                  onClick={() => setOpenModal(true)}
                  className="px-1 text-sm bg-white border-2 border-black rounded-full md:hidden"
                >
                  Add your feedback
                </button>
              </div>
              <span className="h-0 m-0 max-md:hidden" ref={feedbackEnd}></span>
            </div>
          </div>
        </div>
      </div>
      {/*modal for adding feedbacks*/}
      <Modal
        position="center"
        show={openModal}
        size="md"
        popup
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <input
                type="file"
                className="hidden"
                name="img-selecter"
                id="img-selecter"
              ></input>
              <label
                htmlFor="img-selecter"
                className="cursor-pointer w-[50px] aspect-square rounded-full bg-[#006E8A17] flex justify-center items-center"
              >
                <img
                  className="w-[32px] mb-1"
                  src={camera_icon}
                  alt="company-logo"
                ></img>
              </label>
              <div className="block">
                <Label htmlFor="img-selecter" value="Your company logo" />
              </div>
            </div>
            <div>
              <div className="block mb-2">
                <Label htmlFor="name" value="Your company name" />
              </div>
              <TextInput id="name" type="name" required />
            </div>
            <div>
              <div className="block mb-2">
                <Label htmlFor="feedback" value="Your feedback" />
              </div>
              <Textarea rows={5} id="feedback" type="feedback" required />
            </div>
            <div>
              <div className="flex items-center justify-end gap-2">
                <StarRating onRatingChange={handleRatingChange} />
                <p className="hidden">{rating}</p>
              </div>
            </div>
            <div className="flex justify-center w-full">
              <Button>Submit</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Products;
