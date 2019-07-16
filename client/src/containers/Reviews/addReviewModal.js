import { connect } from 'react-redux';
import AddReviewModal from '../../components/Reviews/AddReviewModal.jsx';
import reviewAction from '../../actions/reviewAction.js';

// TODO: fix reviews
const mapStateToProps = store => ({
  // FIXME: fill me in
});

const mapDispatchToProps = dispatch => ({
  // FIXME: fill me in
});

let addReviewModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddReviewModal);

export default addReviewModal;
