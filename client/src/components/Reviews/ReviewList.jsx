import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ReviewEntry from './ReviewEntry';

// const ReviewList = (props) => {
//   const { reviews } = props;

//   return reviews.data ? (
//     <div>
//       {/* {reviews.data.results.slice(0, 2).map( */}
//       {reviews.data.results.map((review) => {
//         return (
//           <div key={review.review_id}>
//             <ReviewEntry review={review} />
//           </div>
//         );
//       })}
//     </div>
//   ) : (
//     <h1>... Loading</h1>
//   );
// };

class ReviewList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //
    };
  }

  render() {
    const { data } = this.props.reviews;
    return !data ? (
      <h3>...Loading reviews</h3>
    ) : (
      <div>
        <h1> hi</h1>
        {console.log(`props`, data)}
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  reviews: store.reviews
});

export default connect(mapStateToProps)(ReviewList);
