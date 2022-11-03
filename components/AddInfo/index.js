import {
  AddInfoAnchor,
  AddInfoContent,
  AddInfoLink,
  AddInfoMenu,
  AddInfoTitle,
  AddInfoWrap,
} from "./AddInfoElements";

const AdditionalInfo = () => {
  return (
    <AddInfoWrap>
      <AddInfoContent>
        <AddInfoTitle>Другая информация</AddInfoTitle>
        <AddInfoMenu>
          <AddInfoLink href="/" passHref>
            <AddInfoAnchor>Правила конфиденциальности</AddInfoAnchor>
          </AddInfoLink>
          <AddInfoLink href="/" passHref>
            <AddInfoAnchor>Новости</AddInfoAnchor>
          </AddInfoLink>
          <AddInfoLink href="/" passHref>
            <AddInfoAnchor>Контакты</AddInfoAnchor>
          </AddInfoLink>
          <AddInfoLink href="/" passHref>
            <AddInfoAnchor>Как создать задание?</AddInfoAnchor>
          </AddInfoLink>
          <AddInfoLink href="/" passHref>
            <AddInfoAnchor>Как стать исполнителем?</AddInfoAnchor>
          </AddInfoLink>
          <AddInfoLink href="/" passHref>
            <AddInfoAnchor>Правила сервиса</AddInfoAnchor>
          </AddInfoLink>
        </AddInfoMenu>
      </AddInfoContent>
    </AddInfoWrap>
  );
};

export default AdditionalInfo;
