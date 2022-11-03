import { AboutPerfomers } from "../data";
import InfoItem from "./InfoItem";
import { InfoContent, InfoSec } from "./InfoSecElements";

const InfoSection = () => {
  return (
    <InfoSec>
      <InfoContent>
        {AboutPerfomers.map((perfomer, index) => {
          return <InfoItem {...perfomer} key={index} />;
        })}
      </InfoContent>
    </InfoSec>
  );
};

export default InfoSection;
