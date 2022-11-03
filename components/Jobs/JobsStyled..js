import Link from "next/link";
import styled from "styled-components";
import { COLORS } from "../../styles/globalStyles";
import { Dropdown } from "semantic-ui-react";

export const JobsSecContent = styled.section`
  margin-top: 40px;
`;
export const JobCardsWrap = styled.div`
  width: 70%;
  background-color: ${COLORS.white};
  border-radius: 24px;
  padding: 16px 24px;
`;
export const JobTabsContent = styled.div`
  display: block;
`;
export const JobsWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  gap: 24px;
  width: 100%;
`;

export const JobCardsSec = styled.div`
  margin: 0;
  background-color: ${COLORS.white};
`;

export const JobCardMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  border-bottom: 1px solid #ecedee;
`;
export const JobCardMenuItem = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 16px;
  padding: 18px 16px;
  cursor: pointer;
  color: ${COLORS.greyText};
`;

export const JobCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 24px;
`;
export const JobCard = styled.div`
  background-color: #f2f7f2;
  border-radius: 20px;
  width: 100%;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export const JobDesrcription = styled.div`
  width: 85%;
`;
export const JobTitle = styled.h3`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #001e00;
`;
export const JobRequirements = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 130%;
  color: #5e6d55;
  margin: 8px 0;
`;

export const JobDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 32px;
`;
export const JobSalary = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #001e00;
`;
export const JobLocation = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #001e00;
  svg {
    fill: ${COLORS.primary};
    font-size: 20px;
    margin-bottom: -3px;
    margin-right: 5px;
  }
`;
export const JobIcons = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 16px;
`;
export const JobCardLink = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: ${COLORS.white};
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: grey;
    display: block;
    margin: 0 auto;
    font-size: 22px;
  }
`;
export const StyledDropdown = styled(Dropdown)``;
