import styled from "styled-components";
import { COLORS } from "../../../styles/globalStyles";
import Image from "next/image";

export const ReturnedBox = styled.div`
  background-color: ${COLORS.white};
  width: 100%;
  padding: 24px 40px;
  border-radius: 24px;
`;
export const ReturnedProfilePic = styled(Image)``;
export const ReturnedWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 3rem;
`;
export const ReturnedContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ReturnedText = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
`;
export const ReturnedTitle = styled.h4`
  font-weight: 400;
  font-size: 24px;
`;
export const ReturnedReviews = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const ReturnedPersonDetails = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  p {
    font-weight: 400;
    font-size: 16px;
    color: #bdbdbd !important;
  }
`;
export const ReviewStars = styled(Image)``;
