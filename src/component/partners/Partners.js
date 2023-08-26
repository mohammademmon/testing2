"use client";
import React from "react";
import { DM_Sans } from "next/font/google";
import Slider from "react-slick";
import Image from "next/image";
import Partnerslider from "@/data/partnersliderdata";
import partnerimg1 from "@/images/partner1.webp";

const dmsans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
});

const Partners = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
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
    <section id="partners">
      <div className="container">
        <div className="title">
          <h2 className={dmsans.className + " " + "text-center"}>
            Reputed Partners
          </h2>
        </div>
        <div className="content ">
          <Slider {...settings}>
            {Partnerslider?.map((slider, i) => (
              <div className="slider d-flex justify-content-center aligh-items-center">
                <Image src={slider.img} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Partners;
