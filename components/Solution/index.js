import Button from "../UI/Buttons";
import {
  Citation,
  CitationBlock,
  CitationSign,
  Section,
  SolutionBlock,
  SolutionImage,
  SolutionPara,
  SolutionText,
  SolutionWrap,
  Title,
  Wrapper,
} from "./SolutionElements";

const solutionPic = "/images/solution.jpg";

const Solution = () => {
  return (
    <Section>
      <Wrapper>
        <SolutionBlock>
          <SolutionWrap>
            <Title>
              Решение ваших проблем еще никогда не было таким простым
            </Title>
            <SolutionText>
              <SolutionPara>
                Найдите исполнителя за несколько минут
              </SolutionPara>
              <SolutionPara>
                Специальная команда обслуживания клиентов 24/7
              </SolutionPara>
              <SolutionPara>
                Защита от мошенничества и некачественной работы
              </SolutionPara>
            </SolutionText>
            <Button content="Найти исполнителя" path="/" />
          </SolutionWrap>
        </SolutionBlock>
        <SolutionBlock>
          <SolutionImage src={solutionPic} width={700} height={416} alt="" />
        </SolutionBlock>
      </Wrapper>
      <Wrapper>
        <CitationBlock>
          <CitationSign>“</CitationSign>
          <Citation>
            Aloqa qulayligi va taqdim etilgan xavfsizlik autsorsing jarayonini
            hamma uchun oson va qulay qiladi. Endi internetda mutaxassisni
            yollashim va uni biron bir joyda qidirmasligimdan chin dildan
            xursandman.
          </Citation>
          <p>Азизбек Шукуров</p>
          <p>Бухарская область, Бухара</p>
        </CitationBlock>
        <CitationBlock>
          <CitationSign>“</CitationSign>
          <Citation>
            Простота связи и обеспечиваемая безопасность делают процесс
            аутсорсинга лешким и доступным для всех. Я искренне рада что теперь
            могу нанять специалиста в интернете , а не искать их где попало.
          </Citation>
          <p>Муяссар Фазилова</p>
          <p>Самаркандская область, Самарканд </p>
        </CitationBlock>
      </Wrapper>
    </Section>
  );
};

export default Solution;
