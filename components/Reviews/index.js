import { ReviewsData } from "../../data";
import { HiStar } from "react-icons/hi";
import { SectionTitle } from "../../styles/globalStyles";
import {
  ReviewCard,
  ReviewDate,
  ReviewedData,
  ReviewedName,
  ReviewedPerfomer,
  ReviewedPic,
  ReviewedRating,
  ReviewFound,
  ReviewSalary,
  ReviewsContent,
  ReviewScore,
  ReviewsList,
  ReviewsSection,
  ReviewText,
  ReviewTitle,
} from "./ReviewsStyled";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Reviews = () => {
  return (
    <ReviewsSection>
      <ReviewsContent>
        <SectionTitle>Отзывы об исполнителях</SectionTitle>
        <ReviewsList>
          <Swiper
            slidesPerView={3.7}
            centeredSlides={true}
            spaceBetween={10}
            initialSlide={2}
            className="mySwiper"
            navigation={true}
            modules={[Navigation]}
          >
            {ReviewsData.map((review) => {
              return (
                <SwiperSlide>
                  <ReviewCard key={review.id}>
                    <ReviewTitle>{review.title}</ReviewTitle>
                    <ReviewFound>
                      Исполнитель нашелся за {review.time} минуты
                    </ReviewFound>
                    <ReviewSalary>{review.salary} сум</ReviewSalary>
                    <ReviewText>{review.review}</ReviewText>
                    <ReviewDate>{review.date}</ReviewDate>
                    <ReviewedPerfomer>
                      <ReviewedPic
                        width={60}
                        height={60}
                        src={review.img}
                        alt="review"
                      />
                      <ReviewedData>
                        <ReviewedName>{review.name}</ReviewedName>
                        <ReviewedRating>
                          Рейтинг исполнителя:
                          <span>
                            <HiStar />
                            {review.rating}
                          </span>
                        </ReviewedRating>
                        <ReviewScore>
                          Выполнила {review.score} задания
                        </ReviewScore>
                      </ReviewedData>
                    </ReviewedPerfomer>
                  </ReviewCard>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </ReviewsList>
      </ReviewsContent>
    </ReviewsSection>
  );
};

export default Reviews;
