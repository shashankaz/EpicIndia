"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";

import Card from "./Card";

import { Pagination } from "swiper/modules";

import blogs from "../data/blogs.json";

const Blog = () => {
  return (
    <div id="container-blog">
      <h1>Stories from India</h1>
      <p>Dive into India with feature articles, guides, and much more!</p>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {blogs.content.map((blog) => (
          <SwiperSlide key={blog.id}>
            <Card
              title={blog.title}
              description={blog.description}
              image={blog.image_url}
              slug={`/blog/${blog.slug}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;
