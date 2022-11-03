import { SectionTitle } from "../../styles/globalStyles";
import BenefitCards from "../BenefitCards";
import Button from "../UI/Buttons";
import {
  HelpCards,
  HelpInfo,
  HelpInfoBlock,
  HelpInfoDescr,
  HelpInfoFlag,
  HelpInfoTitle,
  HelpSection,
  HelpWrapper,
} from "./HelpElements";

const Help = ({ content, path }) => {
  return (
    <HelpSection>
      <SectionTitle>Как мы можем помочь с работой?</SectionTitle>
      <HelpWrapper>
        <HelpCards>
          <BenefitCards />
        </HelpCards>
        <HelpInfo>
          <HelpInfoBlock>
            <HelpInfoFlag>Для специалистов</HelpInfoFlag>
            <HelpInfoTitle>Работа в 2work.uz</HelpInfoTitle>
            <HelpInfoDescr>
              Зарегистрируйтесь в 2work и получайте тысячи заказов и сотни
              вакансий ежедневно.
            </HelpInfoDescr>
            <Button path="/" content="Зарегистрироваться" />
          </HelpInfoBlock>
        </HelpInfo>
      </HelpWrapper>
    </HelpSection>
  );
};

export default Help;
