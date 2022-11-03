import { ProcessData } from "../../data";
import { SectionTitle } from "../../styles/globalStyles";
import { FaYoutube } from "react-icons/fa";
import {
  HeaderLink,
  HeaderLinkWrap,
  ProcessCard,
  ProcessCardTitle,
  ProcessDescr,
  ProcessHeader,
  ProcessImg,
  ProcessImgWrap,
  ProcessSec,
  ProcessWrapper,
} from "./ProcessElements";

const Process = () => {
  return (
    <ProcessSec>
      <ProcessHeader>
        <SectionTitle>Как работает 2work?</SectionTitle>
        <HeaderLink href="/">
          <HeaderLinkWrap>
            Смотреть обучающий ролик -
            <FaYoutube />
          </HeaderLinkWrap>
        </HeaderLink>
      </ProcessHeader>
      <ProcessWrapper>
        {ProcessData.map((item, index) => {
          return (
            <ProcessCard key={index}>
              <ProcessCardTitle>{item.title}</ProcessCardTitle>
              <ProcessDescr>{item.descr}</ProcessDescr>
              <ProcessImgWrap>
                <ProcessImg layout="fill" src={item.img}></ProcessImg>
              </ProcessImgWrap>
            </ProcessCard>
          );
        })}
      </ProcessWrapper>
    </ProcessSec>
  );
};

export default Process;
