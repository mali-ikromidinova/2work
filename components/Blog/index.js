import { SectionTitle } from "../../styles/globalStyles";
import { NewPublications } from "../../data";
import {
  BlogContent,
  BlogDate,
  BlogHeadline,
  BlogImage,
  BlogImageWrap,
  BlogInfo,
  BlogInfoWrap,
  BlogItem,
  BlogSec,
  BlogsWrapper,
  BlogType,
} from "./BlogStyled";

const Blog = () => {
  return (
    <BlogSec>
      <SectionTitle>Новые публикации в блоге</SectionTitle>
      <BlogContent>
        <BlogsWrapper>
          {NewPublications.map((blog) => {
            return (
              <BlogItem key={blog.id}>
                <BlogImage width={385} height={240} src={blog.img}></BlogImage>
                <BlogInfo href="/">
                  <BlogInfoWrap>
                    <BlogType>{blog.type}</BlogType>
                    <BlogHeadline>{blog.headline}</BlogHeadline>
                    <BlogDate>{blog.date}</BlogDate>
                  </BlogInfoWrap>
                </BlogInfo>
              </BlogItem>
            );
          })}
        </BlogsWrapper>
      </BlogContent>
    </BlogSec>
  );
};

export default Blog;
