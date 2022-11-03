import styled from "styled-components";
import { COLORS } from "../../../styles/globalStyles";
import Image from "next/image";

export const InfoSec = styled.section`
  margin: 40px 0;
  padding: 40px 0;
`;
export const InfoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 7rem;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: ${({ imgStart }) => (imgStart ? "row" : "row-reverse")};
  gap: 3rem;
`;
export const InfoImg = styled(Image)`
  border-radius: 24px;
  width: 50%;
`;
export const InfoTextWrapper = styled.div`
  display: flex;
  align-items: ${({ imgStart }) => (imgStart ? "start" : "flex-end")};
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
  width: 40%;
`;
export const InfoTitle = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: ${COLORS.text};
  margin-bottom: 2rem;
`;
export const InfoDescr = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${COLORS.text};
  text-align: ${({ imgStart }) => (imgStart ? "left" : "right")};
  margin-bottom: 3rem;
`;
export const InfoPerfomer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 1rem;
`;
export const InfoIcon = styled(Image)`
  border-radius: 100%;
`;
export const InfoName = styled.h4`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: ${COLORS.text};
`;
export const InfoText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${COLORS.text};
  text-align: ${({ imgStart }) => (imgStart ? "left" : "right")};
  margin-bottom: 2rem;
`;
