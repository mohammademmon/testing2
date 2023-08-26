"use client"
import Image from "next/image";
import React from "react";
import Experienceimg from "@/images/experience.webp";
import { DM_Sans } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { Grechen_Fuemen } from "next/font/google";
import Experiencedata from "@/data/expriencedata";
import Numberdata from "@/data/numberdata";
import CountUp from 'react-countup';

const dmsans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
});

const opensans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
});

const grechen = Grechen_Fuemen({
  subsets: ["latin"],
  weight: "400",
});

const Experience = () => {
  return (
    <section id="cus_experience">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="left">
              <Image className="image" src={Experienceimg} />
              <div className="overlay d-flex justify-content-center align-items-center">
                <div className="text text-center">
                  <h3 className={dmsans.className}><CountUp start={0} end={5} duration={3} />+<span>Year</span></h3>
                  <p className={dmsans.className}>Experience</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right">
              <div className="text">
                <h3 className={dmsans.className}>
                  We <span>Run</span> Agency <span>Smartly</span> With Our{" "}
                  <span>Team</span> Member.
                </h3>
                <p className={dmsans.className}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't
                  look.
                </p>
              </div>
              <div className="data">
                {Experiencedata?.map((data, i) => (
                  <p className={dmsans.className}>
                    <span>{data.icon}</span>
                    {data.title}
                  </p>
                ))}
              </div>
              <div className="button">
                <button className={opensans.className}>Explore More</button>
              </div>
              <div className="number">
                <div className="row justify-content-between">
                  {Numberdata?.map((data, i) => (
                    <div className="col-lg-4 col-4">
                      <div className="items text-center">
                        <h3 className={grechen.className}>{data.num}{data.sign}</h3>
                        <h4 className={dmsans.className}>{data.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
