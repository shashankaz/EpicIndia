import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./trip.css";
import { FaArrowRight } from "react-icons/fa6";

const Trip = () => {
  return (
    <div id="container-trip">
      <div>
        <h1>Ready, steady... go!</h1>
        <p>
          Experience the very best of India with great travel deals from our
          partners.
        </p>
        <Link href={"/book-your-trip"}>
          <div id="img">
            <div id="wrap">
              <Image
                id="taj"
                src="/taj.jpg"
                width={1000}
                height={1000}
                alt="Picture of The Taj Mahal"
                style={{ objectFit: "contain" }}
                quality={100}
              />
            </div>
          </div>
          <button>
            Book your Trip to India
            <div id="arrow">
              <FaArrowRight />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Trip;
