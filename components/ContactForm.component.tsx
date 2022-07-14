import { Input, Textarea } from "@nextui-org/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { json } from "node:stream/consumers";
import React from "react";
import styled from "styled-components";
import {
  contentType,
  formDefaultState,
  FormErrorDefaultState,
} from "../consts/constants";
import ButtonComponent from "./Button.component";
import SectionLayoutComponent from "./layout/SectionLayout.component";
import { CustomInputComponent } from "./utils/CustomInput.component";
import { FormSuccessComponent } from "./utils/FormSuccess.component";
import SectionTitleComponent from "./utils/SectionTitle.component";

interface IFormError {
  fullname: string;
  email: string;
}

export const ContactFormComponent = () => {
  const [form, setForm] = React.useState({
    fullname: "",
    email: "",
    question: "",
  });
  const [errors, setErrors] = React.useState<IFormError>({
    fullname: "",
    email: "",
  });
  const [formState, setFormState] = React.useState({
    submitting: false,
    submitted: false,
  });

  console.log(form);
  console.log(errors);

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.fullname === "") {
      setErrors({ ...errors, fullname: "Full name is required" });
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      setErrors({ ...errors, email: "Email format is incorrect" });
    } else {
      setFormState({ ...formState, submitting: true, submitted: false });
      const resp = await fetch("/api", {
        method: "POST",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },

        body: JSON.stringify(form),
      });
      if (resp.status === 200) {
        setErrors(FormErrorDefaultState);
        setForm(formDefaultState);
        setFormState({ ...formState, submitted: true, submitting: false });
      }
    }
  };
  if (formState.submitted) {
    return <FormSuccessComponent />;
  }
  return (
    <CustomContainer>
      <SectionTitleComponent>Get in touch with us</SectionTitleComponent>

      <form onSubmit={handleSubmit}>
        <CustomInputComponent
          labelplaceholder="Full name*"
          type="text"
          name="fullname"
          value={form.fullname}
          onChange={handleChange}
          arialabel="fullname"
          helperText={errors.fullname ? errors.fullname : ""}
          status={errors.fullname ? "error" : "default"}
          helperColor={errors.fullname ? "error" : "default"}
        />
        <CustomInputComponent
          labelplaceholder="Email*"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          arialabel="email"
          helperText={errors.email ? errors.email : ""}
          status={errors.email ? "error" : "default"}
          helperColor={errors.email ? "error" : "default"}
        />
        <Textarea
          rows={10}
          placeholder="What would you like to ask us?"
          fullWidth
          bordered
          borderWeight="light"
          name="question"
          onChange={handleChange}
          value={form.question}
          aria-label="question"
        />
        <ButtonComponent
          type="submit"
          style={{ marginTop: "1rem", float: "right" }}
          disabled={formState.submitting}
        >
          Submit
        </ButtonComponent>
      </form>
    </CustomContainer>
  );
};

const CustomContainer = styled.div`
  width: 100%;
  form {
    label,
    input,
    textarea {
      font-family: var(--main-font);
      font-size: 1.2rem;
    }
  }
`;
