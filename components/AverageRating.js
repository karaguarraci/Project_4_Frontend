export function calcAv(reviews) {
  if (!reviews) {
    return 0;
  }
  let totalscore = 0;
  let totalCount = reviews.length;
  Array.from(reviews).forEach((review) => {
    totalscore += review.rating;
  });
  let avgScore = totalscore / totalCount;
  return Math.round(avgScore * 10) / 10;
}
