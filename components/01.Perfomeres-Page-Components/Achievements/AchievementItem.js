import Button from "../../UI/Buttons";
import {
  AchievementAuthor,
  AchievementAuthorInfo,
  AchievementCard,
  AchievementIcon,
  AchievementImg,
  AchievementInfo,
  AchievementSalary,
  AchievementText,
  AchievementTextWrap,
} from "./AchieventElements";

const AchievementItem = ({ img, icon, name, job, salary, text, imgStart }) => {
  return (
    <AchievementCard imgStart={imgStart}>
      <AchievementImg
        width={640}
        height={450}
        objectFit="contain"
        src={img}
        alt="achievement"
      />
      <AchievementTextWrap imgStart={imgStart}>
        <AchievementAuthor imgStart={imgStart}>
          <AchievementIcon width={48} height={48} src={icon} alt="" />
          <AchievementAuthorInfo imgStart={imgStart}>
            <p>{name}</p>
            <p>{job}</p>
          </AchievementAuthorInfo>
        </AchievementAuthor>
        <AchievementText imgStart={imgStart}>{text}</AchievementText>
        <AchievementSalary>{salary} UZS</AchievementSalary>
        <AchievementInfo imgStart={imgStart}>
          Средний месячный доход в <br /> данной категории
        </AchievementInfo>
        <Button content="Начать заpабатывать" path="/" />
      </AchievementTextWrap>
    </AchievementCard>
  );
};

export default AchievementItem;
