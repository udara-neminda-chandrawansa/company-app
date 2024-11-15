function Nav() {
  return (
    <div className="group h-[50px]">
      <div className="flex justify-between w-full px-10 h-[50px] opacity-0 group-hover:opacity-100 transition-all delay-100 max-md:flex-col">
        <ul className="flex w-1/3 justify-evenly max-md:w-full max-md:h-1/2">
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
        <ul className="flex w-1/3 justify-evenly max-md:w-full max-md:h-1/2">
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
    </div>
  );
}

export default Nav;
