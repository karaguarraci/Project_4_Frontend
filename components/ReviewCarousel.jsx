import { Card, Carousel } from "react-bootstrap";

const ReviewCarousel = ({ reviews }) => {
  return (
    <div className="review_carousel">
      <Carousel fade style={{ marginTop: "30px" }}>
        {reviews.length &&
          reviews.map((review) => (
            <Carousel.Item key={review.id}>
              <Card>
                <Card.Body>
                  <Card.Title>{`Rating: ${review.rating}`}</Card.Title>
                  <Card.Text>{review.comment}</Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
};

export default ReviewCarousel;
