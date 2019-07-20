import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import StarGraph from './StarGraph.jsx';

export class StarGraphsList extends Component {
  // some functtions here
  render() {
    const ratings = [1, 2, 3, 4, 5];
    return (
      <React.Fragment>
        {ratings.map((element) => {
          return (
            <div style={{ fontSize: 15 }} key={element}>
              {element} Stars
              <StarGraph variant="determinate" value={element} />
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default StarGraphsList;
