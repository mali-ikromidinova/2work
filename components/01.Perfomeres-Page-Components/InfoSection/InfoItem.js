import {
  InfoDescr,
  InfoIcon,
  InfoImg,
  InfoName,
  InfoPerfomer,
  InfoRow,
  InfoText,
  InfoTextWrapper,
  InfoTitle,
} from "./InfoSecElements";
import Button from "../../UI/Buttons";

const InfoItem = ({ imgStart, img, title, info, icon, name, text }) => {
  return (
    <InfoRow imgStart={imgStart}>
      <InfoImg
        width={640}
        height={450}
        objectFit="contain"
        src={img}
        alt="perfomer"
      />
      <InfoTextWrapper imgStart={imgStart}>
        <InfoTitle>{title}</InfoTitle>
        <InfoDescr imgStart={imgStart}>{info}</InfoDescr>
        <InfoPerfomer>
          <InfoIcon width={48} height={48} src={icon} alt="perfomer" />
          <InfoName>{name}</InfoName>
        </InfoPerfomer>
        <InfoText imgStart={imgStart}>{text}</InfoText>
        <Button content="Начать зарабатывать" path="/" />
      </InfoTextWrapper>
    </InfoRow>
  );
};

export default InfoItem;
