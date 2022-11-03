import styled from "styled-components";
import Image from "next/image";
import { COLORS } from "../../../styles/globalStyles";

export const ProfileSidebarBox = styled.div`
  background-color: ${COLORS.white};
  border-radius: 24px;
  padding: 24px;
  width: 30%;
`;
export const ProfileSidebarContent = styled.div``;
export const ProfileSidebarNav = styled.nav`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;
export const ProfileSidebarItem = styled.div`
  background-color: ${({ active }) =>
    active ? "rgba(124, 195, 0, 0.1)" : "#fff"};
  width: 100%;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 16px;
  transition: all 0.5s ease-in;
  cursor: pointer;

  &:hover {
    background-color: rgba(124, 195, 0, 0.1);
    transition: all 0.5s ease-in;
  }
`;
export const ProfileSidebarImage = styled(Image)``;
export const ProfileSidebarText = styled.div`
  font-weight: 500;
  font-size: 16px;
`;
