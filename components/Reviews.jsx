import ReviewsCard from "./ReviewsCard.jsx";

const Reviews = ({ reviews, restaurant }) => {
  return (
    <div className="review-wrapper">
      <h4>Reviews</h4>
      <div className="review_boxes">
        {reviews.length &&
          reviews.map((review) => (
            <li key={review.id}>
              <ReviewsCard review={review} />
            </li>
          ))}
      </div>
    </div>
  );
};

export default Reviews;
