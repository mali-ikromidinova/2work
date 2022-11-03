import styled from "styled-components";
import Link from "next/link";
import { COLORS } from "../../../styles/globalStyles";

export const SocialIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 12px 0 0 12px;
`;
export const SocialIcon = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SocialIconLink = styled(Link)``;
export const SocialIconAnchor = styled.a`
  text-decoration: none;
  color: ${COLORS.white};
  font-size: 28px;
`;
