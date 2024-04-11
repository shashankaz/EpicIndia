import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./season.css";

const Season = () => {
  return (
    <div id="container-img">
      <div>
        <h1>Activities</h1>
        <p>Discover the best things to do throughout the year.</p>
        <div id="img">
          <div id="wrap">
            <Link href={"/activities"}>
              <Image
                id="img1"
                src="/season-1.jpg"
                width={1000}
                height={1000}
                alt="Picture of season 1"
                style={{ objectFit: "contain" }}
                quality={100}
              />
            </Link>
          </div>
          <div id="wrap">
            <Link href={"/activities"}>
              <Image
                id="img2"
                src="/season-2.jpg"
                width={1000}
                height={1000}
                alt="Picture of season 2"
                style={{ objectFit: "contain" }}
                quality={100}
              />
            </Link>
          </div>
          <div id="wrap">
            <Link href={"/activities"}>
              <Image
                id="img3"
                src="/season-3.jpg"
                width={1000}
                height={1000}
                alt="Picture of season 3"
                style={{ objectFit: "contain" }}
                quality={100}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Season;
