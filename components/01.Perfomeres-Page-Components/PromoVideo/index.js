const PromoVideoPic = "/images/perfomers-page/video-1.jpg";
import { PromoSec, PromoVideo, PromoWrap } from "./PromoVideoElements";
const Promo = () => {
  return (
    <PromoSec>
      <PromoWrap>
        <PromoVideo src={PromoVideoPic} alt="promo" />
      </PromoWrap>
    </PromoSec>
  );
};

export default Promo;
