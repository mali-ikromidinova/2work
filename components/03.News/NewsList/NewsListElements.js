import styled from "styled-components";
import Image from "next/image";
import { COLORS } from "../../../styles/globalStyles";

export const NewsListSection = styled.section`
  padding: 120px 0;
  position: relative;
`;
export const NewsListContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 4rem;
`;
export const NewsItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 3rem;
`;
export const NewsImage = styled(Image)`
  border-radius: 24px;
`;
export const NewsItemInfo = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  gap: 4rem;
  width: 50%;
`;
export const NewsItemTitle = styled.h4`
  font-weight: 700;
  font-size: 32px;
  line-height: 1.3;
  color: #242424;
`;
export const NewsItemText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.3;
  color: #828282;
`;
export const SocialIconsFixed = styled.div`
  position: fixed;
  right: 0;
`;

export const NewsSelected = styled.div``;
export const NewsSelectedContent = styled.div``;
export const NewsSelectedImage = styled(Image)``;
export const NewsSelectedText = styled.div`
  font-size: 18px;
  line-height: 1.4;
  color: ${COLORS.text};
  p {
    font-weight: 400;
    margin-bottom: 1rem;
  }
  span {
    font-weight: 600;
    margin-bottom: 1rem;
  }
`;
export const NewsSelectedTitle = styled.h3`
  font-weight: 700;
  font-size: 32px;
  line-height: 1.2;
  color: ${COLORS.text};
`;
