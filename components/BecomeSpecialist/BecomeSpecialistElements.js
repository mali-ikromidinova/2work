import styled from "styled-components";
import { COLORS } from "../../styles/globalStyles";

export const BecomeSpecialistBox = styled.div`
  background: rgba(124, 195, 0, 0.1);
  border-radius: 24px;
  padding: 40px 32px;
  width: 30%;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const Title = styled.div`
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: ${COLORS.primary};
  margin-bottom: 2rem;
`;
