import {
  ContactsContent,
  ContactsIcon,
  ContactsItem,
  ContactsWraper,
  Logo,
} from "./ContactsElements";

const logoPic = "/images/2work.svg";
const icon1 = "/images/icons/phone.svg";
const icon2 = "/images/icons/mail.svg";
const icon3 = "/images/icons/pin.svg";

const ContactsBox = () => {
  return (
    <ContactsContent>
      <ContactsWraper>
        <Logo src={logoPic} width={240} height={88} allt="logo" />
        <ContactsItem>
          <ContactsIcon src={icon1} width={26} height={26} alt="phone" />
          <a href="tel:+998973920174">+ 998 (97) 392-01-74</a>
        </ContactsItem>
        <ContactsItem>
          <ContactsIcon src={icon2} width={26} height={26} alt="mail" />
          <a href="mailto:info@2work.uz">info@2work.uz</a>
        </ContactsItem>
        <ContactsItem>
          <ContactsIcon src={icon3} width={26} height={26} alt="pin" />
          <a href="/">
            проспект Мустакиллик 59, <br /> город Ташкент, Узбекистан
          </a>
        </ContactsItem>
      </ContactsWraper>
    </ContactsContent>
  );
};

export default ContactsBox;
