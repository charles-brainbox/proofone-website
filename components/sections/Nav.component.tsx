import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
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

const NavComponent = ({ data }: { data: INav }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  return (
    <CustomSection isOpen={isOpen}>
      <div className="logo">
        <RenderItemComponent
          item={
            <Link href={"/"}>
              <a>
                <Image
                  src={data.logo}
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
          {data.navitems.map(({ menutitle, menulink }, idx) => (
            <RenderItemComponent
              key={idx}
              item={
                <li>
                  <span>+ </span>
                  <Link href={menulink}>{menutitle}</Link>
                  <div className="underline"></div>
                </li>
              }
            />
          ))}
        </ul>
        {data.navbuttons.map(({ buttontitle, buttonlink }, idx) => (
          <RenderItemComponent
            key={idx}
            item={
              <ButtonComponent
                normal
                link={buttonlink}
                style={{ zIndex: "300" }}
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
            {data.navitems.map(({ menutitle, menulink }, idx) => (
              <RenderItemComponent
                key={idx}
                item={
                  <motion.li
                    variants={menuItemsVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href={menulink}>{menutitle}</Link>
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

const CustomSection = styled.nav<{ isOpen: boolean }>`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--main-white);
  z-index: 100;
  margin: 0 auto;
  width: 100%;
  height: 80px;
  max-width: 1800px;
  border-bottom: 1px solid var(--main-color);
  padding-right: 2%;

  @media (max-width: 1024px) {
    .mobile-view-div {
      display: block !important;
      position: absolute;
      right: 0;
      top: 0;
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
            font-size: 2rem;
            font-weight: 700;
            text-align: right;
            color: #fff;
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
      li {
        list-style: none;
        font-weight: 700;
        cursor: pointer;
        font-size: 1.3rem;
        transition: opacity 0.5s ease-in-out;
        span {
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
        }
        .underline {
          width: 0;
          height: 2px;
          background: var(--main-color);
          transition: width 0.5s ease-in-out;
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
`;
