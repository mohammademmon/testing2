"use client";
import React from "react";
import { DM_Sans, Open_Sans } from "next/font/google";
import { Button } from "react-bootstrap";
import Arrowicon from "@/svg/Arrowicon";
import Link from "next/link";
import { BsDribbble } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import Heroimg from "@/images/hero-img.webp"
import Herorightimg from "../../images/bg.jpg";

const dmsans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
});

const opensans = Open_Sans({
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-8">
              <div className="hero_text">
                <div className="title">
                  <h1 className={dmsans.className}>
                    <span className="different">
                      <span>Creative</span> Design
                    </span>
                    <span className="different">
                      and Work <span>Solution</span>
                    </span>
                  </h1>
                </div>
                <div className="info">
                  <p className={dmsans.className}>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered.
                  </p>
                </div>
                <div className="btn_custom">
                  <Link className={opensans.className + " " + "items"} href="#">
                    Say Hello
                  </Link>
                  <Link className={dmsans.className + " " + "items"} href="#">
                    My work{" "}
                    <span>
                      <Arrowicon />
                    </span>
                  </Link>
                </div>
                <div className="socal">
                  <div className="row">
                    <div className="col-lg-4 col-5 col-md-3">
                      <div className="text">
                        <p className={dmsans.className}>Follow me on</p>
                      </div>
                    </div>
                    <div className="col-lg-8 col-7 col-md-3">
                      <div className="items d-flex align-items-center gap-3">
                        <motion.div
                          className="box"
                          whileHover={{ scale: 1.1 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Link href="#" className="icons">
                            <BsDribbble />
                          </Link>
                        </motion.div>
                        <motion.div
                          className="box"
                          whileHover={{ scale: 1.1 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Link href="#" className="icons">
                            <FaInstagramSquare />
                          </Link>
                        </motion.div>
                        <motion.div
                          className="box"
                          whileHover={{ scale: 1.1 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Link href="#" className="icons">
                            <FaBehance />
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4">
              <div className="hero_img">
                <Image className="items" src={Heroimg} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
