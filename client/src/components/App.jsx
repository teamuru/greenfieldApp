import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { fetchProduct } from '../actions/productActions';
import { fetchReviews } from '../actions/reviewActions';
import { fetchQuestions } from '../actions/questionsActions';
import { fetchRelatedIDs } from '../actions/relatedActions';

const Product = ({ match }) => (
  <div>
    <h5>
      {' '}
      Render Product with id:
      {match.params.id}
    </h5>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO: fixed with live ids later on
      productIds: [1, 2, 3, 4, 5]
    };
  }

  componentDidMount() {
    const {
 fetchProd, fetchQuests, fetchRev, fetchRelated 
} = this.props;
    fetchProd(1);
    fetchQuests(1);
    fetchRev(1);
    fetchRelated(1);
  }

  render() {
    const { productIds } = this.state;
    return (
      <div className="container">
        <Router>
          <div>
            <nav>
              <div className="nav-wrapper">
                <div className="left brand-logo">Greenfield Logo</div>
                <ul className="right">
                  <li>
                    {/* TODO: fix "/" once products are loaded */}
                    <a href="/"> Products </a>
                  </li>
                </ul>
              </div>
            </nav>
            <ul>
              {productIds.map(product => (
                <li key={product}>
                  <Link to={`/${product}`}>
                    {' '}
                    Product
                    {product}
                  </Link>
                </li>
              ))}
            </ul>

            <Route path="/:id" component={Product} />
          </div>
        </Router>
      </div>
    );
  }
}

Product.propTypes = {
  match: PropTypes.objectOf(Object).isRequired
};

App.propTypes = {
  fetchProd: PropTypes.func.isRequired,
  fetchRev: PropTypes.func.isRequired,
  fetchQuests: PropTypes.func.isRequired,
  fetchRelated: PropTypes.func.isRequired
};

const mapStateToProps = store => ({
  product: store.product,
  questions: store.questions,
  reviews: store.reviews,
  related: store.related
});

const mapDispatchToProps = dispatch => ({
  fetchProd: (id) => {
    dispatch(fetchProduct(id));
  },
  fetchQuests: (id) => {
    dispatch(fetchQuestions(id));
  },
  fetchRev: (id) => {
    dispatch(fetchReviews(id));
  },
  fetchRelated: (id) => {
    dispatch(fetchRelatedIDs(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
