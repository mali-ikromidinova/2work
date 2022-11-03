import {
  FAQContent,
  FAQItem,
  FAQItemLink,
  FAQList,
  FAQSec,
  FAQWrapper,
} from "./FAQElememts";
import { SectionTitle } from "../../../styles/globalStyles";

const FAQ = () => {
  return (
    <FAQSec>
      <FAQContent>
        <SectionTitle small center>
          Частые вопросы
        </SectionTitle>
        <FAQWrapper>
          <FAQList>
            <FAQItem href="/" passHref>
              <FAQItemLink>Сколько откликов я получу?</FAQItemLink>
            </FAQItem>
            <FAQItem href="/" passHref>
              <FAQItemLink>Обязательно ли выбирать исполнителя?</FAQItemLink>
            </FAQItem>
            <FAQItem href="/" passHref>
              <FAQItemLink>Какую цену установить?</FAQItemLink>
            </FAQItem>
            <FAQItem href="/" passHref>
              <FAQItemLink>Как оплачивать услуги исполнителя?</FAQItemLink>
            </FAQItem>
            <FAQItem href="/" passHref>
              <FAQItemLink>Как выбрать надежного исполнителя?</FAQItemLink>
            </FAQItem>
            <FAQItem href="/" passHref>
              <FAQItemLink>Как не выбрать исполнителем мошенника?</FAQItemLink>
            </FAQItem>
          </FAQList>
          <FAQList>
            <FAQItem href="/" passHref>
              <FAQItemLink>Обязательно ли выбирать исполнителя?</FAQItemLink>
            </FAQItem>
            <FAQItem href="/" passHref>
              <FAQItemLink>Как не выбрать исполнителем мошенника?</FAQItemLink>
            </FAQItem>
            <FAQItem href="/" passHref>
              <FAQItemLink>Как оплачивать услуги исполнителя?</FAQItemLink>
            </FAQItem>
            <FAQItem href="/" passHref>
              <FAQItemLink>Сколько откликов я получу?</FAQItemLink>
            </FAQItem>
            <FAQItem href="/" passHref>
              <FAQItemLink>Как выбрать надежного исполнителя?</FAQItemLink>
            </FAQItem>
            <FAQItem href="/" passHref>
              <FAQItemLink>Какую цену установить?</FAQItemLink>
            </FAQItem>
          </FAQList>
        </FAQWrapper>
      </FAQContent>
    </FAQSec>
  );
};

export default FAQ;
