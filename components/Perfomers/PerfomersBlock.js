import { FcApproval } from "react-icons/fc";
import {
  PerfomerDetails,
  PerfomerImg,
  PerfomerJob,
  PerfomerLocation,
  PerfomerName,
  PerfomersBlockContent,
  PerfomersBlockTitle,
  PerfomersItem,
} from "./PerfomersElements";
const PerfomersBlock = ({ title, data }) => {
  return (
    <PerfomersBlockContent data={data}>
      <PerfomersBlockTitle>{title}</PerfomersBlockTitle>
      {data.map((perfomer, index) => {
        return (
          <PerfomersItem key={index}>
            <PerfomerImg
              src={perfomer.img}
              width={60}
              height={60}
              alt="perfomer"
            />
            <PerfomerDetails>
              <PerfomerName>
                {perfomer.name}
                <span>
                  <FcApproval />
                </span>
              </PerfomerName>
              <PerfomerJob>{perfomer.job}</PerfomerJob>
              <PerfomerLocation>{perfomer.location}</PerfomerLocation>
            </PerfomerDetails>
          </PerfomersItem>
        );
      })}
    </PerfomersBlockContent>
  );
};

export default PerfomersBlock;
