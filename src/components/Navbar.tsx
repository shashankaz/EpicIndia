import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./navbar.css";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  return (
    <div id="nav">
      <Link href={"/"}>
        <div id="visit">
          <h1>Visit</h1>
          <span>
            <Image
              src="/India.svg"
              width={35}
              height={35}
              alt="Flag of India"
            />
          </span>
          <h1>India</h1>
        </div>
      </Link>
      <div id="icons">
        <div>
          <CiMenuFries />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
