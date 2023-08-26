"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import Sliderdata from "@/data/blogsliderdata";

const dmsans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
});

const Blogslider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      
    ]
  };

  return (
    <section id="blogslider">
      <Slider {...settings} className="d-flex">
        {Sliderdata?.map((item, i) => (
          <div className="sliders">
            <div className="img">
              <Image src={item.img} width={330} height={220} />
            </div>
            <div className="text">
              <p className={dmsans.className}>
                <span>{item.icon}</span>
                {item.date}
              </p>
              <h3 className={dmsans.className}>{item.title}</h3>
            </div>
            <div className="cus_btn">
              <button>{item.btn}</button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Blogslider;
