import styled from "styled-components";
import { COLORS } from "../../styles/globalStyles";
import Link from "next/link";
import Image from "next/image";

export const FooterSec = styled.section`
  background-color: ${({ forms }) =>
    forms ? "rgba(36, 36, 36, 0.8)" : "#242424"};
  padding: 70px 0 45px;
`;
export const FooterContent = styled.div``;
export const FooterWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
`;
export const FooterBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  gap: 2rem;
`;
export const FooterLogoLink = styled(Link)`
  text-decoration: none;
`;
export const FooteLogo = styled(Image)`
  display: block;
`;
export const FooterInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 12px;
`;
export const FooteInfo = styled(Link)`
  text-decoration: none;
  span {
    color: ${COLORS.primary};
  }
`;
export const FooterInfoWrap = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-decoration: none;
  color: ${COLORS.white};
  cursor: pointer;
  span {
    color: ${COLORS.primary};
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      text-decoration: underline;
      transition: all 0.5s;
    }
  }
`;
export const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 18px;
`;
export const FooterNavItem = styled(Link)`
  text-decoration: none;
`;
export const FooterNavLink = styled.a`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  text-decoration: none;
  color: #d4d4d4;
  transition: all 0.5s;
  &:hover {
    color: ${COLORS.primary};
    transition: all 0.5s;
  }
`;

export const FooterList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 18px;
`;
export const FooterListTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: #d4d4d4;
`;
export const FooterListItem = styled(Link)`
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-decoration: none;
  color: #d4d4d4;
`;
export const FooterSocial = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;
export const FooterSocialItem = styled.div`
  border: 1px solid #444753;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  svg {
    fill: #7a7d8c;
    font-size: 22px;
  }
`;
export const FooterContacts = styled.div``;
export const FooterLink = styled.a`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #d4d4d4;
  text-decoration: none;
  margin-bottom: 4px;
  transition: all 0.5s;
  &:hover {
    color: ${COLORS.primary};
    transition: all 0.5s;
  }
`;
export const FooterText = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #828282;
`;
export const FooterLine = styled.hr`
  border: 1px solid rgba(140, 140, 140, 0.45);
  margin: 3rem 0;
`;
export const WebsiteRights = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const WebsiteRightsBlock = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #bdbdbd;
`;
export const WebsiteRightsLink = styled(Link)``;

export const WebsiteRightsAnchor = styled.a`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.02em;
  text-decoration: none;
  color: ${COLORS.white};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.5s;
  &:hover {
    color: ${COLORS.primary};
    transition: all 0.5s;
  }
`;
