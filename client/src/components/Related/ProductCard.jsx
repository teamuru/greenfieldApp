/* eslint react/jsx-indent: "off" */
/* eslint react/prop-types: "off" */

import React, { useState } from 'react';
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
// import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles({
  card: {
    width: '30vw',
    height: '27vw'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9 aspect ratio
    // 'object-fit': 'contain'
  }
});

const ProductCard = (props) => {
  const classes = useStyles();

  const {
 category, name, defaultPrice, image, id, addToOutfit 
} = props;

  // TODO: move to parent
  const [compare, setCompare] = useState(false);

  function handleCompareClick() {
    setCompare(!compare);
  }

  if (image) {
    const img = image.photo.results[0].photos[0].thumbnail_url;
    return (
      <Card className={classes.card}>
        <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
          <CardHeader
            title={name}
            subheader={`$${defaultPrice}`}
            style={{ height: '10vw' }}
          />
          <CardMedia className={classes.media} image={img} title={name} />
        </Link>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {category}
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton
            aria-label="Add to favorites"
            onClick={() => {
              addToOutfit({
                category,
                name,
                defaultPrice,
                img,
                id
              });
            }}
          >
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

ProductCard.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  defaultPrice: PropTypes.string.isRequired
};

export default ProductCard;
