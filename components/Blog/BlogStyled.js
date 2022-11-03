import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { COLORS } from "../../styles/globalStyles";

export const BlogSec = styled.section`
  padding: 40px 0;
  margin: 40px 0;
`;
export const BlogContent = styled.div``;
export const BlogsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;
`;
export const BlogItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.white};
  border-radius: 16px;
  width: 25%;
`;
export const BlogImageWrap = styled.div`
  width: 200px;
  height: 50%;
`;
export const BlogImage = styled(Image)`
  display: block;
  border-radius: 16px 16px 0 0;
`;
export const BlogInfo = styled(Link)`
  text-decoration: none;
`;

export const BlogInfoWrap = styled.div`
  padding: 12px 18px 30px 18px;
`;
export const BlogType = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: #5d9200;
  margin: 24px 0;
`;
export const BlogHeadline = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: ${COLORS.text};
  margin-bottom: 40px;
`;
export const BlogDate = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #828282;
`;
