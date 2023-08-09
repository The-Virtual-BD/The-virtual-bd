import React from "react";
import { Container } from "react-bootstrap";
import Rating from "react-rating";
import "./Testimonial.css";
import TesimonialData from "./TesimonialData.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { baseUrl } from "../../hooks/url";
import img1 from "./image/user.jpg";
import { useCollection } from "../../context";

function Testimonial() {
  const { reviews, reviewsLoading } = useCollection();
  if (reviewsLoading) {
    return <p>Loading...</p>
  };

  const recentReviews = reviews?.reverse();

  //Combined Both data Table with same key,value
  const testimonialWithNewKeys = recentReviews?.map((data) => ({
    id: data.id,
    img: data?.author?.photo ? `${baseUrl}/${data?.author?.photo}` : img1,
    rating: data.quantity,
    name: `${data.author.first_name} ${data.author.last_name}`,
    designation: data.author.profession,
    reviewText: data.body,
  }));

  const reviewsData = [...testimonialWithNewKeys, ...TesimonialData];

  if (!reviewsLoading && reviewsData.length === 0) {
    return <p>No Review Avaiable</p>
  };

  return (
    <>
      <section className="tetiomial">
        <Container>
          <div className="testimonial_small">
            <p>Testimonials</p>
          </div>
          <div className="testimonial_head">
            <h2>Why do people praise about The Virtual BD?</h2>
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {reviewsData?.map((data) => (
              <SwiperSlide key={data?.id}>
                <div className="review_card">
                  <div className="review_author">

                    <div className="review_img">
                      {<img src={data?.img} alt={data?.name} />}
                    </div>

                    <div className="review_info">
                      <div className="reviw_star">
                        <Rating
                          initialRating={data?.rating}
                          readonly
                          emptySymbol="fa-regular fa-star"
                          fullSymbol="fa-solid fa-star"
                        ></Rating>
                      </div>

                      <div className="rivew_name">
                        <p>{data?.name}</p>
                      </div>

                      <div className="rivew_degination">
                        <p>{data?.designation}</p>
                      </div>

                    </div>
                  </div>

                  <div className="review_text">
                    <p>{data?.reviewText}</p>

                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>
    </>
  );
}

export default Testimonial;
