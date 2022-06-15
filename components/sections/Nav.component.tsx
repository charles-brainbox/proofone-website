import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { INav } from "../../types/types";
import ButtonComponent from "../Button.component";
import RenderItemComponent from "../utils/RenderItem.component";
import { motion, useCycle } from "framer-motion";
import {
  menuItemsVariants,
  navListVariants,
  sidebar,
} from "../../consts/constants";
import { MenuToggle } from "./MenuToggle.component";
import Navbar from "../../content/navbar/Navbar.json";

const NavComponent = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = () => {
    const position: number = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const {
    navbar: { logo, navitems, navbuttons },
  } = Navbar;

  return (
    <CustomSection isOpen={isOpen} scrollPosition={scrollPosition}>
      <div className="logo">
        <RenderItemComponent
          item={
            <Link href={"/"}>
              <a>
                <Image
                  src={logo}
                  alt="proof-one-logo"
                  layout="fill"
                  objectFit="cover"
                />
              </a>
            </Link>
          }
        />
      </div>
      <div className="menu">
        <ul className="menu-desktop">
          {navitems.map(({ menutitle, menulink }, idx) => (
            <RenderItemComponent
              key={idx}
              item={
                <li>
                  <div className="item-title">
                    <span>+ </span>
                    <Link href={`#${menulink}`}>{menutitle}</Link>
                    <div className="underline"></div>
                  </div>
                </li>
              }
            />
          ))}
        </ul>
        {navbuttons.map(({ buttontitle, buttonlink }, idx) => (
          <RenderItemComponent
            key={idx}
            item={
              <ButtonComponent
                style={{ zIndex: "300" }}
                outline
                id={buttonlink}
              >
                {buttontitle}
              </ButtonComponent>
            }
          />
        ))}
      </div>
      <div className="mobile-view-div">
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          ref={containerRef}
        >
          <motion.div className="background" variants={sidebar} />
          <motion.ul variants={navListVariants}>
            {navitems.map(({ menutitle, menulink }, idx) => (
              <RenderItemComponent
                key={idx}
                item={
                  <motion.li
                    variants={menuItemsVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleOpen()}
                  >
                    <Link href={`#${menulink}`}>{menutitle}</Link>
                  </motion.li>
                }
              />
            ))}
          </motion.ul>
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
      </div>
    </CustomSection>
  );
};

export default NavComponent;

const CustomSection = styled.nav<{ isOpen: boolean; scrollPosition: number }>`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) =>
    props.scrollPosition > 650 ? "var(--main-white)" : "var(--main-color)"};
  color: ${(props) =>
    props.scrollPosition > 650 ? "var(--main-color)" : "var(--main-white)"};
  z-index: 100;
  margin: 0 auto;
  width: 100%;
  height: 80px;
  max-width: 1800px;
  padding-right: 2%;
  transition: all 0.5s ease;

  @media (max-width: 1024px) {
    .mobile-view-div {
      display: block !important;
      position: ${(props) => (props.isOpen ? "fixed" : "absolute")};
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      transition-delay: 0.3s;
      width: 100vw;
      height: ${(props) => (props.isOpen ? "100vh" : "0")};

      nav {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        padding: 2rem;
        ul {
          z-index: 200;
          li {
            padding-bottom: 3rem;
            text-align: right;
            list-style: none;
            font-weight: 700;
            cursor: pointer;
            font-size: 2rem;
          }
        }
      }
    }
    .menu {
      .menu-desktop {
        display: none;
      }
      button {
        margin-right: 80px;
      }
    }
  }
  .logo {
    position: relative;
    height: 70px;
    width: 170px;
    cursor: pointer;
  }
  .menu {
    display: flex;
    align-items: center;
    gap: 20px;
    ul {
      display: flex;
      align-items: center;
      gap: 20px;
      height: 40px;
      li {
        padding: 0 10px 0 0;
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        list-style: none;
        font-weight: 500;
        cursor: pointer;
        transition: opacity 0.5s ease-in-out;
        .item-title {
          span {
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
          }
          .underline {
            width: 0;
            height: 1px;
            position: absolute;
            bottom: 0;
            background: ${(props) =>
              props.scrollPosition > 650
                ? "var(--main-color)"
                : "var(--main-white)"};
            transition: width 0.5s ease-in-out;
          }
        }

        &:hover {
          opacity: 0.5;
          span {
            opacity: 1;
          }
          .underline {
            width: 100%;
          }
        }
      }
    }
  }
  .mobile-view-div {
    display: none;
  }
  .background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background: var(--main-color);
  }
  button {
    transition: all 0.5s ease;
    border-color: ${(props) =>
      props.scrollPosition > 650 ? "var(--main-color)" : "var(--main-white)"};
    color: ${(props) =>
      props.scrollPosition > 650 ? "var(--main-color)" : "var(--main-white)"};
  }
`;
