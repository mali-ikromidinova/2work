import { ProfileReviewData } from "./data";
import {
  Author,
  CardHeader,
  CardHeaderDetails,
  CardHeaderWrap,
  Content,
  Date,
  Job,
  ReviewCard,
  Section,
  Text,
  Wrapper,
} from "./ProfileReviewElements";

const starsPic = "/images/icons/stars.svg";

const ProfileReview = () => {
  return (
    <Section>
      <Wrapper>
        <Content>
          {ProfileReviewData.map((item, index) => {
            return (
              <ReviewCard key={index}>
                <CardHeader>
                  <CardHeaderWrap>
                    <CardHeaderDetails>
                      <Job>{item.job}</Job>
                      <Date>{item.date}</Date>
                    </CardHeaderDetails>
                    <img src={starsPic} alt="" />
                  </CardHeaderWrap>
                  <Author>{item.name}</Author>
                </CardHeader>
                <Text>{item.review}</Text>
              </ReviewCard>
            );
          })}
        </Content>
      </Wrapper>
    </Section>
  );
};

export default ProfileReview;
