import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FormButton,
  FormInputStyled,
  FormSubtitle,
  FormTitle,
  SignInForm,
} from "./RegistrationElements";

const RegistrationSMS = () => {
  const initialValues = {
    code: "",
  };

  const validationSchema = Yup.object({
    code: Yup.string().required("Введите требуемое значение"),
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
        <FormSubtitle>
          Вы успешно зарегистрировались. Для активации аккаунта введите код из
          смс
        </FormSubtitle>
        <form onSubmit={formik.handleSubmit}>
          <FormInputStyled>
            <label htmlFor="code">SMS код</label>
            <input
              id="code"
              name="code"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.code}
            />
            {formik.touched.code && formik.errors.code ? (
              <div>{formik.errors.code}</div>
            ) : null}
          </FormInputStyled>

          <FormButton type="submit">Продолжить</FormButton>
        </form>
      </SignInForm>
    </>
  );
};

export default RegistrationSMS;
