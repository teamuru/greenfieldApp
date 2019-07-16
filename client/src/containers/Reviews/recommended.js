import { connect } from 'react-redux';
import Recommended from '../../components/Reviews/Recommended.jsx';
import reviewAction from '../../actions/reviewAction.js';

// TODO: fix reviews
const mapStateToProps = store => ({
  // FIXME: fill me in
});

const mapDispatchToProps = dispatch => ({
  // FIXME: fill me in
});

let recommended = connect(
  mapStateToProps,
  mapDispatchToProps
)(Recommended);

export default recommended;
