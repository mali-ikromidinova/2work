import styled from "styled-components";
import Link from "next/link";

export const FAQSec = styled.section`
  margin: 40px 0;
  padding: 40px 0;
`;
export const FAQContent = styled.div``;
export const FAQWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  margin-top: 3rem;
`;
export const FAQList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 1.6rem;
`;
export const FAQItem = styled(Link)``;

export const FAQItemLink = styled.a`
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #828282;
`;
