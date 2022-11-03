import { Container } from "../../styles/globalStyles";
import Layout from "../../components/Layout";
import ContactsBox from "../../components/08.Contacts/ContactsBox";
import ContactsForm from "../../components/08.Contacts/ContactsMessage";

const Task = () => {
  return (
    <>
      <Layout>
        <Container>
          <ContactsForm />
        </Container>
      </Layout>
    </>
  );
};

export default Task;
