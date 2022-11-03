import About from "../components/About";
import Blog from "../components/Blog";
import Download from "../components/Download";
import Features from "../components/Features";
import Help from "../components/HelpWithWork";
import JobsSection from "../components/Jobs";
import Layout from "../components/Layout";
import Perfomers from "../components/Perfomers";
import Process from "../components/Process";
/* import Reviews from "../components/Reviews"; */
import { Container } from "../styles/globalStyles";
import Swiper from "swiper";
import 'semantic-ui-css/semantic.min.css';
const Home = () => {
  return (
    <>
      <Layout>
        <Container>
          <Features />
          <JobsSection />
          <Process />
          <Help />
          <Download />
          <Perfomers />
          {/* <Reviews /> */}
          <Blog />
          <About />
        </Container>
      </Layout>
    </>
  );
};

export default Home;
