import {
  ComponentImage,
  Content,
  NoContentBoxSec,
  NoContentTasksBox,
  Subtitle,
  Title,
} from "./NoContentElements";

const NoContentPic = "/images/profile-icons/no-comments.png";

const NoComments = () => {
  return (
    <NoContentBoxSec>
      <NoContentTasksBox>
        <Content>
          <ComponentImage
            width={160}
            height={160}
            src={NoContentPic}
            alt="no-content"
          />
          <Title>Здесь пока ничего нет</Title>
          <Subtitle>
            Комментариев пока нет. Как только они появятся они будут
            отображаться тут
          </Subtitle>
        </Content>
      </NoContentTasksBox>
    </NoContentBoxSec>
  );
};

export default NoComments;
