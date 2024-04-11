import React from "react";
import "./map.css";

const Map = () => {
  return (
    <div id="container-map">
      <h1>Map</h1>
      <p>Explore the vibrant tapestry of India.</p>
      <div id="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30765539.576368716!2d61.01910794508838!3d19.731389643615476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1712586425383!5m2!1sen!2sin"
          width="600"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
