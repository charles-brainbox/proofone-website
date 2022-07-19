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
      <SectionTitleComponent>{callbackForm.title}</SectionTitleComponent>

      <form onSubmit={handleSubmit}>
        {callbackForm.formfield.map((field, idx) => {
          if (field.name === "Kommentar") {
            return (
              <Textarea
                rows={5}
                placeholder={field.placeholder}
                fullWidth
                bordered
                borderWeight="light"
                name={field.name}
                onChange={handleChange}
                value={form.question}
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
                value={form.fullname}
                onChange={handleChange}
                arialabel="fullname"
                helperText={errors.fullname ? field.error : ""}
                status={errors.fullname ? "error" : "default"}
                helperColor={errors.fullname ? "error" : "default"}
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
