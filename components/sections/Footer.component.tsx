import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { IFooter } from "../../types/types";
import RenderItemComponent from "../utils/RenderItem.component";
import Image from "next/image";

const FooterComponent = ({ data }: { data: IFooter }) => {
  const {
    logo,
    address: { title, companyname, companycity, companycountry, companystreet },
    otherdata,
  } = data;
  return (
    <CustomSection>
      <div className="footer-container">
        <div className="footer-logo">
          <Image
            width={150}
            height={40}
            src={logo}
            alt="proof-one-logo"
            objectFit="contain"
          />
        </div>
        <div className="footer-meta">
          <div className="footer-content">
            <h6 className="footer-title">{title}</h6>
            <ul>
              <RenderItemComponent item={<li>{companyname}</li>} />
              <RenderItemComponent item={<li>{companystreet}</li>} />
              <RenderItemComponent item={<li>{companycity}</li>} />
              <RenderItemComponent item={<li>{companycountry}</li>} />
            </ul>
          </div>
          {otherdata.map(({ title, body }, idx) => (
            <div key={idx} className="footer-content">
              <h6 className="footer-title">{title}</h6>{" "}
              <ul>
                {body.map(({ item, itemlink }, idx) => (
                  <RenderItemComponent
                    key={idx}
                    item={
                      <li className="item">
                        <Link href={itemlink}>{item}</Link>
                      </li>
                    }
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </CustomSection>
  );
};

export default FooterComponent;

const CustomSection = styled.footer`
  background-color: var(--main-grey);
  padding: 3rem 0 6rem;
  border-top: 1px solid var(--main-color);
  .footer-container {
    margin: 0 auto;
    width: 75%;
    max-width: 1500px;
    display: grid;
    grid-template-columns: 15% 80%;
    gap: 5%;
    align-items: flex-start;
    .footer-meta {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    .footer-logo {
      margin-bottom: 2rem;
    }

    @media (max-width: 1024px) {
      display: block;
    }

    @media (max-width: 550px) {
      display: block;
      text-align: center;
      padding: 0;
      .footer-meta {
        display: block;
        .footer-content {
          margin-bottom: 2rem;
        }
      }
    }
    .footer-title {
      font-size: 1.1rem;
      font-weight: 800;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
    }
    .footer-content {
      .item {
        list-style: none;
        margin-bottom: 0.2rem;
        transition: all 0.3s ease;
        &:hover {
          filter: blur(1px);
          transform: scale(1.05);
        }
      }
    }
  }
`;
