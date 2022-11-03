import Button from "../UI/Buttons";
import { BecomeSpecialistBox, Title } from "./BecomeSpecialistElements";

const BecomeSpecialist = () => {
  return (
    <BecomeSpecialistBox>
      <Title>Ищите работу или временную подработку?</Title>
      <div>
        <Button content="Стать специалистом" path="" />
      </div>
    </BecomeSpecialistBox>
  );
};

export default BecomeSpecialist;
