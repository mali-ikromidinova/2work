import styled from "styled-components";
import { COLORS } from "../../styles/globalStyles";

export const SignInForm = styled.div`
  background-color: ${COLORS.white};
  padding: 40px;
  margin: 50px 0;
  border-radius: 24px;
  width: 480px;
`;

export const FormInputsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  div {
    width: 50%;
  }
`;

export const FormInputStyled = styled.div`
  position: relative;
  margin-bottom: 20px;
  div {
    margin-top: 8px;
    color: ${COLORS.primary};
  }
  input,
  textarea {
    display: block;
    width: 100%;
    border: 1px solid #e0e0e0;
    border-radius: 16px;
    padding: 16px;
    font-weight: 500;
    font-size: 15px;
    outline: none;
    &:focus {
      outline: 1px solid ${COLORS.primary};
    }
  }
  label {
    position: absolute;
    font-weight: 400;
    font-size: 14px;
    color: #c0c0c0;
    top: -8px;
    z-index: 24;
    background: ${COLORS.white};
    left: 19px;
  }
  textarea {
    resize: none;
  }
`;

export const FormTitle = styled.h4`
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  margin-bottom: 0.8em;
`;

export const FormSubtitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  text-align: center;
`;

export const FormButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 48px;
  background: ${COLORS.primary};
  border-radius: 16px;
  outline: none;
  border: none;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  color: ${COLORS.white};
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    background-color: ${COLORS.hovered};
  }
`;

export const FormOption = styled.p`
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  margin-top: 32px;
  margin-bottom: 16px;
  a {
    color: ${COLORS.primary};
    text-decoration: underline;
    transition: all 0.5s;
    &:hover {
      text-decoration: none;
      transition: all 0.5s;
    }
  }
`;

export const Disclaimer = styled.p`
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: #bdbdbd;
`;
