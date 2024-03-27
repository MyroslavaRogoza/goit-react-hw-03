import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { MAX_CHAR_VALIDATION } from "../../components/../validationValues.js";
import { MIN_CHAR_VALIDATION } from "../../components/../validationValues.js";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(MIN_CHAR_VALIDATION, `At least ${MIN_CHAR_VALIDATION} characters`)
    .max(MAX_CHAR_VALIDATION, `Up to ${MAX_CHAR_VALIDATION} characters`)
    .required("Required!"),
  number: Yup.string()
    .min(MIN_CHAR_VALIDATION, `At least ${MIN_CHAR_VALIDATION} characters`)
    .max(MAX_CHAR_VALIDATION, `Up to ${MAX_CHAR_VALIDATION} characters`)
    .required("Required!"),
});
const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    onAddContact(values);
    actions.resetForm();
  };
  const FormInitialValues = {
    name: "",
    number: "",
  };
  const nameId = useId();
  const numberId = useId();
  return (
    <Formik
      initialValues={FormInitialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.contactForm}>
        <label htmlFor={nameId}>Name</label>
        <Field type="text" name="name" id={nameId} />
        <ErrorMessage name="name" component="span" />
        <label htmlFor={numberId}>Number</label>
        <Field type="text" name="number" id={numberId} />
        <ErrorMessage name="number" component="span" />
        <button type="submit" className={css.AddContactBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
