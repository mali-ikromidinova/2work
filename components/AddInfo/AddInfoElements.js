import styled from "styled-components";
import Link from "next/link";
import { COLORS } from "../../styles/globalStyles";

export const AddInfoWrap = styled.div`
  background-color: ${COLORS.white};
  border-radius: 24px;
  padding: 32px;
  width: 25%;
`;
export const AddInfoContent = styled.div``;
export const AddInfoTitle = styled.h3`
  font-weight: 600;
  font-size: 24px;
  color: #bdbdbd;
`;
export const AddInfoMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.5rem;
  margin-top: 2rem;
`;
export const AddInfoLink = styled(Link)``;
export const AddInfoAnchor = styled.a`
  font-weight: 400;
  font-size: 16px;
  text-decoration: none;
  color: ${COLORS.text};
  transition: all 0.5s ease-in;
  cursor: pointer;
  &:hover {
    color: ${COLORS.primary};
    transition: all 0.5s ease-inn;
  }
`;
