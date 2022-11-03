import styled from "styled-components";
import { COLORS } from "../../styles/globalStyles";

export const OfferContent = styled.div`
  background-color: ${COLORS.white};
  border-radius: 24px;
  padding: 40px 40px 60px;
  width: 100%;
`;
export const OfferWrapper = styled.div``;
export const OfferTitle = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: ${COLORS.text};
  margin-bottom: 1.3rem;
`;
export const OfferSubtitle = styled.h4`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  color: #828282;
  margin-bottom: 1.7rem;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const OfferInput = styled.input`
  border: 1px solid #ecedee;
  border-radius: 12px;
  width: 100%;
  padding: 16px;
  outline: none;
  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    color: #bdbdbd;
  }
`;
export const OfferTextarea = styled.textarea`
  border: 1px solid #ecedee;
  border-radius: 12px;
  height: 100px;
  width: 100%;
  padding: 16px;
  resize: none;
  outline: none;
  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    color: #bdbdbd;
  }
`;
export const OfferButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
`;
