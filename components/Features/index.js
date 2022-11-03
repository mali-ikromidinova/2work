import { StatsData } from "../../data";
import {
  FeaturesCard,
  FeaturesCardImg,
  FeaturesCardWrap,
  FeaturesPromo,
  FeaturesPromoImg,
  FeaturesPromoText,
  FeaturesSection,
  FeaturesStats,
  FeaturesStatsDemo,
  FeaturesStatsHeader,
  FeaturesStatsNums,
  FeaturesStatsText,
  FeaturesWrapper,
  StatsCard,
  StatsCardTitle,
  StatsCardWrapper,
  StatsDescr,
  StatsIcon,
} from "./FeaturesElements";

const targetPic = "/images/main_screen/target.png";
const manPic = "/images/main_screen/person.png";
const graphPic = "/images/main_screen/graph.svg";

const Features = () => {
  return (
    <FeaturesSection>
      <FeaturesWrapper>
        <FeaturesCard>
          <FeaturesCardWrap>
            <FeaturesCardImg width={290} height={290} src={targetPic} />
            <FeaturesStats>
              <FeaturesStatsHeader>
                <FeaturesStatsText>
                  Статистические показатели проекта 2works
                  <br />
                  <span>на рынке с 2019 года</span>
                </FeaturesStatsText>
                <FeaturesStatsDemo width={230} height={130} src={graphPic} />
              </FeaturesStatsHeader>
              <FeaturesStatsNums>
                {StatsData.map((stats, index) => {
                  return (
                    <StatsCard key={index}>
                      <StatsCardTitle>{stats.numbers}</StatsCardTitle>
                      <StatsCardWrapper>
                        <StatsIcon
                          width={24}
                          height={24}
                          src={stats.icon}
                          alt="icon"
                        />
                        <StatsDescr>{stats.descr}</StatsDescr>
                      </StatsCardWrapper>
                    </StatsCard>
                  );
                })}
              </FeaturesStatsNums>
            </FeaturesStats>
          </FeaturesCardWrap>
        </FeaturesCard>
        <FeaturesPromo>
          <FeaturesPromoText>
            Станьте одним из нас и доверьте свои бытовые проблемы профессионалам
          </FeaturesPromoText>
          <FeaturesPromoImg
            width={180}
            height={180}
            src={manPic}
            alt="smiling-man"
          />
        </FeaturesPromo>
      </FeaturesWrapper>
    </FeaturesSection>
  );
};

export default Features;
