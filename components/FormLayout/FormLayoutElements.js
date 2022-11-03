import styled from "styled-components";
const formBg = "/images/registrationBg.jpg";

export const FormLayoutContainer = styled.div`
  background-image: url(${formBg});
  background-size: cover;
  object-fit: cover;
  background-position: center center;
  height: 100%;
`;
export const FormLayoutBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
