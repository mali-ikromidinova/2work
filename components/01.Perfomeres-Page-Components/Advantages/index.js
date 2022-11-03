const item1 = "/images/perfomers-page/Wallet.svg";
const item2 = "/images/perfomers-page/Calendar.svg";
const item3 = "/images/perfomers-page/Shield.svg";
const item4 = "/images/perfomers-page/Chart.svg";
import {
  AdvantagesContent,
  AdvantagesImg,
  AdvantagesItem,
  AdvantagesSec,
  AdvantagesText,
  AdvantagesWrapper,
} from "./AdvantagesElements";
import { SectionSubtitle, SectionTitle } from "../../../styles/globalStyles";

const Advantages = () => {
  return (
    <AdvantagesSec>
      <AdvantagesContent>
        <SectionTitle center small>
          Преимущества
        </SectionTitle>
        <SectionSubtitle>
          Станьте исполнителем и выполняйте интересные задания от заказчиков
          <br /> в удобное для вас время.
        </SectionSubtitle>

        <AdvantagesWrapper>
          <AdvantagesItem>
            <AdvantagesImg
              width={100}
              height={100}
              src={item1}
              alt="advantage"
            />
            <AdvantagesText>Достойный заработок</AdvantagesText>
          </AdvantagesItem>
          <AdvantagesItem>
            <AdvantagesImg
              width={100}
              height={100}
              src={item2}
              alt="advantage"
            />
            <AdvantagesText>Свободный график</AdvantagesText>
          </AdvantagesItem>
          <AdvantagesItem>
            <AdvantagesImg
              width={100}
              height={100}
              src={item3}
              alt="advantage"
            />
            <AdvantagesText>Безопасный сервис</AdvantagesText>
          </AdvantagesItem>
          <AdvantagesItem>
            <AdvantagesImg
              width={100}
              height={100}
              src={item4}
              alt="advantage"
            />
            <AdvantagesText>Экономия на рекламе</AdvantagesText>
          </AdvantagesItem>
        </AdvantagesWrapper>
      </AdvantagesContent>
    </AdvantagesSec>
  );
};

export default Advantages;
