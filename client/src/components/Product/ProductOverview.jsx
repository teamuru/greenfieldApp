import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Grid from '@material-ui/core/Grid';

import Carousel from './Carousel';
import Details from './Details';
import Description from './Description';
import Checklist from './Checklist';
import {
 resetStore, fetchProduct, fetchStyles, fetchRatings 
} from '../../actions/productActions';

class ProductOverview extends Component {
  // Dispatch Products and Styles actions after first mount
  componentDidMount() {
    const {
 getProducts, getStyles, getRatings, location 
} = this.props;
    getProducts(location.pathname);
    getStyles(location.pathname);
    getRatings(location.pathname);
  }

  // Dispatch Products and Styles actions and reset store only after route changes 
  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location !== prevProps.location) {
      const {
 reset, getProducts, getStyles, getRatings 
} = this.props;
      reset();
      getProducts(location.pathname);
      getStyles(location.pathname);
      getRatings(location.pathname);
    }
  }

  render() {
    const { data, expandedView } = this.props;
    // Attempt to render component only if we have products data in store
    return !Object.keys(data).length ? (
      <h1>Loading Product</h1>
    ) : (
      <div style={{ margin: '2rem 0' }}>
        <Grid container spacing={3}>
          {/* If expanded view, only display carousel and not details at all */}
          {expandedView ? (
            <Grid item container sm justify="center">
              <Carousel />
            </Grid>
          ) : (
            <React.Fragment>
              <Grid item container sm={8} justify="center">
                <Carousel />
              </Grid>
              <Grid item container sm={4} justify="flex-start" direction="column">
                <Details name={data.name} category={data.category} />
              </Grid>
            </React.Fragment>
          )}
        </Grid>
        <Grid container spacing={2}>
          <Grid item container sm={8} justify="center">
            <Description slogan={data.slogan} description={data.description} />
          </Grid>
          <Grid item container sm={4} justify="flex-start" direction="column">
            <Checklist features={data.features} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

ProductOverview.propTypes = {
  reset: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired,
  getStyles: PropTypes.func.isRequired,
  getRatings: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  expandedView: PropTypes.bool.isRequired
};

const mapStateToProps = store => ({
  data: store.product.data,
  expandedView: store.product.expandedView
});

const mapDispatchToProps = dispatch => ({
  reset: () => dispatch(resetStore()),
  getProducts: id => dispatch(fetchProduct(id)),
  getStyles: id => dispatch(fetchStyles(id)),
  getRatings: id => dispatch(fetchRatings(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductOverview);
