const LogoPic = "/images/2work.svg";
import {
  NewsHeaderContent,
  NewsItem,
  NewsItemLink,
  NewsLogo,
  NewsNavbar,
  NewsNavbarList,
} from "./NewsHeaderElements";

const NewsHeader = () => {
  return (
    <NewsHeaderContent>
      <NewsNavbar>
        <NewsLogo width={240} height={88} src={LogoPic} alt="logo" />
        <NewsNavbarList>
          <NewsItem href="/" passHref>
            <NewsItemLink>Последние Новости</NewsItemLink>
          </NewsItem>
          <NewsItem href="/" passHref>
            <NewsItemLink>Советы</NewsItemLink>
          </NewsItem>
          <NewsItem href="/" passHref>
            <NewsItemLink>Истории</NewsItemLink>
          </NewsItem>
          <NewsItem href="/" passHref>
            <NewsItemLink>Спецпроекты</NewsItemLink>
          </NewsItem>
          <NewsItem href="/" passHref>
            <NewsItemLink>Реклама</NewsItemLink>
          </NewsItem>
        </NewsNavbarList>
      </NewsNavbar>
    </NewsHeaderContent>
  );
};

export default NewsHeader;
