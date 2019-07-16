import { connect } from 'react-redux';
import MoreReviews from '../../components/Reviews/MoreReviews.jsx';
import reviewAction from '../../actions/reviewAction.js';

// TODO: fix reviews
const mapStateToProps = store => ({
  // FIXME: fill me in
});

const mapDispatchToProps = dispatch => ({
  // FIXME: fill me in
});

let moreReviews = connect(
  mapStateToProps,
  mapDispatchToProps
)(MoreReviews);

export default moreReviews;
