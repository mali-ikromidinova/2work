import styled from "styled-components";
import { COLORS } from "../../styles/globalStyles";
import Link from "next/link";

export const SidebarSec = styled.section`
  width: 30%;
  background-color: ${COLORS.white};
  border-radius: 24px;
  padding: 24px;
  min-height: 760px;
  overflow: auto;
`;
export const SidebarContent = styled.div`
  display: block;
`;
export const SidebarTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 16px;
  color: ${COLORS.text};
`;
export const SidebarNav = styled.nav`
  margin-top: 24px;
`;

export const SidebarNavItem = styled.div`
  display: flex;
  align-items: start;
  justify-content: flex-start;
  flex-direction: column;
`;
export const SidebarNavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  padding: 16px 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: ${COLORS.text};
  svg {
    font-size: 18px;
    cursor: pointer;
  }
`;
export const SidebarIcon = styled.div`
  width: 23px;
  height: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ checked }) => (checked ? "#7CC300" : "#fff")};
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  transition: all 0.3s ease-in;
  /* pointer-events: none; */
  svg {
    fill: ${COLORS.white};
  }
`;
export const SidebarSubmenu = styled.div`
  margin-left: 2em;
`;
export const SidebarSubItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  padding: 16px 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: ${COLORS.text};
`;

export const SidebarLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;
  border-radius: 16px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  color: ${COLORS.text};
  font-weight: 600;
  font-size: 16px;
  transition: ease-in;
  transition: 0.3s ease-in;
  &:hover {
    background-color: rgba(124, 195, 0, 0.3);
    transition: 0.3s ease-in;
    cursor: pointer;
  }
`;

export const SidebarLabel = styled.span`
  margin-left: none;
`;

export const DropdownLink = styled.div`
  background: ${COLORS.white};
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${COLORS.text};
  font-weight: 600;
  font-size: 16px;
  &:hover {
    background-color: rgba(124, 195, 0, 0.3);
    transition: 0.3s ease-in;
    cursor: pointer;
  }
`;

export const SidebarLinkWrap = styled.div`
  display: flex;
  /* align-items: center; */
  gap: 12px;
  justify-content: start;
  align-items: center;
  padding: 20px;
  padding-left: 0;
  border-radius: 16px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  color: ${COLORS.text};
  font-weight: 600;
  font-size: 16px;
  transition: 0.3s ease-in;
  /* &:hover {
    background-color: rgba(124, 195, 0, 0.3);
    transition: 0.3s ease-in;
    cursor: pointer;
  } */
`;
