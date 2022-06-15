import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface IButton {
  outline?: boolean;
  children: any;
  style?: object;
  normal?: boolean;
  link?: string;
  disabled?: boolean;
  type?: "submit" | "button" | "reset";
  id?: string;
}

const ButtonComponent: FC<IButton> = ({
  children,
  outline,
  style,
  normal,
  link,
  disabled,
  type,
  id,
}) => {
  return (
    <CustomButton
      style={style && style}
      $outline={outline}
      $normal={normal}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      disabled={disabled}
      type={type ? type : "button"}
    >
      {link ? (
        <Link href={link}>{children}</Link>
      ) : id ? (
        <Link href={`#${id}`}>{children}</Link>
      ) : (
        <p>{children}</p>
      )}
    </CustomButton>
  );
};

export default ButtonComponent;

const CustomButton = styled(motion.button)<{
  $outline?: boolean;
  $normal?: boolean;
}>`
  padding: 0.5rem 1.5rem;
  font-weight: 600;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  transition: filter 0.2s ease;
  overflow: hidden;
  position: relative;
  &:hover {
    filter: blur(0.05rem);
    .background-animation {
      transform: translateX(0);
      transform: translateY(-40%);
      top: 0;
    }
  }
  color: ${(props) =>
    props.$outline
      ? "var(--main-white)"
      : props.$normal
      ? "var(--main-white)"
      : "var(--main-color)"};

  background: ${(props) =>
    props.$outline
      ? "transparent"
      : props.$normal
      ? "var(--main-color)"
      : "var(--main-white)"};
  border: 2px solid
    ${(props) => (props.$outline ? "var(--main-white)" : "var(--main-color)")};
  @media (max-width: 500px) {
    width: 100%;
  }
`;
