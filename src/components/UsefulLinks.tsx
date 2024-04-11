import React from "react";
import Link from "next/link";
import "./usefulLinks.css";

import places from "../data/places_to_go.json";
import things from "../data/things_to_do.json";

const UsefulLinks = () => {
  return (
    <div id="container-links">
      <div id="box-1">
        <div id="box-2">
          <ul>
            <li id="head">Places to go</li>
            {places.data.map((place) => (
              <li key={place.id}>
                <Link href={`/places-to-go/${place.slug}`}>
                  {place.destination}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div id="box-2">
          <ul>
            <li id="head">Things to do</li>
            {things.data.map((thing) => (
              <li key={thing.id}>
                <Link href={`/things-to-do/${thing.slug}`}>
                  {thing.activity}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UsefulLinks;
