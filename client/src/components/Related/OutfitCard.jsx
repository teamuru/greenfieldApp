/* eslint react/jsx-indent: "off" */
/* eslint react/prop-types: "off" */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CompareArrowsIcon from '@material-ui/icons/CompareArrowsSharp';

const useStyles = makeStyles({
  card: {
    width: '30vw',
    height: '27vw'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9 aspect ratio
  }
});

const OutfitCard = () => {
  const classes = useStyles();

  //   const {
  //  category, name, defaultPrice, image, id
  // } = props;

  useEffect(() => {
    const keys = Object.keys(localStorage);
    const values = [];
    keys.forEach((key) => {
      values.push(localStorage.getItem(key));
    });
  }, []);

  const removeFromOutfit = () => {};

  const [compare, setCompare] = useState(false);

  const handleCompareClick = () => {
    setCompare(!compare);
  };

  if (image) {
    return (
      <Card className={classes.card}>
        <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
          <CardHeader
            title={name}
            subheader={`$${defaultPrice}`}
            style={{ height: '10vw' }}
          />
          <CardMedia
            className={classes.media}
            image={image.photo.results[0].photos[0].thumbnail_url}
            title={name}
          />
        </Link>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {category}
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton aria-label="Add to favorites" onClick={addToOutfit}>
            <div className="favorite">
              <FavoriteIcon />
            </div>
          </IconButton>
          <IconButton onClick={handleCompareClick} aria-label="Show more">
            <CompareArrowsIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
  return null;
};

OutfitCard.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  defaultPrice: PropTypes.string.isRequired
};

export default OutfitCard;
