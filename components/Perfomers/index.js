import { OfficePerfomers, RemotePerfomers, Vacancies } from "../../data";
import { SectionTitle } from "../../styles/globalStyles";
import PerfomersBlock from "./PerfomersBlock";
import {
  PerfomersContent,
  PerfomersSection,
  PerfomersWrapper,
} from "./PerfomersElements";

const Perfomers = () => {
  return (
    <PerfomersSection>
      <PerfomersContent>
        <SectionTitle>Лучшие исполнители</SectionTitle>
        <PerfomersWrapper>
          <PerfomersBlock title="Работа в офисе" data={OfficePerfomers} />
          <PerfomersBlock title="Удаленная работа" data={RemotePerfomers} />
          <PerfomersBlock title="Вакансии" data={Vacancies} />
        </PerfomersWrapper>
      </PerfomersContent>
    </PerfomersSection>
  );
};

export default Perfomers;
