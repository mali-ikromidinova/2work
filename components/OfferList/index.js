import OfferList from "./OfferList";
import { OfferListSec, OfferSecTitle } from "./OfferListElements";

const OfferSection = () => {
  return (
    <OfferListSec>
      <OfferSecTitle>
        Предложения <span>(3)</span>
      </OfferSecTitle>
      <OfferList />
    </OfferListSec>
  );
};

export default OfferSection;
