import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import profilePic1 from "./img/profile1.jpg";
import profilePic2 from "./img/profile2.jpg";
import profilePic3 from "./img/profile3.jpg";
import profilePic4 from "./img/profile4.jpg";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

function Testimonials() {
  const client = [
    {
      img: profilePic1,
      review:
        "  Nullam vitae hendrerit purus. Sed porttitor congue sapien, sed sagittis eros. Aliquam at lectus lacinia, ultrices massa ut, vehicula arcu."
    },

    {
      img: profilePic2,
      review:
        " Nullam vitae hendrerit purus. Sed porttitor congue sapien, sed sagittis eros. Aliquam at lectus lacinia, ultrices massa ut, vehicula arcu."
    },

    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem is the new way of writing thing words more than"
    },

    {
      img: profilePic4,
      review:
        " Nullam vitae hendrerit purus. Sed porttitor congue sapien, sed sagittis eros. Aliquam at lectus lacinia, ultrices massa ut, vehicula arcu."
    }
  ];

  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work</span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>

      {/* slider */}

      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {client.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Testimonials;
