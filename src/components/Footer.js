import footer_logo from "../images/footer-logo.png";
import msc from "../images/footer-icons/mastercard.png";
import vsc from "../images/footer-icons/visa.png";
import { Link } from "wouter";

function Footer() {
  return (
    <footer className="flex flex-col gap-6 bg-[#006E8A12] h-fit px-24 py-12 max-xl:px-16 max-sm:p-6">
      {/*up*/}
      <div className="flex items-center max-lg:flex-col">
        <div className="w-2/5 flex flex-col gap-6 max-lg:w-full">
          <img src={footer_logo} className="w-fit" alt={"footer logo"}></img>
          <p className="text-sm text-start text-[#023744]">
            Welcome to Silicon Radon Networks, where cutting-edge software
            solutions meet unparallelad innovation. Our dedicated team of
            experts is committed to delivering robust, scalable, and
            user-friendly applications tailored to your business needs. Whether
            you're a startup or an established enterprise, we provide the
            technology to drive your success. Partner with us and experience the
            future of software development today.
          </p>
        </div>
        <div className="w-3/5 flex gap-6 pl-12 py-6 max-lg:p-0 max-lg:w-full max-lg:flex-col">
          <div className="w-2/5 flex gap-6 max-lg:px-12 max-lg:w-full">
            <div className="w-1/2">
              <ul className="flex flex-col gap-6">
                <li className="text-start cursor-pointer">
                  <Link className="no-underline text-[#023744]" href="/">Home</Link>
                </li>
                <li className="text-start cursor-pointer">
                  <Link className="no-underline text-[#023744]" href="/careers">Careers</Link>
                </li>
                <li className="text-start cursor-pointer">
                  <Link className="no-underline text-[#023744]" href="/products">Products</Link>
                </li>
                <li className="text-start cursor-pointer">
                  <Link className="no-underline text-[#023744]" href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="w-1/2">
              <ul className="flex flex-col gap-6">
                <li className="text-start cursor-pointer">
                  <Link className="no-underline text-[#023744]" href="/company">Company</Link>
                </li>
                <li className="text-start cursor-pointer">
                  <Link className="no-underline text-[#023744]" href="/news">News & Events</Link>
                </li>
                <li className="text-start cursor-pointer">
                  <Link className="no-underline text-[#023744]" href="/partners">Partners</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-3/5 max-lg:w-full">
            <ul className="flex flex-col gap-6">
              <li className="text-start font-semibold">
                Contact Us
              </li>
              <li className="text-start cursor-pointer flex items-center gap-3">
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
                <a
                  href="tel:+94777472567"
                  className="text-[#023744] no-underline max-xl:text-sm max-lg:text-xs"
                >
                  +94 77 747 2567
                </a>
              </li>
              <li className="text-start cursor-pointer flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-envelope w-[16px]"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
                <a
                  href="mailto:support@siliconradonnetworks.com"
                  className="text-[#023744] no-underline max-xl:text-sm max-lg:text-xs"
                >
                  support@siliconradonnetworks.com
                </a>
              </li>
              <li className="text-start cursor-pointer flex items-center gap-3 max-xl:text-sm max-lg:text-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-geo-alt w-[16px]"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
                Colombo, Sri Lanka
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*down*/}
      <div className="border-t-2 border-[#023744] h-full flex justify-between items-center pt-12 max-lg:flex-col-reverse max-lg:gap-12">
        <p className="text-xs text-[#023744]">
          Copyright © 2024 -Silicon Radon Networks (Pvt) Ltd - All Rights
          Reserved.
        </p>
        <div className="flex items-center gap-6">
          <img src={msc} alt="mastercard"></img>
          <img src={vsc} alt="visa"></img>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
