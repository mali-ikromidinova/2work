import { BenefitData } from "../../data";
import {
  BenefitCard,
  BenefitCardDescr,
  BenefitCardImg,
  BenefitCardsWrap,
  BenefitCardTitle,
} from "./BenefitCardElements";

const BenefitCards = () => {
  return (
    <BenefitCardsWrap>
      {BenefitData.map((item, index) => {
        return (
          <BenefitCard key={index}>
            <BenefitCardImg
              width={70}
              height={50}
              objectFit="contain"
              src={item.img}
              alt="money"
            />
            <BenefitCardTitle>{item.title}</BenefitCardTitle>
            <BenefitCardDescr>{item.descr}</BenefitCardDescr>
          </BenefitCard>
        );
      })}
    </BenefitCardsWrap>
  );
};

export default BenefitCards;
