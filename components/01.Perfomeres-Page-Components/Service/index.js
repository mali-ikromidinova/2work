import { SectionSubtitle, SectionTitle } from "../../../styles/globalStyles";
import BenefitCards from "../../BenefitCards";
import { ServiceContent, ServiceSec, ServiceWrap } from "./ServiceElements";

const Service = () => {
  return (
    <ServiceSec>
      <ServiceContent>
        <SectionTitle center small>
          Что вы получаете?
        </SectionTitle>
        <SectionSubtitle>
          Сервис не берёт комиссию за выполненный заказ.
          <br />
          Вы оплачиваете только отклики к заданиям и сами выбираете клиентов.
        </SectionSubtitle>
        <ServiceWrap>
          <BenefitCards />
        </ServiceWrap>
      </ServiceContent>
    </ServiceSec>
  );
};

export default Service;
