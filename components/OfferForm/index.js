import Button from "../UI/Buttons";
import {
  OfferButton,
  OfferContent,
  Form,
  OfferInput,
  OfferSubtitle,
  OfferTextarea,
  OfferTitle,
  OfferWrapper,
} from "./OfferElements";

const OfferForm = () => {
  return (
    <OfferContent>
      <OfferWrapper>
        <OfferTitle>Предложений пока нет</OfferTitle>
        <OfferSubtitle>
          Станьте первым кто предложит свои услуги и получители возможность
          связаться с клиентом.
        </OfferSubtitle>
        <Form>
          <OfferInput placeholder="Ваша цена" />
          <OfferTextarea placeholder="Сообщение заказчику" />
        </Form>
      </OfferWrapper>
      <OfferButton>
        <Button content="Предложить услуги" path="/" />
      </OfferButton>
    </OfferContent>
  );
};

export default OfferForm;
