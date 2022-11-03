import styled from "styled-components";
import Image from "next/image";

export const OrderSection = styled.section`
  margin: 40px 0;
  padding: 40px 0;
`;
export const OrderContent = styled.div``;
export const OrderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 5rem;
`;
export const OrderItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 20%;
`;
export const OrderNum = styled.div`
  font-weight: 700;
  font-size: 96px;
  line-height: 121px;
  text-align: center;
  color: #5d9200;
`;
export const OrderText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #242424;
`;
export const OrderArrow = styled(Image)``;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;
