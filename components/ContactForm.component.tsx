import { Textarea } from "@nextui-org/react";
import React from "react";
import styled from "styled-components";
import {
  contentType,
  formDefaultState,
  FormErrorDefaultState,
} from "../consts/constants";
import ButtonComponent from "./Button.component";
import { CustomInputComponent } from "./utils/CustomInput.component";
import { FormSuccessComponent } from "./utils/FormSuccess.component";
import SectionTitleComponent from "./utils/SectionTitle.component";
import callbackForm from "../content/form/CallBackForm.json";

interface IFormError {
  firstName: string;
  lastName: string;
  email: string;
}

export const ContactFormComponent = () => {
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    company: "",
    position: "",
    email: "",
    telephone: "",
    comment: "",
  });
  const [errors, setErrors] = React.useState<IFormError>({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [formState, setFormState] = React.useState({
    submitting: false,
    submitted: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.firstName === "") {
      setErrors({ ...errors, firstName: "First name is required" });
    } else if (form.lastName === "") {
      setErrors({ ...errors, lastName: "Last name is required" });
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
      <SectionTitleComponent>{callbackForm.title}</SectionTitleComponent>

      <form onSubmit={handleSubmit}>
        {callbackForm.formfield.map((field, idx) => {
          if (field.name === "comment") {
            return (
              <Textarea
                rows={5}
                placeholder={field.placeholder}
                fullWidth
                bordered
                borderWeight="light"
                name={field.name}
                onChange={handleChange}
                value={form.comment}
                aria-label="question"
                style={{ borderColor: "none" }}
              />
            );
          } else {
            return (
              <CustomInputComponent
                labelplaceholder={field.placeholder}
                type={field.name === "email" ? "email" : "text"}
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                arialabel="fullname"
                helperText={errors[field.name] ? field.error : ""}
                status={errors[field.name] ? "error" : "default"}
                helperColor={errors[field.name] ? "error" : "default"}
              />
            );
          }
        })}

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
      font-size: 1rem;
    }
  }
`;
