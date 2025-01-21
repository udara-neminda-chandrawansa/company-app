import { Modal } from "flowbite-react";
import { useState } from "react";
import { Link } from "wouter";

function Nav() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="h-[50px] bg-[#000000A6] max-[940px]:bg-transparent z-50 max-[940px]:h-full">
      {/*normal nav*/}
      <div className="flex justify-between w-full px-10 h-[50px] max-[940px]:hidden">
        <ul className="flex items-center justify-start w-1/3 h-full">
          <Link href="/" className="text-white no-underline">
            <li className="flex items-center justify-center dark:text-black text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              Home
            </li>
          </Link>
          <Link
            href="/products"
            className="text-white no-underline"
          >
            <li className="flex items-center justify-center dark:text-black text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              Products
            </li>
          </Link>
          <Link
            href="/partners"
            className="text-white no-underline"
          >
            <li className="flex items-center justify-center dark:text-black text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              Partners
            </li>
          </Link>
        </ul>
        <ul className="flex items-center justify-end w-1/3 h-full">
          <Link
            href="/contact"
            className="text-white no-underline"
          >
            <li className="flex items-center justify-center dark:text-black text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              Contact Us
            </li>
          </Link>
          <Link
            href="/aboutus"
            className="text-white no-underline"
          >
            <li className="flex items-center justify-center dark:text-black text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              About Us
            </li>
          </Link>
          <Link
            href="/news"
            className="text-white no-underline"
          >
            <li className="flex items-center justify-center dark:text-black text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              News & Events
            </li>
          </Link>
        </ul>
      </div>
      {/*burger button*/}
      <div
        className="hidden justify-center items-center max-[940px]:flex h-[100px] aspect-square"
        onClick={() => setOpenModal(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="pt-6 pl-4 bi bi-three-dots"
          viewBox="0 0 16 16"
        >
          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
        </svg>
      </div>
      {/*Modal*/}
      <Modal
        show={openModal}
        position={"top-left"}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header className="p-2 h-fit"></Modal.Header>
        <Modal.Body className="p-0">
          <div className="pt-4">
            <ul className="flex flex-col w-full gap-6">
              <Link href="/" className="text-[#006E8A] no-underline">
                <li
                  className="flex items-center justify-center px-3 cursor-pointer text-nowrap"
                  onClick={() => setOpenModal(false)}
                >
                  Home
                </li>
              </Link>
              <Link href="/products" className="text-[#006E8A] no-underline">
                <li
                  className="flex items-center justify-center px-3 cursor-pointer text-nowrap"
                  onClick={() => setOpenModal(false)}
                >
                  Products
                </li>
              </Link>
              <Link href="/partners" className="text-[#006E8A] no-underline">
                <li
                  className="flex items-center justify-center px-3 cursor-pointer text-nowrap"
                  onClick={() => setOpenModal(false)}
                >
                  Partners
                </li>
              </Link>
              <Link href="/contact" className="text-[#006E8A] no-underline">
                <li
                  className="flex items-center justify-center px-3 cursor-pointer text-nowrap"
                  onClick={() => setOpenModal(false)}
                >
                  Contact Us
                </li>
              </Link>
              <Link href="/aboutus" className="text-[#006E8A] no-underline">
                <li
                  className="flex items-center justify-center px-3 cursor-pointer text-nowrap"
                  onClick={() => setOpenModal(false)}
                >
                  About Us
                </li>
              </Link>
              <Link href="/news" className="text-[#006E8A] no-underline">
                <li
                  className="flex items-center justify-center px-3 cursor-pointer text-nowrap"
                  onClick={() => setOpenModal(false)}
                >
                  News & Events
                </li>
              </Link>
            </ul>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Nav;
