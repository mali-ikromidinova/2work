import { Container } from "../../styles/globalStyles";
import Layout from "../../components/Layout";
import Main from "../../components/01.Perfomeres-Page-Components/Main";
import Advantages from "../../components/01.Perfomeres-Page-Components/Advantages";
import Order from "../../components/01.Perfomeres-Page-Components/Order";
import InfoSection from "../../components/01.Perfomeres-Page-Components/InfoSection";
import Service from "../../components/01.Perfomeres-Page-Components/Service";
import Achievement from "../../components/01.Perfomeres-Page-Components/Achievements";
import FAQ from "../../components/01.Perfomeres-Page-Components/FAQ";

const Perfomers = () => {
  return (
    <>
      <Layout>
        <Main />
        <Container>
          <Advantages />
          <Order />
          <InfoSection />
          <Service />
          <Achievement />
          <FAQ />
        </Container>
      </Layout>
    </>
  );
};

export default Perfomers;
