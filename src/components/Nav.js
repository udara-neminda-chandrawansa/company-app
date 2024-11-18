function Nav() {
  return (
    <div className="h-[50px] z-50 max-md:h-full">
      <div className="flex justify-between w-full px-10 h-[50px] max-md:hidden">
        <ul className="flex w-1/3 justify-evenly">
          <li className="flex items-center justify-center text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
            Home
          </li>
          <li className="flex items-center justify-center text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
            Company
          </li>
          <li className="flex items-center justify-center text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
            Project
          </li>
          <li className="flex items-center justify-center text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
            Partners
          </li>
        </ul>
        <ul className="flex w-1/3 justify-evenly">
          <li className="flex items-center justify-center text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
            Careers
          </li>
          <li className="flex items-center justify-center text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
            News & Events
          </li>
          <li className="flex items-center justify-center text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
            Contact
          </li>
        </ul>
      </div>
      {/*burger button*/}
      <div className="hidden justify-center items-center max-md:flex h-[100px] aspect-square">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-three-dots pl-4 pt-6"
          viewBox="0 0 16 16"
        >
          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
        </svg>
      </div>
    </div>
  );
}

export default Nav;
