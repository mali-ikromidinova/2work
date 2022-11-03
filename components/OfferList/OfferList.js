import { OffersList } from "./data";
import OfferItem from "./OfferItem";
import {
  OfferListContent,
  OfferItemLink,
  OfferItemAnchor,
} from "./OfferListElements";

const OfferList = () => {
  return (
    <OfferListContent>
      {OffersList.map((offer, index) => {
        return (
          <OfferItemLink href="/" passHref key={index}>
            <OfferItemAnchor>
              <OfferItem {...offer} />
            </OfferItemAnchor>
          </OfferItemLink>
        );
      })}
    </OfferListContent>
  );
};

export default OfferList;
