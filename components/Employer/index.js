import {
  EmployerBtn,
  EmployerBtnTransparent,
  EmployerButtons,
  EmployerCard,
  EmployerCardContent,
  EmployerCardTitle,
  EmployerCardWrapper,
  EmployerImage,
  EmployerInfo,
  EmployerLocation,
  EmployerName,
  EmployerReviews,
} from "./EmployerElements";

const EmployerPic = "/images/perfomers/amir.png";

const Employer = () => {
  return (
    <EmployerCard>
      <EmployerCardContent>
        <EmployerCardTitle>Заказчик</EmployerCardTitle>
        <EmployerCardWrapper>
          <EmployerImage
            width={64}
            height={64}
            src={EmployerPic}
            alt="employer"
          />
          <EmployerInfo>
            <EmployerName>Махмуд</EmployerName>
            <EmployerLocation>Ташкент</EmployerLocation>
            <EmployerReviews>Нет отзывов</EmployerReviews>
          </EmployerInfo>
        </EmployerCardWrapper>
        <EmployerButtons>
          <EmployerBtnTransparent>
            <a href="mailto:">Написать</a>
          </EmployerBtnTransparent>
          <EmployerBtn>
            <a href="tel:+998901234567">Позвонить</a>
          </EmployerBtn>
        </EmployerButtons>
      </EmployerCardContent>
    </EmployerCard>
  );
};

export default Employer;
