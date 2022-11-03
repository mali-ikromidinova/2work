import { useFormik } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import {
  Disclaimer,
  FormButton,
  FormInputStyled,
  FormOption,
  FormTitle,
  SignInForm,
} from "./RegistrationElements";

const SignUp = () => {
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      /* .max(15, "Must be 15 characters or less") */
      .required("Введите требуемое значение"),
    password: Yup.string().required("Введите требуемое значение"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Пароли должны быть одинаковыми")
      .required("Введите требуемое значение"),
    email: Yup.string()
      .email("Некорректный формат email")
      .required("Введите требуемое значение"),
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
        <FormTitle>Регистрация</FormTitle>
        <form onSubmit={formik.handleSubmit}>
          <FormInputStyled>
            <label htmlFor="name">Имя и Фамилия</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}
          </FormInputStyled>

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
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
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

          <FormInputStyled>
            <label htmlFor="confirmPassword">Подтвердите пароль</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div>{formik.errors.confirmPassword}</div>
            ) : null}
          </FormInputStyled>

          <FormButton type="submit">Зарегистрироваться</FormButton>
        </form>

        <FormOption>
          Уже есть аккаунт? <Link href="/signin"> Войти </Link>
        </FormOption>
        <Disclaimer>
          Нажимая "Зарегистрироваться", вы соглашаетесь с Правилами сервиса
        </Disclaimer>
      </SignInForm>
    </>
  );
};

export default SignUp;

{
  /* <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          <Form>
            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>;
        }}
      </Formik> */
}
