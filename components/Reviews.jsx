import ReviewsCard from "./ReviewsCard.jsx";

const Reviews = ({ reviews, restaurant }) => {
  return (
    <div className="review_boxes">
      {reviews.length &&
        reviews.map((review) => (
          <li key={review.id}>
            <ReviewsCard review={review} />
          </li>
        ))}
    </div>
  );
};

export default Reviews;
