import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { COLORS } from "../../styles/globalStyles";
import { Input } from "semantic-ui-react";
import { Dropdown } from "semantic-ui-react";

export const HeaderSection = styled.section`
  background-color: ${COLORS.white};
  padding: 16px 0;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const HeaderLogoLink = styled(Link)`
  display: block;
`;
export const HeaderLogo = styled(Image)`
  display: block;
`;
/* export const HeaderSearch = styled.input`
  width: 600px;
  border: 1px solid #e0e0e0;
  border-radius: 100px;
  padding: 12px 24px;
  outline: none;
`; */
export const HeaderNav = styled.nav`
  display: block;
`;
export const HeaderNavList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;
export const HeaderNavItem = styled(Link)`
  text-decoration: none;
`;
export const HeaderNavItemIcon = styled(Image)`
  display: block;
`;
export const StyledInput = styled(Input)`
  width: 600px;
  border-radius: 100px;
  outline: none;
  .ui.input {
    border-radius: 100px;
  }
`;
export const DropdownStyled = styled(Dropdown)``;
