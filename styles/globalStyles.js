import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const COLORS = {
  text: "#242424",
  greyText: "#5E6D55",
  background: "#F5F5F7",
  primary: "#7CC300",
  white: "#fff",
  hovered: "#5D9200",
};

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing:  border-box;
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
        color: ${COLORS.text};
    }
    body {
      background-color: ${COLORS.background};
    }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1920px;
  width: 85%;
`;

export const SectionTitle = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: ${({ light }) => (light ? "#FFF" : "#242424")};
  margin-bottom: ${({ small }) => (small ? "20px" : "40px")};
  text-align: ${({ center }) => (center ? "center" : "left")};
`;

export const SectionSubtitle = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  text-align: center;
  color: ${COLORS.text};
`;
