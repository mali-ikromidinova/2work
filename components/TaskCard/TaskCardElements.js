import styled from "styled-components";
import { COLORS } from "../../styles/globalStyles";

export const TaskCardWrapper = styled.div`
  background-color: ${COLORS.white};
  border-radius: 24px;
  padding: 32px 28px 4rem;
  width: 100%;
`;
export const TaskCardContent = styled.div``;
export const TaskCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.3rem;
`;
export const TaskIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  svg {
    stroke: #828282;
    font-size: 26px;
  }
`;
export const TaskCardTitle = styled.h4`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: ${COLORS.text};
`;
export const TaskCardLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${COLORS.primary};
  margin-bottom: 2rem;
  svg {
    stroke: ${COLORS.primary};
    fill: ${COLORS.primary};
    font-size: 20px;
  }
`;
export const TaskCardDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 4rem;
  margin-bottom: 2rem;
`;
export const TaskCardCost = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${COLORS.text};
  padding: 12px 24px;
  border-radius: 8px;
  background-color: #fff1a6;
`;
export const TaskCardTiming = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #828282;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;
  svg {
    fill: #828282;
    font-size: 20px;
  }
`;
export const TaskDescr = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  color: ${COLORS.text};
  span {
    display: block;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-transform: uppercase;
    color: #828282;
    margin-bottom: 8px;
  }
`;
