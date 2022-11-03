import styled from "styled-components";
import Link from "next/link";
import { COLORS } from "../../styles/globalStyles";

export const JobCategorySection = styled.section`
  width: 75%;
  margin: 40px 0;
`;
export const JobCategoryContent = styled.div``;
export const CategoryTitle = styled.h3`
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 4rem;
  span {
    color: ${COLORS.primary};
  }
`;
export const CategoryWrapper = styled.div`
  display: flex;
  align-items: start;
  flex-wrap: wrap;
  gap: 2rem;
`;
export const CategoryItem = styled.div`
  width: 45%;
`;
export const CategoryLink = styled(Link)``;
export const CategoryType = styled.a`
  display: block;
  font-weight: 600;
  font-size: 22px;
  color: ${COLORS.text};
  text-decoration: none;
  margin-bottom: 8px;
  transition: all 0.5s ease-in;
  &:hover {
    color: ${COLORS.primary};
    transition: all 0.5s ease-in;
  }
`;
export const CategoryOffers = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #828282;
`;
