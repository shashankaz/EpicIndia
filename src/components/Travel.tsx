"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./travel.css";

import Card from "./Card";

import { Pagination } from "swiper/modules";

import destinations from "../data/popular_destinations.json";

const Travel = () => {
  return (
    <div id="container-travel">
      <h1>Popular Destinations</h1>
      <p>Ready to go? Check out these hot travel destinations.</p>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {destinations.data.map((destination) => (
          <SwiperSlide key={destination.id}>
            <Card
              title={destination.heading}
              description={destination.description}
              image={destination.image_url}
              slug={`/destinations/${destination.slug}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Travel;
