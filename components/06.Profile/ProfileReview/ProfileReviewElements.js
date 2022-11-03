import styled from "styled-components";
import { COLORS } from "../../../styles/globalStyles";

export const Section = styled.div`
  background-color: ${COLORS.white};
  border-radius: 24px;
  padding: 40px;
  width: 75%;
`;
export const Wrapper = styled.div``;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
`;
export const ReviewCard = styled.div`
  width: 100%;
  padding: 1rem 0 2rem;
  &:not(:last-child) {
    border-bottom: 1px solid #e0e0e0;
  }
`;
export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.6rem;
`;
export const CardHeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
export const CardHeaderDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
`;
export const Job = styled.h4`
  font-weight: 600;
  font-size: 18px;
  margin: 0 !important;
`;
export const Date = styled.p`
  font-weight: 500;
  font-size: 12px;
  color: #828282;
`;
export const Author = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: #828282;
`;
export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.3;
`;
