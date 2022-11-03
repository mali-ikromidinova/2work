import Footer from "../Footer";
import Header from "../Header";
import { FormLayoutBox, FormLayoutContainer } from "./FormLayoutElements";

const FormLayout = ({ children }) => {
  return (
    <FormLayoutContainer>
      <Header />
      <FormLayoutBox>{children}</FormLayoutBox>
      <Footer forms />
    </FormLayoutContainer>
  );
};

export default FormLayout;
