import { Container } from "../../styles/globalStyles";
import Footer from "../../components/Footer";
import NewsList from "../../components/03.News/NewsList";
import NewsHeader from "../../components/03.News/NewsHeader";

const NewsPage = () => {
  return (
    <>
      <Container>
        <NewsHeader />
        <NewsList />
      </Container>
      <Footer />
    </>
  );
};

export default NewsPage;
