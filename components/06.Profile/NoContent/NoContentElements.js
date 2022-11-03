import styled from "styled-components";
import Image from "next/image";
import { COLORS } from "../../../styles/globalStyles";

export const NoContentBoxSec = styled.section`
  margin: 40px 0;
`;
export const NoContentTasksBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.white};
  border-radius: 24px;
  width: 70%;
  padding: 120px 0;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 45%;
`;
export const ComponentImage = styled(Image)``;
export const Title = styled.h4`
  font-weight: 500;
  font-size: 24px;
  text-align: center;
  margin-top: 2rem;
`;
export const Subtitle = styled.p`
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: #828282;
`;
