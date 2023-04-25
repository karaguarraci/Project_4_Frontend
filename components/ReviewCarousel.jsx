import { Carousel } from "react-bootstrap";

const ReviewCarousel = ({ reviews }) => {
  console.log(`here is the reviews ${reviews}`);
  return (
    <div className="review_carousel">
      <Carousel fade>
        {reviews.length &&
          reviews.map((review) => (
            <Carousel.Item key={review.id} interval={5000}>
              <h6>{`Rating: ${review.rating}`}</h6>
              <p>{review.comment}</p>
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
};

export default ReviewCarousel;
