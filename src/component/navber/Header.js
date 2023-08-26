"use client";
import Menuitemdata from "@/data/menuitem-data";
import Logo from "@/svg/Logo";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { DM_Sans } from "next/font/google";
import { motion } from "framer-motion";

const DMsans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
  lineHeight: "auto",
});

const DMsansB = DM_Sans({
  subsets: ["latin"],
  weight: "700",
  lineHeight: "auto",
});

const Header = () => {
  
  return (
    <Navbar
      expand="lg"
      id="navbar_custom"
    >
      <Container>
        <Link href="#">
          <Logo />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 menu"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {Menuitemdata?.map((data, i) => (
              <Link
                className={DMsans.className + " " + "menuitems"}
                href={data.url}
              >
                {data.title}
              </Link>
            ))}
          </Nav>
          <motion.div
            initial={{ opacity: 1 }}
            whileHover={{
              scale: 1.05,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button
              className={DMsansB.className + " " + "nav_btn"}
              variant="outline-success"
            >
              Contact Now
            </Button>
          </motion.div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
