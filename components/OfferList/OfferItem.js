import {
  OfferItemAuthor,
  OfferItemCard,
  OfferItemContent,
  OfferItemCost,
  OfferItemDescr,
  OfferItemImage,
  OfferItemReviewNums,
  OfferItemReviews,
  OfferItemStars,
  OfferItemText,
  OfferItemWrapper,
} from "./OfferListElements";
const reviewStars = "/images/icons/stars.svg";

const OfferItem = ({ name, reviews, text, cost, img }) => {
  return (
    <OfferItemCard>
      <OfferItemContent>
        <OfferItemWrapper>
          <OfferItemImage width={60} height={60} src={img} alt="offer" />
          <OfferItemText>
            <OfferItemAuthor>{name}</OfferItemAuthor>
            <OfferItemReviews>
              <OfferItemStars src={reviewStars} alt="stars" />
              <OfferItemReviewNums>({reviews})</OfferItemReviewNums>
            </OfferItemReviews>
            <OfferItemDescr>{text}</OfferItemDescr>
          </OfferItemText>
        </OfferItemWrapper>
        <OfferItemCost>{cost} сум</OfferItemCost>
      </OfferItemContent>
    </OfferItemCard>
  );
};

export default OfferItem;
