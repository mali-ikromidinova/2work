import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FormInputsWrap,
  FormButton,
  FormInputStyled,
} from "../07.Registration/RegistrationElements";
import { ContactsFormBox } from "./ContactsElements";

const ContactsMessage = () => {
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      /* .max(15, "Must be 15 characters or less") */
      .required("Введите требуемое значение"),
    email: Yup.string()
      .email("Некорректный формат email")
      .required("Введите требуемое значение"),
    phone: Yup.string().required("Введите требуемое значение"),
    message: Yup.string()
      .min(50, "Must be 50 characters or less")
      .required("Введите требуемое значение"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <>
      <ContactsFormBox>
        <form onSubmit={formik.handleSubmit}>
          <FormInputStyled>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Ваше имя"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}
          </FormInputStyled>

          <FormInputsWrap>
            <FormInputStyled>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Номер телефона"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div>{formik.errors.phone}</div>
              ) : null}
            </FormInputStyled>

            <FormInputStyled>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="E-mail (электронная почта)"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </FormInputStyled>
          </FormInputsWrap>

          <FormInputStyled>
            <textarea
              id="message"
              name="message"
              type="text"
              placeholder="Сообщение заказчику"
              rows={5}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />
            {formik.touched.message && formik.errors.message ? (
              <div>{formik.errors.message}</div>
            ) : null}
          </FormInputStyled>

          <FormButton type="submit">Отправить</FormButton>
        </form>
      </ContactsFormBox>
    </>
  );
};

export default ContactsMessage;
