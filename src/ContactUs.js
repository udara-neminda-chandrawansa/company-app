import banner from "./images/ContactUs/banner.png";
import { useState } from "react";
import TextTypingAnimation from "./components/TextTypingAnimation";

function ContactUs() {
  const [selectedBranch, setBranch] = useState("Gampaha");

  return (
    <div>
      <div
        className="h-[100vh] bg-no-repeat bg-cover flex flex-col justify-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="bg-[#006E8AB2] h-2/3 flex">
          <div className="flex flex-col w-1/2 text-start text-white p-12">
            <h1 className="font-light">Contact Us</h1>
            <p className="text-2xl font-light" style={{ lineHeight: "50px" }}>
              Reach out to Silicon Radon Networks for any inquiries about our IT
              solutions, network services, or support needs. Our team is ready
              to assist you with expert advice and tailored solutions to elevate
              your business. Get in touch via phone, email, or by filling out
              the form below – we look forward to connecting!
            </p>
          </div>
          <div className="w-1/2 p-12">
            <div className="bg-[#FFFFFF66] h-full w-full rounded-md p-6 flex flex-col gap-3">
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
                className="flex flex-grow p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-black focus:border-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black "
                placeholder="Enter Your Message"
              ></textarea>
              <span className="w-full flex justify-end">
                <button
                  type="button"
                  className="w-fit text-black bg-white hover:bg-black focus:ring-1 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-2.5 py-2.5 text-center inline-flex items-center gap-6"
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
      <div className="h-[100vh] p-12 gap-12 flex flex-col">
        <div className="bg-[#006E8A] h-[100px] max-md:h-fit max-md:py-3 w-full flex items-center rounded-lg">
          <ul className="uppercase text-white flex w-full justify-between px-12 m-0 max-md:p-0 max-sm:text-xs">
            <li
              id="gam-b-clickable"
              className={`branch-clickable cursor-pointer max-md:p-1 max-[350px]:p-0 ${
                selectedBranch === "Gampaha" ? "opacity-100" : "opacity-50"
              }`}
              onClick={() => setBranch("Gampaha")}
            >
              Gampaha Branch
            </li>
            <li
              id="col-b-clickable"
              className={`branch-clickable cursor-pointer max-md:p-1 max-[350px]:p-0 ${
                selectedBranch === "Colombo" ? "opacity-100" : "opacity-50"
              }`}
              onClick={() => setBranch("Colombo")}
            >
              Colombo Branch
            </li>
            <li
              id="anu-b-clickable"
              className={`branch-clickable cursor-pointer max-md:p-1 max-[350px]:p-0 ${
                selectedBranch === "Anuradhapura" ? "opacity-100" : "opacity-50"
              }`}
              onClick={() => setBranch("Anuradhapura")}
            >
              Anuradhapura Branch
            </li>
            <li
              id="kan-b-clickable"
              className={`branch-clickable cursor-pointer max-md:p-1 max-[350px]:p-0 ${
                selectedBranch === "Kandy" ? "opacity-100" : "opacity-50"
              }`}
              onClick={() => setBranch("Kandy")}
            >
              Kandy Branch
            </li>
          </ul>
        </div>
        <div className="flex h-full">
          <div className="w-1/3 h-full">
            <ul className="flex flex-col justify-between h-full m-0">
              <li className="flex flex-col items-center gap-3 justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-clock w-[40px] text-[#006E8A]"
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
              <li className="flex flex-col items-center gap-3 justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-telephone-fill w-[40px] text-[#006E8A]"
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
              <li className="flex flex-col items-center gap-3 justify-center transition-all delay-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-signpost-split-fill w-[40px] text-[#006E8A]"
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
              <li className="flex flex-col items-center gap-3 justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-envelope w-[40px] text-[#006E8A]"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
                siliconradonnetworks@gmail.com
              </li>
            </ul>
          </div>
          <div className="w-2/3 h-full">
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
