import { NotificationData } from "./data";
import {
  CardAnchor,
  CardImage,
  CardInfo,
  CardLink,
  CardTitle,
  CardWrap,
  Content,
  NotificationCard,
  Section,
  Wrapper,
} from "./ProfileNotificationElements";

const ProfileNotifications = () => {
  return (
    <Section>
      <Wrapper>
        <Content>
          {NotificationData.map((card, index) => {
            return (
              <NotificationCard key={index}>
                <CardImage
                  src={card.badge}
                  alt="badge"
                  width={56}
                  height={56}
                />
                <CardWrap>
                  <CardTitle>{card.title}</CardTitle>
                  <CardInfo>{card.text}</CardInfo>
                  <CardLink href={card.path} passHref>
                    <CardAnchor>{card.link}</CardAnchor>
                  </CardLink>
                </CardWrap>
              </NotificationCard>
            );
          })}
        </Content>
      </Wrapper>
    </Section>
  );
};

export default ProfileNotifications;
