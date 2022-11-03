import {
  FAQCardContent,
  FAQCardItem,
  FAQCardLink,
  FAQCardList,
  FAQCardTitle,
  FAQCardWrapper,
} from "./FAQCardElements";

const FAQCard = () => {
  return (
    <FAQCardWrapper>
      <FAQCardContent>
        <FAQCardTitle>Частые вопросы</FAQCardTitle>
        <FAQCardList>
          <FAQCardLink href="/" passHref>
            <FAQCardItem>Как зарегистрироваться?</FAQCardItem>
          </FAQCardLink>
          <FAQCardLink href="/" passHref>
            <FAQCardItem>Как правильно оформить профиль?</FAQCardItem>
          </FAQCardLink>
          <FAQCardLink href="/" passHref>
            <FAQCardItem>Как правильно разместить задание?</FAQCardItem>
          </FAQCardLink>
          <FAQCardLink href="/" passHref>
            <FAQCardItem>Как выбрать надежного исполнителя?</FAQCardItem>
          </FAQCardLink>
          <FAQCardLink href="/" passHref>
            <FAQCardItem>Почему задание удалили?</FAQCardItem>
          </FAQCardLink>
          <FAQCardLink href="/" passHref>
            <FAQCardItem>
              За что можно получить бан или лишиться статуса исполнителя?
            </FAQCardItem>
          </FAQCardLink>
        </FAQCardList>
      </FAQCardContent>
    </FAQCardWrapper>
  );
};

export default FAQCard;
