import styled from "styled-components";
import { COLORS } from "../../styles/globalStyles";
import Image from "next/image";

export const FeaturesSection = styled.section`
  margin: 40px 0;
`;
export const FeaturesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;
export const FeaturesCard = styled.div`
  background-color: ${COLORS.white};
  border-radius: 24px;
  padding: 34px 22px;
  width: 70%;
`;
export const FeaturesCardWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;
export const FeaturesCardImg = styled(Image)`
  display: block;
  width: 250px;
  height: 250px;
`;
export const FeaturesStats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;
export const FeaturesStatsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const FeaturesStatsText = styled.h3`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.2;
  color: ${COLORS.text};
  span {
    font-weight: 600;
    font-size: 20px;
    line-height: 1.2;
    color: ${COLORS.greyText};
  }
`;
export const FeaturesStatsDemo = styled(Image)`
  width: 130px;
`;
export const FeaturesPromo = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${COLORS.white};
  border-radius: 24px;
  padding: 22px;
  padding-bottom: 0;
`;
export const FeaturesPromoText = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-align: center;
  color: ${COLORS.text};
`;
export const FeaturesPromoImg = styled(Image)`
  display: block;
  margin: 0 auto;
  width: 200px;
  height: 200px;
`;

export const FeaturesStatsNums = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
`;
export const StatsCard = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 30%;
  border-right: 2px solid rgba(189, 189, 189, 0.3);
  &:nth-of-type(3) {
    border-right: none;
  }
`;
export const StatsCardTitle = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: ${COLORS.text};
`;
export const StatsCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  gap: 12px;
`;
export const StatsIcon = styled(Image)`
  display: block;
  width: 20px;
  height: 20px;
`;
export const StatsDescr = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #828282;
`;
