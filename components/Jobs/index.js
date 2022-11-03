import Sidebar from "../Sidebar";
import { JobsSecContent, JobsWrapper } from "./JobsStyled.";
import JobTabs from "./JobTabs";

const JobsSection = () => {
  return (
    <JobsSecContent>
      <JobsWrapper>
        <Sidebar />
        <JobTabs />
      </JobsWrapper>
    </JobsSecContent>
  );
};

export default JobsSection;
