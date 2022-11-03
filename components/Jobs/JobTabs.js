import { useState } from "react";
import { OfficeData } from "../../data";
import JobCards from "./JobCard";

import {
  JobCardMenu,
  JobCardMenuItem,
  JobCardsWrap,
  JobTabsContent,
  StyledDropdown,
} from "./JobsStyled.";

const LocationOptions = [
  { key: 1, text: "Ташкент", value: 1 },
  { key: 2, text: "Самарканд", value: 2 },
  { key: 3, text: "Бухара", value: 3 },
  { key: 3, text: "Фергана", value: 3 },
];

const JobTabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <JobCardsWrap>
      <JobCardMenu>
        <div
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          <JobCardMenuItem active>Работа в офисе</JobCardMenuItem>
        </div>
        <div
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          <JobCardMenuItem>Удаленная работа </JobCardMenuItem>
        </div>
        <div
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          <JobCardMenuItem>Вакансии</JobCardMenuItem>
        </div>
        <StyledDropdown
          defaultValue={LocationOptions[0].text}
          options={LocationOptions}
        />
      </JobCardMenu>
      <JobTabsContent>
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <JobCards data={OfficeData} />
        </div>
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <JobCards data={OfficeData} />
        </div>
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <JobCards data={OfficeData} />
        </div>
      </JobTabsContent>
    </JobCardsWrap>
  );
};

export default JobTabs;
