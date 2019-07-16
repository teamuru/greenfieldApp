import { connect } from 'react-redux';
import SizeGraph from '../../components/Reviews/SizeGraph.jsx/index.js';
import reviewAction from '../../actions/reviewAction.js';

// TODO: fix reviews
const mapStateToProps = store => ({
  // FIXME: fill me in
});

const mapDispatchToProps = dispatch => ({
  // FIXME: fill me in
});

let sizeGraph = connect(
  mapStateToProps,
  mapDispatchToProps
)(SizeGraph);

export default sizeGraph;
