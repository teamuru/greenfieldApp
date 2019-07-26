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
    fontSize: 20
  }
};

const ReviewSortControl = (props) => {
  const classes = useStyles();
  console.log(props);

  const handleChange = (e) => {
    const { sortReviews } = props;
    sortReviews(e.target.value);
  };

  return (
    <FormControl>
      <Select
        value={props.sort}
        name="sort"
        displayEmpty
        onChange={handleChange}
        className={classes.selected}
      >
        <MenuItem value="relevant">Relevance</MenuItem>
        <MenuItem value="newest">Newest</MenuItem>
        <MenuItem value="helpful">Helpfulness</MenuItem>
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

// const SelectControl = () => {
//   const classes = useStyles();
//   const [rev, setRev] = React.useState('');
//   const [open, setOpen] = React.useState(false);

//   const handleChange = (event) => {
//     setRev(event.target.value);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   return (
//     <span>
//       <FormControl className={classes.formControl}>
//         <InputLabel style={style.menuStyle}>Relevance</InputLabel>
//         <Select
//           open={open}
//           onClose={handleClose}
//           onOpen={handleOpen}
//           value={rev}
//           onChange={handleChange}
//           inputProps={{
//             name: 'rev'
//           }}
//           style={style.menuStyle}
//         >
//           <MenuItem value="" style={style.menuStyle}>
//             <em>None</em>
//           </MenuItem>
//           <MenuItem value={10} style={style.menuStyle}>
//             Newest
//           </MenuItem>
//           <MenuItem value={20} style={style.menuStyle}>
//             Helpfulness
//           </MenuItem>
//           <MenuItem value={30} style={style.menuStyle}>
//             Relevance
//           </MenuItem>
//         </Select>
//       </FormControl>
//     </span>
//   );
// };

// export default SelectControl;
