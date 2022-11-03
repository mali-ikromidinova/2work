import styled from "styled-components";
import { COLORS } from "../../styles/globalStyles";
import Image from "next/image";

export const PerfomersSection = styled.section`
  padding: 40px 0;
  margin: 40px 0;
`;
export const PerfomersContent = styled.div`
  display: block;
`;
export const PerfomersWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const PerfomersBlockContent = styled.div`
  background-color: ${COLORS.white};
  border-radius: 24px;
  padding: 32px 40px;
`;
export const PerfomersBlockTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #bdbdbd;
  margin-bottom: 32px;
`;
export const PerfomersItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  margin: 16px 0;
`;
export const PerfomerImg = styled(Image)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;
export const PerfomerDetails = styled.div`
  display: block;
`;
export const PerfomerName = styled.h4`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${COLORS.text};
  margin-bottom: 8px;
  span {
    margin-left: 8px;
  }
`;
export const PerfomerJob = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #828282;
  margin-bottom: 8px;
`;
export const PerfomerLocation = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #828282;
`;
