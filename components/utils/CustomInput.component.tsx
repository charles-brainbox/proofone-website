import { Input } from "@nextui-org/react";
import React, { FC } from "react";
import styled from "styled-components";

interface ICustomInput {
  labelplaceholder: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
  arialabel: string;
  helperText?: string;
  required?: boolean;
  status?: "error" | "default";
  helperColor?: "error" | "default";
}

export const CustomInputComponent: FC<ICustomInput> = ({
  labelplaceholder,
  type,
  onChange,
  name,
  value,
  arialabel,
  ...props
}) => {
  return (
    <CustomContainer>
      <Input
        clearable
        placeholder={labelplaceholder}
        type={type}
        fullWidth
        size="xl"
        rounded
        bordered
        borderWeight="light"
        name={name}
        value={value}
        onChange={onChange}
        aria-label={arialabel}
        {...props}
      />
    </CustomContainer>
  );
};

const CustomContainer = styled.div`
  margin: 0 0 2rem;
  button {
    right: 10px;
  }
  input {
    padding-right: 25px;
  }
  .nextui-c-gJvMas-bDGmTT-withValue-true {
    bottom: -20px;
    p {
      font-family: var(--main-font);
      font-size: 0.8rem;
    }
  }
`;
