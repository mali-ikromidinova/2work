import Promo from "../PromoVideo";
import {
  MainBanner,
  MainContent,
  MainSection,
  MainSubtitle,
  MainTitle,
} from "./MainElements";
const Main = () => {
  return (
    <MainSection>
      <MainBanner>
        <MainContent>
          <MainTitle>Почему работать в 2work это круто?</MainTitle>
          <MainSubtitle>
            2work поможет найти новых клиентов и зарабатывать <br /> на
            выполнении любых услуг.
          </MainSubtitle>
        </MainContent>
      </MainBanner>
      <Promo />
    </MainSection>
  );
};

export default Main;
