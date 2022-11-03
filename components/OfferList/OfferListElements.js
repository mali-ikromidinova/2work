import styled from "styled-components";
import { COLORS } from "../../styles/globalStyles";
import Image from "next/image";
import Link from "next/link";

export const OfferListSec = styled.div`
  background-color: ${COLORS.white};
  border-radius: 24px;
  padding: 32px;
`;
export const OfferSecTitle = styled.h3`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 3rem !important;
  span {
    color: #bdbdbd;
    font-weight: 400;
  }
`;
export const OfferItemLink = styled(Link)``;
export const OfferItemAnchor = styled.a`
  display: block;
  width: 100%;
  padding: 12px;
  text-decoration: none;
  cursor: pointer;
  transition: 0.5s all ease-in;
  border-radius: 16px;
  &:hover {
    box-shadow: 0.5px 0.3px 3px 0px rgba(0, 0, 0, 0.75);
    transition: 0.5s all ease-in;
  }
`;

export const OfferListContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  gap: 2rem;
`;
export const OfferItemCard = styled.div`
  width: 100%;
`;
export const OfferItemContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;
export const OfferItemWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: flex-start;
  gap: 1rem;
  width: 70%;
`;
export const OfferItemImage = styled(Image)``;
export const OfferItemText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  width: 80%;
`;
export const OfferItemAuthor = styled.h4`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 0;
`;
export const OfferItemReviews = styled.div`
  display: flex;
  align-items: start;
  gap: 16px;
  margin-bottom: 1rem;
`;
export const OfferItemStars = styled.img``;
export const OfferItemReviewNums = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #bdbdbd;
`;
export const OfferItemDescr = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #828282;
`;
export const OfferItemCost = styled.div`
  padding: 12px;
  background: ${COLORS.primary};
  border-radius: 16px;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  color: ${COLORS.white};
`;
