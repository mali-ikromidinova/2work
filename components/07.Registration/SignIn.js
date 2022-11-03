import { Formik, Form, useFormik } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import {
  FormButton,
  FormInputStyled,
  FormOption,
  FormTitle,
  SignInForm,
} from "./RegistrationElements";

const SignIn = () => {
  const initialValues = {
    phone: "",
    password: "",
  };

  const validationSchema = Yup.object({
    password: Yup.string().required("Введите требуемое значение"),
    phone: Yup.string().required("Введите требуемое значение"),
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
      <SignInForm>
        <FormTitle>Авторизация</FormTitle>
        <form onSubmit={formik.handleSubmit}>
          <FormInputStyled>
            <label htmlFor="phone">Номер телефона</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div>{formik.errors.phone}</div>
            ) : null}
          </FormInputStyled>

          <FormInputStyled>
            <label htmlFor="password">Пароль</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </FormInputStyled>

          <FormButton type="submit">Войти</FormButton>
        </form>

        <FormOption>
          <Link href="/signup"> Забыли пароль? </Link>
        </FormOption>
        <FormOption>
          Еще нет аккаунта? <Link href="/signup"> Создать аккаунт </Link>
        </FormOption>
      </SignInForm>
    </>
  );
};

export default SignIn;
