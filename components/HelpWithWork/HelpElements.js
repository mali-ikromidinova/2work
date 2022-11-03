import styled from "styled-components";
import { COLORS } from "../../styles/globalStyles";
const HelpBg = "/images/main_screen/girl.jpg";

export const HelpSection = styled.section`
  padding: 40px 0;
  margin: 40px 0;
`;

export const HelpWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
`;
export const HelpCards = styled.div`
  width: 50%;
`;
export const HelpInfo = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.6) 70.44%
    ),
    url(${HelpBg});
  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 50%;
  height: 600px;
  border-radius: 24px;
`;
export const HelpInfoBlock = styled.div`
  position: absolute;
  bottom: 10%;
  left: 5%;
`;
export const HelpInfoFlag = styled.div`
  display: inline-block;
  background: #ffd60a;
  border-radius: 50px;
  padding: 8px 18px;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: ${COLORS.text};
`;
export const HelpInfoTitle = styled.h3`
  font-weight: 700;
  font-size: 38px;
  line-height: 58px;
  color: ${COLORS.white};
  margin: 18px 0 12px;
`;
export const HelpInfoDescr = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 29px;
  color: ${COLORS.white};
  margin-bottom: 18px;
`;
