import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  const top = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div id="container">
      <div>
        <div id="part1">
          <IoIosArrowUp />
          <button onClick={top}>Back to top</button>
        </div>
        <div id="part2">
          <div id="content">
            <ul>
              <li id="head">Explore India</li>

              <li>
                <Link href={"/destinations"}>Destinations</Link>
              </li>
              <li>
                <Link href={"/attractions"}>Attractions</Link>
              </li>
              <li>
                <Link href={"/culture-and-heritage"}>Culture and Heritage</Link>
              </li>
              <li>
                <Link href={"/cuisine"}>Cuisine</Link>
              </li>
              <li>
                <Link href={"/festivals"}>Festivals</Link>
              </li>
            </ul>
          </div>
          <div id="content">
            <ul>
              <li id="head">Plan Your Trip</li>
              <li>
                <Link href={"/guide"}>Travel Guide</Link>
              </li>
              <li>
                <Link href={"/itineraries"}>Itineraries</Link>
              </li>
              <li>
                <Link href={"/accommodations"}>Accommodations</Link>
              </li>
              <li>
                <Link href={"/transportation"}>Transportation</Link>
              </li>
              <li>
                <Link href={"/visa"}>Visa Information</Link>
              </li>
            </ul>
          </div>
          <div id="content">
            <ul>
              <li id="head">Resources</li>
              <li>
                <Link href={"/faqs"}>FAQs</Link>
              </li>
              <li>
                <Link href={"/guide"}>Travel Guides</Link>
              </li>
              <li>
                <Link href={"/terms"}>Terms of Use</Link>
              </li>
              <li>
                <Link href={"/privacy"}>Privacy Policy</Link>
              </li>
              <li>
                <Link href={"/sustainability-initiatives"}>
                  Sustainability Initiatives
                </Link>
              </li>
            </ul>
          </div>
          <div id="content">
            <ul>
              <li id="head">Follow us</li>
              <div id="social">
                <li>
                  <div>
                    <Link href={"https://www.facebook.com/"} target="_blank">
                      <FaFacebook />
                    </Link>
                  </div>
                </li>
                <li>
                  <div>
                    <Link href={"https://twitter.com/"} target="_blank">
                      <FaXTwitter />
                    </Link>
                  </div>
                </li>
                <li>
                  <div>
                    <Link href={"https://www.instagram.com/"} target="_blank">
                      <FaInstagram />
                    </Link>
                  </div>
                </li>
                <li>
                  <div>
                    <Link href={"https://www.youtube.com/"} target="_blank">
                      <FaYoutube />
                    </Link>
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div id="part3">
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
          <div>
            <p>Copyright © 2024 India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
