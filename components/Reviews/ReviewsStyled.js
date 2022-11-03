import styled from "styled-components";
import { COLORS } from "../../styles/globalStyles";
import Image from "next/image";

export const ReviewsSection = styled.section``;
export const ReviewsContent = styled.div``;
export const ReviewsList = styled.div``;
export const ReviewCard = styled.div`
  background: ${COLORS.white};
  border-radius: 24px;
  padding: 24px 16px;
`;
export const ReviewTitle = styled.h4`
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: ${COLORS.text};
  margin-bottom: 0.5em;
`;
export const ReviewFound = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #828282;
  margin-bottom: 1.5em;
`;
export const ReviewSalary = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: ${COLORS.text};
  margin-bottom: 1em;
`;
export const ReviewText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  color: ${COLORS.text};
  margin-bottom: 0.5em;
`;
export const ReviewDate = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #828282;
  margin-bottom: 2em;
`;
export const ReviewedPerfomer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const ReviewedPic = styled(Image)``;
export const ReviewedData = styled.div``;
export const ReviewedName = styled.h4`
  font-weight: 400;
  font-size: 16px;
  line-height: 15px;
  color: ${COLORS.text};
`;
export const ReviewedRating = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: ${COLORS.text};
  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #828282;
  }
`;
export const ReviewScore = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: ${COLORS.text};
`;
