import { SlLocationPin } from "react-icons/sl";
import { TfiTimer } from "react-icons/tfi";
import Shared from "../../components/UI/Icons/Shared";
import Liked from "../../components/UI/Icons/Liked";
import {
  TaskCardContent,
  TaskCardCost,
  TaskCardDetails,
  TaskCardHeader,
  TaskCardLocation,
  TaskCardTiming,
  TaskCardTitle,
  TaskCardWrapper,
  TaskDescr,
  TaskIcons,
} from "./TaskCardElements";

const TaskCard = () => {
  return (
    <TaskCardWrapper>
      <TaskCardContent>
        <TaskCardHeader>
          <TaskCardTitle>Video operator va montajchi kerak</TaskCardTitle>
          <TaskIcons>
            <Shared />
            <Liked />
          </TaskIcons>
        </TaskCardHeader>
        <TaskCardLocation>
          <SlLocationPin />
          Ташкент
        </TaskCardLocation>
        <TaskCardDetails>
          <TaskCardCost>10 000 000 сум</TaskCardCost>
          <TaskCardTiming>
            <TfiTimer />
            Июль 23 - Август 21
          </TaskCardTiming>
        </TaskCardDetails>
        <TaskDescr>
          <span>Описание</span>
          SMM sohasida doimiy birga ishlash uchun video operator kerak, montaj
          ham qilib berish kerak, o'zizda video kamera ham bo'lishi ham kerak!
          Boshqa ma'lumotlar telefon orqali: +998999932754
        </TaskDescr>
      </TaskCardContent>
    </TaskCardWrapper>
  );
};

export default TaskCard;
