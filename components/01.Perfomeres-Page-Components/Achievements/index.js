import { SectionSubtitle, SectionTitle } from "../../../styles/globalStyles";
import { Achievements } from "../data";
import AchievementItem from "./AchievementItem";
import {
  AchievementCards,
  AchievementContent,
  AchievementSec,
} from "./AchieventElements";

const Achievement = () => {
  return (
    <AchievementSec>
      <AchievementContent>
        <SectionTitle center small>
          Чего можно добиться работая у нас?
        </SectionTitle>
        <SectionSubtitle>
          Зарабатывайте и добивайтесь своих целей с 2work
        </SectionSubtitle>
        <AchievementCards>
          {Achievements.map((card, index) => {
            return <AchievementItem {...card} key={index} />;
          })}
        </AchievementCards>
      </AchievementContent>
    </AchievementSec>
  );
};

export default Achievement;
