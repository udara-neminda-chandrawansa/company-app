import banner from "./images/ContactUs/banner.png";
import { useState, useEffect } from "react";
import { Carousel } from "flowbite-react";
import AnimatedWrapper from "./components/AnimatedWrapper.tsx";
import TextTypingAnimation from "./components/TextTypingAnimation";

function ContactUs() {
  const [selectedBranch, setBranch] = useState("Gampaha");
  const branches = ["Gampaha", "Colombo", "Anuradhapura", "Kandy"]; // for branch carousel
  const [currentIndex, setCurrentIndex] = useState(0); // for branch carousel

  const setBranchByIndex = (index) => {
    // for branch carousel
    setCurrentIndex(index);
    setBranch(branches[index]);
  };

  useEffect(() => {
    // Add the 'dark' class to the root element on page load
    document.documentElement.classList.add("dark");

    // Cleanup function (optional, for any dark mode-specific cleanup)
    return () => {
      document.documentElement.classList.remove("dark");
    };
  }, []);

  return (
    <div>
      <AnimatedWrapper>
        <div
          className="h-[100vh] bg-no-repeat bg-cover flex flex-col justify-center"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="bg-[#006E8AB2] max-md:bg-[#408DA1B5] h-2/3 flex max-md:flex-col max-md:h-full">
            <div className="flex flex-col w-1/2 text-start text-white p-12 max-md:pt-24 max-sm:px-6 max-md:w-full max-md:py-0">
              <h1 className="font-light">Contact Us</h1>
              <p className="text-2xl max-lg:text-xl max-sm:text-base font-light line-height-40">
                Reach out to Silicon Radon Networks for any inquiries about our
                IT solutions, network services, or support needs. Our team is
                ready to assist you with expert advice and tailored solutions to
                elevate your business. Get in touch via phone, email, or by
                filling out the form below – we look forward to connecting!
              </p>
            </div>
            <div className="w-1/2 p-12 max-md:w-full max-sm:p-0 max-md:h-full">
              <div className="bg-[#FFFFFF66] max-md:bg-transparent h-full w-full rounded-md p-6 flex flex-col gap-3">
                <div className="relative z-0">
                  <input
                    type="text"
                    id="name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-black peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="name"
                    className="absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Enter Your Name
                  </label>
                </div>
                <div className="relative z-0">
                  <input
                    type="email"
                    id="email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-black peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Enter Your Email
                  </label>
                </div>
                <textarea
                  id="message"
                  className="flex flex-grow p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-black focus:border-black"
                  placeholder="Enter Your Message"
                ></textarea>
                <span className="w-full flex justify-end">
                  <button
                    type="button"
                    className="w-fit max-sm:w-full max-sm:justify-center text-black bg-white hover:bg-black focus:ring-1 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-2.5 py-2.5 text-center inline-flex items-center gap-6"
                  >
                    Send
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-send w-[16px] h-[16px]"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                    </svg>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedWrapper>
      <div className="h-[100vh] p-12 gap-12 flex flex-col max-md:p-6 max-md:gap-6">
        <div className="bg-[#006E8A] h-[100px] max-md:h-fit max-md:py-3 w-full flex items-center rounded-lg">
          {/*only shown on md*/}
          <ul className="uppercase text-white flex w-full justify-between px-12 m-0 max-md:p-0 max-lg:text-sm max-md:hidden">
            {branches.map((branch, index) => (
              <li
                key={branch}
                className={`cursor-pointer ${
                  selectedBranch === branch ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => setBranchByIndex(index, "done by normal")}
              >
                {branch} Branch
              </li>
            ))}
          </ul>
          {/*only shown on max-md*/}
          <Carousel
            className="text-white h-[50px] hidden max-md:block pointer-events-none"
            indicators={false}
            slide={false}
            aria-current={currentIndex} // Explicitly set the current index
            leftControl={
              <span
                className="pointer-events-auto"
                onClick={() =>
                  setBranchByIndex(
                    (currentIndex - 1 + branches.length) % branches.length
                  )
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-arrow-left-circle-fill w-[32px]"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                </svg>
              </span>
            }
            rightControl={
              <span
                className="pointer-events-auto"
                onClick={() =>
                  setBranchByIndex((currentIndex + 1) % branches.length)
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-arrow-right-circle-fill w-[32px]"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                </svg>
              </span>
            }
          >
            {branches.map((branch, index) => (
              <div
                key={branch}
                className={
                  index === currentIndex ? "text-white" : "text-gray-400"
                }
              >
                {branch}
              </div>
            ))}
          </Carousel>
        </div>
        <div className="flex h-full max-md:flex-col-reverse max-md:gap-12">
          {/*details*/}
          <div className="w-1/3 h-full max-md:w-full max-md:h-1/3">
            <ul className="flex flex-col justify-between h-full m-0 max-lg:text-sm max-md:text-xs max-md:text-start">
              <li className="flex md:flex-col items-center gap-3 justify-center max-md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-clock w-[40px] max-md:w-[20px] text-[#006E8A]"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                </svg>
                {selectedBranch === "Gampaha" ? (
                  <TextTypingAnimation
                    key={selectedBranch}
                    text="Open At 9.00 am to 4.00 pm"
                  />
                ) : selectedBranch === "Colombo" ? (
                  <TextTypingAnimation
                    key={selectedBranch}
                    text="Open At 9.30 am to 4.30 pm"
                  />
                ) : selectedBranch === "Anuradhapura" ? (
                  <TextTypingAnimation
                    key={selectedBranch}
                    text="Open At 8.00 am to 3.00 pm"
                  />
                ) : (
                  <TextTypingAnimation
                    key={selectedBranch}
                    text="Open At 8.30 am to 3.30 pm"
                  />
                )}
              </li>
              <li className="flex md:flex-col items-center gap-3 justify-center max-md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-telephone-fill w-[40px] max-md:w-[20px] text-[#006E8A]"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                  />
                </svg>
                {selectedBranch === "Gampaha" ? (
                  <TextTypingAnimation
                    key={selectedBranch}
                    text="033 22 31 456"
                  />
                ) : selectedBranch === "Colombo" ? (
                  <TextTypingAnimation
                    key={selectedBranch}
                    text="011 32 22 345"
                  />
                ) : selectedBranch === "Anuradhapura" ? (
                  <TextTypingAnimation
                    key={selectedBranch}
                    text="022 44 52 432"
                  />
                ) : (
                  <TextTypingAnimation
                    key={selectedBranch}
                    text="044 12 32 365"
                  />
                )}
              </li>
              <li className="flex md:flex-col items-center gap-3 justify-center max-md:justify-start transition-all delay-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-signpost-split-fill w-[40px] max-md:w-[20px] text-[#006E8A]"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 16h2V6h5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.8 2.4A1 1 0 0 0 14 2H9v-.586a1 1 0 0 0-2 0V7H2a1 1 0 0 0-.8.4L.225 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4h5z" />
                </svg>

                {selectedBranch === "Gampaha" ? (
                  <TextTypingAnimation
                    key={selectedBranch}
                    text="0201 / P Kandy Road ,Yakkala, Gampaha"
                  />
                ) : selectedBranch === "Colombo" ? (
                  <TextTypingAnimation
                    key={selectedBranch}
                    text="65 / A De Fonseka Road, Bambalapitiya"
                  />
                ) : selectedBranch === "Anuradhapura" ? (
                  <TextTypingAnimation
                    key={selectedBranch}
                    text="45 Kala Wewa Road, Anuradhapura"
                  />
                ) : (
                  <TextTypingAnimation
                    key={selectedBranch}
                    text="65 / B Temple Road, Kandy"
                  />
                )}
              </li>
              <li className="flex md:flex-col items-center gap-3 justify-center max-md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-envelope w-[40px] max-md:w-[20px] text-[#006E8A]"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
                siliconradonnetworks@gmail.com
              </li>
            </ul>
          </div>
          {/*map*/}
          <div className="w-2/3 h-full max-md:w-full max-md:h-2/3">
            <div className="w-full h-full">
              <iframe
                title="g-maps"
                className="w-full h-full"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=0201%20/%20P%20Kandy%20Road%20,Yakkala,%20Gampaha+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.gps.ie/">gps devices</a>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
