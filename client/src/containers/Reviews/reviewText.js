import { connect } from 'react-redux';
import ReviewText from '../../components/Reviews/ReviewText.jsx';
import reviewAction from '../../actions/reviewAction.js';

// TODO: fix reviews
const mapStateToProps = store => ({
  // FIXME: fill me in
});

const mapDispatchToProps = dispatch => ({
  // FIXME: fill me in
});

let reviewText = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewText);

export default reviewText;
