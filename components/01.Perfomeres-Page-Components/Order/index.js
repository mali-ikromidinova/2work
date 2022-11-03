const ArrowUp = "/images/perfomers-page/arrow-up.svg";
const ArrowRight = "/images/perfomers-page/arrow-right.svg";
import {
  ButtonWrapper,
  OrderArrow,
  OrderContent,
  OrderItem,
  OrderNum,
  OrderSection,
  OrderText,
  OrderWrapper,
} from "./OrderElements";
import { SectionSubtitle, SectionTitle } from "../../../styles/globalStyles";
import Button from "../../UI/Buttons";

const Order = () => {
  return (
    <OrderSection>
      <OrderContent>
        <SectionTitle center small>
          Как получить заказ?
        </SectionTitle>
        <SectionSubtitle>
          На 2work исполнители сами выбирают заказы и клиентов. Это просто.
        </SectionSubtitle>
        <OrderWrapper>
          <OrderItem>
            <OrderNum>1</OrderNum>
            <OrderText>Станьте исполнителем и заполните профиль</OrderText>
          </OrderItem>
          <OrderArrow height={87} width={130} src={ArrowUp} alt="arrow-up" />
          <OrderItem>
            <OrderNum>2</OrderNum>
            <OrderText>Выберите задание и откликнитесь на него</OrderText>
          </OrderItem>
          <OrderArrow
            height={43}
            width={130}
            src={ArrowRight}
            alt="arrow-right"
          />
          <OrderItem>
            <OrderNum>3</OrderNum>
            <OrderText>
              Получите оплату сразу же после выполнения задания
            </OrderText>
          </OrderItem>
        </OrderWrapper>
        <ButtonWrapper>
          <Button content="Стать Исполнителем" path="/perfomers" />
        </ButtonWrapper>
      </OrderContent>
    </OrderSection>
  );
};

export default Order;
