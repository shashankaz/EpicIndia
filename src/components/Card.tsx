import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./card.css";

type CardProps = {
  slug: string;
  image: string;
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = (props) => {
  return (
    <div id="container-card">
      <Link href={`${props.slug}`}>
        <div id="wrap">
          <Image
            id="img"
            src={props.image}
            width={1000}
            height={1000}
            alt={props.title}
            quality={100}
          />
        </div>
        <h1 id="title">{props.title}</h1>
      </Link>
      <p id="desc">{props.description}</p>
    </div>
  );
};

export default Card;
