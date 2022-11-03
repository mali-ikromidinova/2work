import styled from "styled-components";
import { COLORS } from "../../styles/globalStyles";
import Image from "next/image";

export const BenefitCardsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  flex-wrap: wrap;
  width: 100%;
`;

export const BenefitCard = styled.div`
  background: ${COLORS.white};
  border-radius: 24px;
  padding: 32px 24px;
  width: 275px;
  height: 295px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
export const BenefitCardImg = styled(Image)`
  display: block;
`;
export const BenefitCardTitle = styled.h3`
  font-weight: 600;
  font-size: 22px;
  line-height: 24px;
  text-align: center;
  color: ${COLORS.text};
  margin: 32px 0;
`;
export const BenefitCardDescr = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  text-align: center;
  color: #828282;
`;
