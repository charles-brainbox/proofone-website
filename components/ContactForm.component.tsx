import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import styled from "styled-components";
import ButtonComponent from "./Button.component";
import SectionLayoutComponent from "./layout/SectionLayout.component";
import SectionTitleComponent from "./utils/SectionTitle.component";

export const ContactFormComponent = () => {
  const handleSubmit = () => {
    console.log("Form submitted");
  };
  return (
    <SectionLayoutComponent id="contact">
      <CustomContainer>
        <SectionTitleComponent>Get in touch with us</SectionTitleComponent>
        <h2>You will be able to get in touch with us soon.</h2>
        {/* <Formik
          initialValues={{ fullname: "", email: "", message: "" }}
          validate={(values) => {
            const errors = { email: "" };
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values) => handleSubmit()}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="fullname" />
              <ErrorMessage name="fullname" component="div" />
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
              <Field type="text" name="message" />
              <ButtonComponent type="submit" disabled={isSubmitting}>
                Submit
              </ButtonComponent>
            </Form>
          )}
        </Formik> */}
      </CustomContainer>
    </SectionLayoutComponent>
  );
};

const CustomContainer = styled.div``;
