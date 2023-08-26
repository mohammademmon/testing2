"use client"
import React, { useState } from "react";
import { DM_Sans } from "next/font/google";
import { Open_Sans } from "next/font/google";
import Skillcontentdata from "@/data/skillcontentdata";

const dmsans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
});

const opensans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
});

const Skills = () => {

    const [active, setActive] = useState(1)

    const handleActive = (i)=>{
        setActive(i);
    }

  return (
    <section id="skills">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="text">
              <h3 className={dmsans.className}>
                I <span>run</span> Agency <span>Smartly</span> With My{" "}
                <span>team</span> Member.
              </h3>
              <p className={dmsans.className}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look.
              </p>
              <button className={opensans.className}>Say Hello</button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="content">
              {Skillcontentdata?.map((data, i) => (
                <div className="items" onClick={() => handleActive(i)}>
                  <div className="row align-items-center">
                    <div className="col-lg-3 col-md-2">
                      <div className="icon d-flex justify-content-center align-items-center">
                        {data.icon}
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-10">
                      <div className="c_text">
                        <h3 className={dmsans.className}>{data.title}</h3>
                        <p className={dmsans.className}>{data.para}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
