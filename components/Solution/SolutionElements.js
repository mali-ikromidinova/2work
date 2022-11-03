import styled from "styled-components";
import { COLORS } from "../../styles/globalStyles";
import Image from "next/image";
const check = "/images/icons/check.svg";

export const Section = styled.div`
  background-color: ${COLORS.white};
  border-radius: 24px;
  padding: 45px;
  margin: 40px 0;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 2rem;
`;
export const SolutionBlock = styled.div`
  width: 50%;
  height: auto;
  &:last-child {
    margin-bottom: 3rem;
  }
`;
export const SolutionWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 3rem;
`;
export const SolutionText = styled.div``;
export const SolutionImage = styled(Image)`
  border-radius: 16px;
`;
export const Title = styled.h3`
  font-weight: 600;
  font-size: 32px;
`;
export const SolutionPara = styled.p`
  font-weight: 400;
  font-size: 20px;
  display: flex;
  align-items: center;
  &:before {
    content: url("/images/icons/check.svg");
    width: 27px;
    height: 27px;
    margin-right: 3rem;
  }
`;
export const CitationBlock = styled.div`
  background: rgba(124, 195, 0, 0.1);
  border-radius: 24px;
  padding: 60px 32px 32px;
  width: 50%;
`;
export const CitationSign = styled.div`
  font-weight: 600;
  font-size: 128px;
  color: ${COLORS.hovered};
`;
export const Citation = styled.div`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 1.5rem;
  line-height: 1.3;
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.4;
    margin: 0;
    margin-bottom: 8px !important;
  }
`;
