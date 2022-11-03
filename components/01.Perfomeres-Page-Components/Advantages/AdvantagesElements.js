import styled from "styled-components";
import { COLORS } from "../../../styles/globalStyles";
import Image from "next/image";

export const AdvantagesSec = styled.section`
  margin: 40px 0;
  padding: 40px 0;
`;
export const AdvantagesContent = styled.div``;
export const AdvantagesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;
export const AdvantagesItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
export const AdvantagesImg = styled(Image)`
  display: block;
  margin: 0 auto;
`;
export const AdvantagesText = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 130%;
  text-align: center;
  color: ${COLORS.text};
`;
