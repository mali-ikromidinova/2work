import styled from "styled-components";
import { COLORS } from "../../styles/globalStyles";

export const AboutSec = styled.section`
  margin: 0 0 80px;
  padding: 40px;
  border-radius: 24px;
  background-color: ${COLORS.white};
`;
export const AboutContent = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${COLORS.text};
  span {
    color: ${COLORS.primary};
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      text-decoration: underline;
      transition: all 0.5s;
    }
  }
`;
