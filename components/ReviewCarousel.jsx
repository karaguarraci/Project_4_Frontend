const ReviewCarousel = ({ reviews }) => {
  return (
    <div className="review_boxes">
      {reviews.length &&
        reviews.map((review) => (
          <li key={review.id}>
            <h6>{`Rating: ${review.rating}`}</h6>
            <p>{review.comment}</p>
          </li>
        ))}
    </div>
  );
};

export default ReviewCarousel;

// return (
//   <div className="review_carousel">
//     <Carousel fade style={{ marginTop: "30px" }}>
//       {reviews.length &&
//         reviews.map((review) => (
//           <Carousel.Item key={review.id}>
//             <Card>
//               <Card.Body>
//                 <Card.Title>{`Rating: ${review.rating}`}</Card.Title>
//                 <Card.Text>{review.comment}</Card.Text>
//               </Card.Body>
//             </Card>
//           </Carousel.Item>
//         ))}
//     </Carousel>
//   </div>
// );
// };
