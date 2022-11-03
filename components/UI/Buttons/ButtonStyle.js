import styled from "styled-components";
import { COLORS } from "../../../styles/globalStyles";
import Link from "next/link";

export const Btn = styled.button`
  padding: 16px 32px;
  border-radius: 100px;
  border: none;
  outline: none;
  padding: 12px 18px;
  background-color: ${COLORS.primary};
  cursor: pointer;
  transition: all 0.5s ease-in;
  &:hover {
    background-color: ${COLORS.hovered};
    transition: all 0.5s ease-in;
  }
  &:hover > a {
    color: ${COLORS.white};
  }
`;
export const BtnLink = styled(Link)`
  text-decoration: none;
`;
export const BtnLinkStyled = styled.a`
  padding: 16px 32px;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  color: #fff;
  text-decoration: none;
`;
