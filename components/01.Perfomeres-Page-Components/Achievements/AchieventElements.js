import styled from "styled-components";
import { COLORS } from "../../../styles/globalStyles";
import Image from "next/image";

export const AchievementSec = styled.section`
  padding: 40px 0;
  margin: 40px 0;
`;
export const AchievementContent = styled.div``;
export const AchievementCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 7rem;
  margin-top: 6rem;
`;

export const AchievementCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: ${({ imgStart }) => (imgStart ? "row" : "row-reverse")};
  gap: 3rem;
`;
export const AchievementImg = styled(Image)`
  border-radius: 24px;
  width: 50%;
`;
export const AchievementTextWrap = styled.div`
  display: flex;
  align-items: ${({ imgStart }) => (imgStart ? "start" : "flex-end")};
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
  width: 40%;
`;
export const AchievementAuthor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row" : "row-reverse")};
  gap: 8px;
`;
export const AchievementIcon = styled(Image)`
  border-radius: 100%;
`;
export const AchievementAuthorInfo = styled.div`
  p {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: ${COLORS.text};
    text-align: ${({ imgStart }) => (imgStart ? "left" : "right")};
  }
`;
export const AchievementText = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: ${({ imgStart }) => (imgStart ? "left" : "right")};
`;
export const AchievementSalary = styled.div`
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  /* text-align: ${({ imgStart }) => (imgStart ? "left" : "right")}; */
`;
export const AchievementInfo = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: ${({ imgStart }) => (imgStart ? "left" : "right")};
  margin-bottom: 1.5rem;
`;
