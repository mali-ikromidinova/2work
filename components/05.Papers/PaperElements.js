import styled from "styled-components";
import { COLORS } from "../../styles/globalStyles";

export const PaperSection = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  margin: 40px 0;
`;
export const PaperContent = styled.div`
  background-color: ${COLORS.white};
  border-radius: 24px;
  padding: 40px;
  width: 75%;
`;
export const PaperTitle = styled.h3`
  font-weight: 600;
  font-size: 24px;
`;
export const PaperInfo = styled.div`
  h3 {
    font-weight: 600;
    font-size: 18px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    a {
      color: ${COLORS.primary};
      text-decoration: none;
      font-weight: 600;
    }
  }
  span {
    font-weight: 600;
  }
  ol {
    font-weight: 400;
    font-size: 16px;
    margin-left: 2.3rem;
  }
  ul {
    list-style-type: none;
    margin-left: 1rem;
    font-size: 16px;
    margin-bottom: 1rem;
  }
`;
