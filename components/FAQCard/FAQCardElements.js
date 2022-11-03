import styled from "styled-components";
import { COLORS } from "../../styles/globalStyles";
import Link from "next/link";

export const FAQCardWrapper = styled.div`
  background-color: ${COLORS.white};
  border-radius: 24px;
  padding: 40px;
  /* width: 25%; */
  width: 100%;
`;
export const FAQCardContent = styled.div``;
export const FAQCardTitle = styled.h4`
  font-weight: 600;
  font-size: 24px;
  color: #bdbdbd;
  margin-bottom: 2rem !important;
`;
export const FAQCardList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 24px;
`;
export const FAQCardLink = styled(Link)``;
export const FAQCardItem = styled.a`
  font-weight: 400;
  font-size: 16px;
  color: ${COLORS.text};
  text-decoration: none;
  transition: all 0.5s ease-in;
  &:hover {
    color: ${COLORS.primary} !important;
    transition: all 0.5s ease-in;
  }
`;
