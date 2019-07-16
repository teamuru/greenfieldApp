import { connect } from 'react-redux';
import ReviewCounter from '../../components/Reviews/ReviewCounter.jsx';
import reviewAction from '../../actions/reviewAction.js';

// TODO: fix reviews
const mapStateToProps = store => ({
  // FIXME: fill me in
});

const mapDispatchToProps = dispatch => ({
  // FIXME: fill me in
});

let reviewCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewCounter);

export default reviewCounter;
