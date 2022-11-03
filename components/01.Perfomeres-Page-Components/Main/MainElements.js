import styled from "styled-components";
import { COLORS } from "../../../styles/globalStyles";
const MainBgPic = "/images/perfomers-page/main.jpg";

export const MainSection = styled.section``;
export const MainBanner = styled.div`
  height: 70vh;
  background-image: url(${MainBgPic});
  background-size: cover;
  background-position: center;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const MainTitle = styled.h1`
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  color: ${COLORS.white};
  text-align: center;
  margin-bottom: 40px;
`;
export const MainSubtitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: ${COLORS.white};
`;
