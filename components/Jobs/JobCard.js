import Liked from "./../UI/Icons/Liked";
import Shared from "./../UI/Icons/Shared";
import { SlLocationPin } from "react-icons/sl";
import {
  JobCard,
  JobCardLink,
  JobCardsSec,
  JobCardsWrapper,
  JobDesrcription,
  JobDetails,
  JobIcons,
  JobLocation,
  JobRequirements,
  JobSalary,
  JobTitle,
} from "./JobsStyled.";

const JobCards = ({ data }) => {
  return (
    <JobCardsSec>
      <JobCardsWrapper>
        {data.map((job) => {
          return (
            <JobCard key={job.id}>
              <JobDesrcription>
                <JobTitle>{job.title}</JobTitle>
                <JobRequirements>{job.jobDescr}</JobRequirements>
                <JobDetails>
                  <JobSalary>{job.salary}</JobSalary>
                  <JobLocation>
                    <SlLocationPin />
                    {job.location}
                  </JobLocation>
                </JobDetails>
              </JobDesrcription>
              <JobIcons>
                <JobCardLink>
                  <Shared />
                </JobCardLink>
                <JobCardLink>
                  <Liked />
                </JobCardLink>
              </JobIcons>
            </JobCard>
          );
        })}
      </JobCardsWrapper>
    </JobCardsSec>
  );
};

export default JobCards;
