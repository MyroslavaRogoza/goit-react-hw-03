import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import { useId } from "react";
import * as yup from "yup";
import css from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    onAddContact(values);
    actions.resetForm();
  };
  const FormInitialValues = {
    id: nanoid(),
    name: "",
    number: "",
  };
  const nameId = useId();
  const numberId = useId();
  return (
    <Formik initialValues={FormInitialValues} onSubmit={handleSubmit}>
      <Form className={css.contactForm}>
        <label htmlFor={nameId}>Name</label>
        <Field type="text" name="name" id={nameId} />
        <label htmlFor={numberId}>Number</label>
        <Field type="number" name="number" id={numberId} />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
