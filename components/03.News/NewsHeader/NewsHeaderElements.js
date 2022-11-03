import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { COLORS } from "../../../styles/globalStyles";

export const NewsHeaderContent = styled.div``;
export const NewsNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;
export const NewsLogo = styled(Image)``;
export const NewsItem = styled(Link)``;
export const NewsItemLink = styled.a`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: ${COLORS.text};
  text-decoration: none;
`;

export const NewsNavbarList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;
