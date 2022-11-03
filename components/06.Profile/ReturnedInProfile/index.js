import Shared from "../../UI/Icons/Shared";
import {
  ReturnedBox,
  ReturnedContent,
  ReturnedPersonDetails,
  ReturnedProfilePic,
  ReturnedReviews,
  ReturnedText,
  ReturnedTitle,
  ReturnedWrapper,
  ReviewStars,
} from "./ReturnedElements";

const starsPic = "/images/icons/four-stars.svg";
const profilePic = "/images/perfomers/shoxista.png";
const Returned = () => {
  return (
    <ReturnedBox>
      <ReturnedContent>
        <ReturnedWrapper>
          <ReturnedProfilePic
            width={100}
            height={100}
            src={profilePic}
            alt="perfomer"
          />
          <ReturnedText>
            <ReturnedTitle>С возвращением, Шохиста!</ReturnedTitle>
            <ReturnedPersonDetails>
              <ReturnedReviews>
                <ReviewStars src={starsPic} width={88} height={16} />
                <p>(24)</p>
              </ReturnedReviews>
              <p>Заданий создано: 156</p>
              <p>|</p>
              <p>Заданий выполнено: 0</p>
            </ReturnedPersonDetails>
          </ReturnedText>
        </ReturnedWrapper>
        <Shared />
      </ReturnedContent>
    </ReturnedBox>
  );
};

export default Returned;
