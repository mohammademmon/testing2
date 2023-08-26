"use client"
import React from "react";
import { DM_Sans } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { BsArrowRight } from 'react-icons/bs';


const dmsans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
});

const opensans = Open_Sans({
  subsets: ["latin"],
});

const Newsletter = () => {
  return (
    <section id="newsletter">
      <div className="container">
        <div className="row justify-content-between align-items-center main">
          <div className="col-lg-5">
            <div className="text">
              <h2 className={dmsans.className}>Subscirbe to Our Newsletter</h2>
              <p className={opensans.className}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="newsletter_form">
              <input type="email" placeholder="Email" className={dmsans.className} />
              <button><BsArrowRight/></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
