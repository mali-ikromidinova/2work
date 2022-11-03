import Button from "../../UI/Buttons";
import {
  ComponentImage,
  Content,
  NoContentBoxSec,
  NoContentTasksBox,
  Subtitle,
  Title,
} from "./NoContentElements";

const NoContentPic = "/images/profile-icons/no-created-tasks.png";

const NoCreatedTasks = () => {
  return (
    <NoContentBoxSec>
      <NoContentTasksBox>
        <Content>
          <ComponentImage
            width={320}
            height={170}
            src={NoContentPic}
            alt="no-content"
          />
          <Title>Здесь пока ничего нет</Title>
          <Subtitle>
            Попробуйте создать задание или предложить работу исполнителю
          </Subtitle>
          <Button content="Найти исполнителя" path="/" />
        </Content>
      </NoContentTasksBox>
    </NoContentBoxSec>
  );
};

export default NoCreatedTasks;
