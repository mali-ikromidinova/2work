import Employer from "../Employer";
import FAQCard from "../FAQCard";
import OfferForm from "../OfferForm";
import OfferSection from "../OfferList";
import OfferList from "../OfferList/OfferList";
import TaskCard from "../TaskCard";
import {
  TaskContent,
  TaskContentBlock,
  TaskContentBlockSmall,
  TaskWrapper,
} from "./TaskElement";

const PerfomerTask = () => {
  return (
    <TaskContent>
      <TaskWrapper>
        <TaskContentBlock>
          <TaskCard />
          {/* <OfferForm /> */}
          <OfferSection />
        </TaskContentBlock>
        <TaskContentBlockSmall>
          <Employer />
          <FAQCard />
        </TaskContentBlockSmall>
      </TaskWrapper>
    </TaskContent>
  );
};

export default PerfomerTask;
