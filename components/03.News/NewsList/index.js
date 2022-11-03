import Button from "../../UI/Buttons";
import { NewsListData } from "../data";
import SocialIcons from "../SocialIcons";
import {
  NewsImage,
  NewsItem,
  NewsItemInfo,
  NewsItemText,
  NewsItemTitle,
  NewsListContent,
  NewsListSection,
  SocialIconsFixed,
} from "./NewsListElements";

const NewsList = () => {
  return (
    <NewsListSection>
      <NewsListContent>
        {NewsListData.map((news) => {
          return (
            <NewsItem key={news.id}>
              <NewsImage width={640} height={450} src={news.img} alt="news" />
              <NewsItemInfo>
                <NewsItemTitle>{news.title}</NewsItemTitle>
                <NewsItemText>{news.text}</NewsItemText>
                <Button content="Подробнее" path="/" />
              </NewsItemInfo>
            </NewsItem>
          );
        })}
        <SocialIconsFixed>
          <SocialIcons />
        </SocialIconsFixed>
      </NewsListContent>
    </NewsListSection>
  );
};

export default NewsList;
