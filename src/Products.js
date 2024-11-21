import { CCarousel } from "@coreui/react";
import { CCarouselItem } from "@coreui/react";
import ProductCard from "./components/Product-card";
import banner from "./images/Products/banner.png";
import pos from "./images/Products/cards/pos.png";
import lms from "./images/Products/cards/lms.png";
import inv from "./images/Products/cards/inv.png";

function Products() {
  return (
    <div className="h-[100vh]">
      <div
        className="h-2/5 max-lg:h-1/2 bg-no-repeat bg-cover flex flex-col justify-center text-start text-white"
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
      <div className="h-3/5 max-lg:h-1/2 flex justify-center items-center">
        {/*max-lg -> one card per slide*/}
        <CCarousel
          dark
          className="hidden max-lg:flex w-full h-full justify-center items-center"
        >
          <CCarouselItem className="">
            <div className="h-full flex justify-center">
              <ProductCard
                whichImg={pos}
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
                cardText={
                  "A Point of Sale (POS) system is a combination of hardware and software designed to facilitate sales transactions and manage business operations. It typically includes hardware components such as a POS terminal (computer or tablet)..."
                }
              ></ProductCard>
              <ProductCard
                whichImg={lms}
                cardText={
                  "A Point of Sale (POS) system is a combination of hardware and software designed to facilitate sales transactions and manage business operations. It typically includes hardware components such as a POS terminal (computer or tablet)..."
                }
              ></ProductCard>
              <ProductCard
                whichImg={inv}
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
                cardText={
                  "A Point of Sale (POS) system is a combination of hardware and software designed to facilitate sales transactions and manage business operations. It typically includes hardware components such as a POS terminal (computer or tablet)..."
                }
              ></ProductCard>
              <ProductCard
                whichImg={lms}
                cardText={
                  "A Point of Sale (POS) system is a combination of hardware and software designed to facilitate sales transactions and manage business operations. It typically includes hardware components such as a POS terminal (computer or tablet)..."
                }
              ></ProductCard>
              <ProductCard
                whichImg={inv}
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
                cardText={
                  "A Point of Sale (POS) system is a combination of hardware and software designed to facilitate sales transactions and manage business operations. It typically includes hardware components such as a POS terminal (computer or tablet)..."
                }
              ></ProductCard>
              <ProductCard
                whichImg={lms}
                cardText={
                  "A Point of Sale (POS) system is a combination of hardware and software designed to facilitate sales transactions and manage business operations. It typically includes hardware components such as a POS terminal (computer or tablet)..."
                }
              ></ProductCard>
              <ProductCard
                whichImg={inv}
                cardText={
                  "A Point of Sale (POS) system is a combination of hardware and software designed to facilitate sales transactions and manage business operations. It typically includes hardware components such as a POS terminal (computer or tablet)..."
                }
              ></ProductCard>
            </div>
          </CCarouselItem>
        </CCarousel>
      </div>
    </div>
  );
}

export default Products;
