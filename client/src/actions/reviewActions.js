import Redux from "redux";

const manageReviews = reviews => ({
  type: "GET_REVIEWS",
  reviews: reviews
});

export default manageReviews;
