import styled from "styled-components";
import Image from "next/image";
import { COLORS } from "../../styles/globalStyles";

export const ContactsSection = styled.section`
  padding: 40px;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ContactsContent = styled.div`
  padding: 40px;
  border-radius: 24px;
  background-color: ${COLORS.white};
  width: 50%;
`;
export const ContactsWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`;
export const Logo = styled(Image)`
  margin-bottom: 3rem;
`;
export const ContactsItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  a {
    font-weight: 600;
    font-size: 18px;
    line-height: 1.4;
    color: ${COLORS.text};
    transition: all 0.5s;
    &:hover {
      color: ${COLORS.primary};
      transition: all 0.5s;
    }
  }
`;
export const ContactsIcon = styled(Image)``;
export const ContactsFormBox = styled.div`
  background-color: ${COLORS.white};
  padding: 40px;
  border-radius: 24px;
  width: 50%;
`;
