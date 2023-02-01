import { useState } from "react";
import { Link } from "react-router-dom";
import { logo2, close, menu } from "../assets";
import { NavLinks } from "../constance/index";
const Navigation = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <nav className="flex flex-row justify-between items-center w-full ">
      <img
        src={logo2}
        alt="logo"
        className="w-[50px] object-contain rounded-[50%]"
      />

      <ul className="md:flex hidden">
        {NavLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`${index !== NavLinks.length - 1 ? "mr-5" : "mr-0"}`}
          >
            <Link to={nav.route}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <div className="cursor-pointer md:hidden block z-10">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[25px] object-contain "
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${toggle ? "flex" : "hidden"} absolute top-16 right-2
        text-white bg-secondary sidebar p-[15px] rounded-[20px] 
        text-[15px] sm:text-[20px] `}
        >
          <ul className="flex flex-col text-center">
            {NavLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`${index !== NavLinks.length - 1 ? "mb-2" : "mb-0"}`}
              >
                <Link to={nav.route}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
