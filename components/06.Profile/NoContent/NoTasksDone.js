import Button from "../../UI/Buttons";
import {
  ComponentImage,
  Content,
  NoContentBoxSec,
  NoContentTasksBox,
  Subtitle,
  Title,
} from "./NoContentElements";

const NoContentPic = "/images/profile-icons/no-tasks-done.png";

const NoTasksDone = () => {
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
            Попробуйте поискать задание и предложить свои услуги
          </Subtitle>
          <Button content="Найти задание" path="/" />
        </Content>
      </NoContentTasksBox>
    </NoContentBoxSec>
  );
};

export default NoTasksDone;
