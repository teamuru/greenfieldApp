import React from 'react';
import { connect } from 'react-redux';

import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import * as actions from '../../actions/reviewsActions';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    fontSize: 20
  }
}));

const style = {
  menuStyle: {
    fontSize: 15
  }
};

const ReviewSortControl = (props) => {
  const classes = useStyles();

  const handleChange = (e) => {
    const { sortReviews } = props;
    sortReviews(e.target.value);
  };

  return (
    <FormControl style={style.menuStyle}>
      <Select
        value={props.sort}
        name="sort"
        displayEmpty
        onChange={handleChange}
        className={classes.formControl}
      >
        <MenuItem value="relevant">Relevance</MenuItem>
        <MenuItem value="newest">Newest</MenuItem>
        <MenuItem value="helpfulness">Helpfulness</MenuItem>
      </Select>
    </FormControl>
  );
};

let mapStateToProps = (store) => ({
  sort: store.reviewSort
});

export default connect(
  mapStateToProps,
  actions
)(ReviewSortControl);
