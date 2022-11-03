import styled from "styled-components";
import Image from "next/image";
import { COLORS } from "../../styles/globalStyles";

export const EmployerCard = styled.div`
  background-color: ${COLORS.white};
  border-radius: 24px;
  padding: 40px;
  width: 100%;
`;
export const EmployerCardContent = styled.div``;
export const EmployerCardTitle = styled.h4`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 1rem;
`;
export const EmployerCardWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;
export const EmployerImage = styled(Image)`
  border-radius: 100%;
`;
export const EmployerInfo = styled.div`
  display: flex;
  align-items: start;
  gap: 4px;
  flex-direction: column;
  p {
    margin-bottom: 0;
  }
`;
export const EmployerName = styled.p`
  font-weight: 600;
  font-size: 16px;
`;
export const EmployerLocation = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #828282;
`;
export const EmployerReviews = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #828282;
`;
export const EmployerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
export const EmployerBtn = styled.button`
  background-color: ${COLORS.primary};
  border: none;
  outline: none;
  border-radius: 100px;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    font-weight: 700;
    font-size: 15px;
    text-align: center;
    color: ${COLORS.white};
    text-decoration: none;
  }
`;
export const EmployerBtnTransparent = styled(EmployerBtn)`
  border: 1px solid ${COLORS.primary};
  background-color: transparent;
  a {
    /* font-weight: 700;
    font-size: 15px;
    text-align: center;
    text-decoration: none; */
    color: ${COLORS.primary};
  }
`;
