"use client";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { DM_Sans } from "next/font/google";
import { motion } from "framer-motion";
import Aboutskilldata from "@/data/aboutskilldata";
import Skillcontent from "./Skillcontent";

const dmsans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
});

const About = () => {

  const [active, setActieve] = useState(0)

  const handleActive = (i) => {
    setActieve(i);
  }


  return (
    <>
      <section id="about">
        <div className="container">
          <div className="row about_top justify-content-between">
            <div className="col-lg-5">
              <div className="title">
                <h2 className={dmsans.className}>
                  Failure is The Power that Gives <span>Success</span>
                </h2>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="info">
                <p className={dmsans.className}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised.
                </p>
                <motion.button
                  initial={{ opacity: 1 }}
                  whileHover={{
                    scale: 1.05,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={dmsans.className + " " + "about_top_btn"}
                >
                  Download Now
                </motion.button>
              </div>
            </div>
          </div>
          <div className="row about_bottom align-items-center">
            <div className="col-lg-6">
              <div className="row skills">
                {Aboutskilldata?.map((data, i) => (
                  <div className="col-lg-6 col-6 col-sm-6" onClick={() => handleActive(i)}>
                    <div className="items" style={{backgroundColor: active == i && "#6344C6"}} >
                      <h3 style={{color: active == i && "#fff"}} className={dmsans.className}>{data.title}</h3>
                      <p style={{color: active == i && "#fff"}} className={dmsans.className}>{data.para}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="content" >
                {
                  active === 0 && <Skillcontent title="Get So Many Awards In 5 years" para="There are many variations of passages of Lorem Ipsum available, but the majority." cus_btn="Visit Now" />
                }
                {
                  active === 1 && <Skillcontent title="Get So Many Awards In 15 years" para="There are many variations of passages of Lorem Ipsum available, but the majority." cus_btn="Visit Now" />
                }
                {
                  active === 2 && <Skillcontent title="Get So Many Awards In 25 years" para="There are many variations of passages of Lorem Ipsum available, but the majority." cus_btn="Visit Now" />
                }
                {
                  active === 3 && <Skillcontent title="Get So Many Awards In 35 years" para="There are many variations of passages of Lorem Ipsum available, but the majority." cus_btn="Visit Now" />
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
