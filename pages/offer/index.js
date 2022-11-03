import { Container } from "../../styles/globalStyles";
import Layout from "../../components/Layout";
import PerfomerTask from "../../components/04.Task";
import Download from "../../components/Download";

const Offer = () => {
  return (
    <>
      <Layout>
        <Container>
          <PerfomerTask />
          <Download />
        </Container>
      </Layout>
    </>
  );
};

export default Offer;
