import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { COLORS } from "../../../styles/globalStyles";

export const ProfileInfoBox = styled.div`
  background-color: ${COLORS.white};
  border-radius: 24px;
  padding: 40px;
  width: 75%;
`;
export const ProfileInfoContent = styled.div``;
export const ProfileInfoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4rem;
  margin-bottom: 5rem;
`;
export const ProfileImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

export const ProfilePic = styled(Image)``;
export const ProfilePicChange = styled(Link)``;

export const ProfilePicAnchor = styled.a`
  font-weight: 400;
  font-size: 16px;
  color: #828282;
  text-decoration: none;
  transition: all 0.5s ease-in;
  &:hover {
    transition: all 0.5s ease-in;
    color: ${COLORS.primary};
  }
`;
export const ProfileInfoText = styled.div``;
export const ProfileName = styled.h4`
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 2rem;
`;
export const ProfileDetails = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #bdbdbd;
  margin-bottom: 8px !important;
`;
export const ProfileDescr = styled.div`
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 4rem;
`;
export const ProfileTitle = styled.h4`
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 2rem !important;
`;
export const ProfilePersonal = styled.div``;
export const ProfilePersonalItem = styled.div`
  display: flex;
  align-items: start;
  justify-content: flex-start;
  margin: 10px 0;
  gap: 1rem;
  a {
    font-weight: 400;
    font-size: 16px;
    color: #242424;
    text-decoration: none;
    transition: all 0.5s ease-in;
    &:hover {
      transition: all 0.5s ease-in;
      color: ${COLORS.primary};
    }
  }
`;
export const ProfileVerifyLink = styled(Link)``;
export const ProfileVerifyAnchor = styled.a`
  font-weight: 400;
  font-size: 16px;
  padding-bottom: 3px;
  border-bottom: 1px dashed ${COLORS.primary};
  color: ${COLORS.primary} !important;
  cursor: pointer;
  transition: all 0.5s ease-in;
  &:hover {
    transition: all 0.5s ease-in;
    border-bottom: none;
  }
`;

export const GreyButton = styled.button`
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  padding: 16px 24px;
  background-color: transparent;
  margin-top: 2rem;
`;
export const GreyButtonLink = styled(Link)``;
export const GreyButtonAnchor = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;
  color: #828282;
  transition: all 0.5s ease-in;
  &:hover {
    transition: all 0.5s ease-in;
    color: ${COLORS.primary};
  }
`;
export const GreyButtonImage = styled(Image)``;
