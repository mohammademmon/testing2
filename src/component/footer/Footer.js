"use client"
import React from "react";
import Footer_logo from "@/svg/Logo";
import Link from "next/link";
import { Open_Sans } from "next/font/google";
import { DM_Sans } from "next/font/google";
import {
  Copyrightmenu,
  Footermenu1,
  Footermenu2,
} from "@/data/footermenu-data";
import { FaTelegramPlane } from "react-icons/fa";
import Socialicons from "@/data/socialicon";
import { motion } from "framer-motion";

const opensans = Open_Sans({
  subsets: ["latin"],
});

const dmsans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
});

const Footer = () => {
  return (
    <>
      <section id="footer">
        <div className="container">
          <div className="row">
            <div className="col-6 col-lg-3 column-1">
              <div className="footer_logo">
                <Link href="/">
                  <Footer_logo />
                </Link>
              </div>
              <div className="footer_info">
                <p className={opensans.className}>
                  There are many variations of passages of available, but the
                  majority have suffered.
                </p>
              </div>
            </div>
            <div className="col-6 col-lg-3 column-2 footer_menu">
              <div className="menu_title">
                <h2 className={dmsans.className}>Services</h2>
              </div>
              <div className="menu_items d-flex flex-column">
                {Footermenu1?.map((data, i) => (
                  <Link
                    className={dmsans.className + " " + "menu"}
                    href={data.url}
                  >
                    {data.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-6 col-lg-3 column-3 footer_menu">
              <div className="menu_title">
                <h2 className={dmsans.className}>Resources</h2>
              </div>
              <div className="menu_items d-flex flex-column">
                {Footermenu2?.map((data, i) => (
                  <Link
                    className={dmsans.className + " " + "menu"}
                    href={data.url}
                  >
                    {data.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-6 col-lg-3 column-4">
              <div className="newsletter_text">
                <h2 className={dmsans.className}>Newsletter</h2>
                <p className={dmsans.className}>
                  Subscribe for our upcoming latest address and resources
                </p>
              </div>
              <div className="newsletter_form d-flex align-items-center">
                <input
                  className="subscrib_input"
                  type="email"
                  placeholder="email"
                />
                <button className="subscrib_mail">
                  <FaTelegramPlane />
                </button>
              </div>
              <div className="social_icons d-flex align-items-center">
                {
                  Socialicons?.map((data, i)=>(
                    <Link href={data.url}>{data.title}</Link>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="copyright">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="copyright_menu d-flex justify-content-center gap-3">
                {Copyrightmenu?.map((data, i) => (
                  <Link className={opensans.className + " " + "items"} href={data.url}>{data.title}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
