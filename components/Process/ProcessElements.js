import styled from "styled-components";
import { COLORS } from "../../styles/globalStyles";
import Link from "next/link";
import Image from "next/image";

export const ProcessSec = styled.section`
  padding: 40px 0;
  margin: 40px 0;
`;
export const ProcessWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
`;
export const ProcessCard = styled.div`
  background-color: ${COLORS.white};
  border-radius: 24px;
  padding: 24px 24px 0;
  width: 33%;
  height: 50vh;
  position: relative;
`;
export const ProcessCardTitle = styled.h3`
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  text-align: center;
  color: ${COLORS.text};
  margin-bottom: 18px;
`;
export const ProcessDescr = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  text-align: center;
  color: ${COLORS.text};
`;
export const ProcessImg = styled(Image)`
  display: block;
`;
export const ProcessImgWrap = styled.div`
  display: block;
  margin: 28px auto 0;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 55%;
  width: 65%;
`;
export const ProcessHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export const HeaderLink = styled(Link)`
  text-decoration: none;
`;

export const HeaderLinkWrap = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #bdbdbd;
  text-decoration: none;
  display: flex;
  align-items: center;
  svg {
    fill: #bdbdbd;
    font-size: 18px;
    width: 45px;
    height: 26px;
  }
`;
