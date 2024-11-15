function Nav() {
  return (
    <div className="group h-[50px]">
      <div className="flex justify-between w-full px-10 h-[50px] opacity-0 group-hover:opacity-100 transition-all delay-100">
        <ul className="flex w-1/3 justify-evenly">
          <li className="flex items-center justify-center px-3 cursor-pointer">
            Home
          </li>
          <li className="flex items-center justify-center px-3 cursor-pointer">
            Company
          </li>
          <li className="flex items-center justify-center px-3 cursor-pointer">
            Project
          </li>
          <li className="flex items-center justify-center px-3 cursor-pointer">
            Partners
          </li>
        </ul>
        <ul className="flex w-1/3 justify-evenly">
          <li className="flex items-center justify-center px-3 cursor-pointer">
            Careers
          </li>
          <li className="flex items-center justify-center px-3 cursor-pointer">
            News & Events
          </li>
          <li className="flex items-center justify-center px-3 cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
