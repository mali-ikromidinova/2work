import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { COLORS } from "../../../styles/globalStyles";

export const Section = styled.section`
  background-color: ${COLORS.white};
  border-radius: 24px;
  padding: 32px;
  width: 75%;
`;
export const Wrapper = styled.div``;
export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 3rem;
`;
export const NotificationCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
`;
export const CardImage = styled(Image)``;
export const CardWrap = styled.div`
  width: 75%;
`;
export const CardTitle = styled.h4`
  font-weight: 600;
  font-size: 16px;
`;
export const CardInfo = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #828282;
`;
export const CardLink = styled(Link)``;
export const CardAnchor = styled.a`
  color: ${COLORS.primary};
`;
