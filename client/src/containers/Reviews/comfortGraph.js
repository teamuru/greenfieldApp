import { connect } from 'react-redux';
import ComfortGraph from '../../components/Reviews/ComfortGraph.jsx';
import reviewAction from '../../actions/reviewAction.js';

// TODO: fix reviews
const mapStateToProps = store => ({
  // FIXME: fill me in
});

const mapDispatchToProps = dispatch => ({
  // FIXME: fill me in
});

let comfortGraph = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComfortGraph);

export default comfortGraph;
