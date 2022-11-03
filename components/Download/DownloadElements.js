import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { COLORS } from "../../styles/globalStyles";

export const DownloadSec = styled.section`
  margin: 100px 0 40px;
  padding: 36px 100px;
  background: linear-gradient(273.58deg, #71b280 0%, #134e5e 100%);
  border-radius: 24px;
  position: relative;
`;
export const DownloadContent = styled.div`
  display: block;
  width: 50%;
`;
export const DownloadWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 32px;
`;
export const DownloadIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${COLORS.white};
  border-radius: 16px;
  padding: 8px;
  width: 100px;
  height: 100px;
`;
export const DownloadStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
`;
export const DownloadStatsBlock = styled.div`
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;
  color: ${COLORS.white};
  text-align: center;
  padding-right: 30px;
  border-right: 1px solid ${COLORS.white};
  &:nth-of-type(2) {
    border-right: none;
  }
`;
export const DownloadDescr = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${COLORS.white};
  margin: 20px 0 40px 0;
`;
export const DownloadButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
export const Button = styled.button`
  background-color: transparent;
  border: 1.18421px solid rgba(255, 255, 255, 0.33);
  border-radius: 12px;
  padding: 12px 24px;
`;
export const ButtonLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.white};
`;

export const ButtonLinkWrap = styled.div`
  text-decoration: none;
  color: ${COLORS.white};
  font-size: 16px;
  display: flex;
  gap: 6px;
  cursor: pointer;
`;
export const DownloadPicWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 100px;
  height: 120%;
  width: 410px;
`;
export const DownloadPic = styled(Image)`
  display: block;
`;
export const DownloadQr = styled.div`
  background-color: ${COLORS.white};
  width: 140px;
  height: 140px;
  border-radius: 100%;
  position: absolute;
  bottom: 40px;
  right: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 60%;
  }
`;
