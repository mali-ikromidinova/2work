import ContactsBox from "./ContactsBox";
import { ContactsSection } from "./ContactsElements";
import ContactsMessage from "./ContactsMessage";

const Contacts = () => {
  return (
    <ContactsSection>
      <ContactsBox />
      <ContactsMessage />
    </ContactsSection>
  );
};

export default Contacts;
