import { connect } from 'react-redux';
import StarGraph from '../../components/Reviews/StarGraph.jsx/index.js';
import reviewAction from '../../actions/reviewAction.js';

// TODO: fix reviews
const mapStateToProps = store => ({
  // FIXME: fill me in
});

const mapDispatchToProps = dispatch => ({
  // FIXME: fill me in
});

let starGraph = connect(
  mapStateToProps,
  mapDispatchToProps
)(StarGraph);

export default starGraph;
