
import { Link } from "@remix-run/react";
import { useState } from "react";
import IconMenu from "./IconMenu";
import { ContactInfo } from "./ContactInfo";
import { navLinks } from "../../../constant";
import Logo from "../utils/Logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-4">
      <Link to={"/"}>
        <Logo priority={true} />
      </Link>

      <IconMenu isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="items-center space-x-8 font-bold text-base hidden md:flex">
        <ContactInfo isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>

      <SideBarMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}

const SideBarMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`transform bg-slate-50 border-r fixed z-50 top-0 left-0 w-72 h-screen shadow md:hidden transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <ul className="p-8 text-black font-semibold space-y-8 mt-4">
        <ContactInfo isOpen={isOpen} setIsOpen={setIsOpen}/>
        <hr className="border-gray-300" />
        {navLinks.map((link) => (
          <li key={link.title} className="text-gray-800">
            <Link href={link.url} onClick={() => setIsOpen(!isOpen)}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
