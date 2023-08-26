import React from "react";
import Blogslider from "./Blogslider";
import { DM_Sans } from "next/font/google";

const dmsans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
});

const Blog = () => {
  return (
    <section id="blog">
      <div className="container">
        <div className="blog_top text-center">
          <h2 className={dmsans.className}>Latest Blog</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised.
          </p>
        </div>
        <div className="blog_bottom">
          <Blogslider />
        </div>
      </div>
    </section>
  );
};

export default Blog;
