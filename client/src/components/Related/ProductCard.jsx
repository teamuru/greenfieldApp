/* eslint react/jsx-indent: "off" */
/* eslint react/prop-types: "off" */

import React from 'react';
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
import StarIcon from '@material-ui/icons/Star';
import CircularProgress from '@material-ui/core/CircularProgress';
import CompareArrowsIcon from '@material-ui/icons/CompareArrowsSharp';
import Rating from '@material-ui/lab/Rating';


const useStyles = makeStyles({
  card: {
    width: '15vw',
    height: '25vw'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9 aspect ratio
  }
});

const ProductCard = (props) => {
  const classes = useStyles();
  const {
    category,
    name,
    defaultPrice,
    image,
    id,
    features,
    addToOutfit,
    showModal,
    stars
  } = props;

  if (image && stars) {
    const img = image.photo.results[0].photos[0].thumbnail_url
      || 'http://contrapoderweb.com/wp-content/uploads/2014/10/default-img-768x461.gif';

    return (
      <Card className={classes.card}>
        <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
          <CardHeader
            title={name}
            subheader={`$${defaultPrice}`}
            // TODO: fix this console error
            titleTypographyProps={{ variant: 'h8' }}
          />
          <Rating readOnly value={stars} precision={0.25} max={5} size="small" />
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
                id,
                stars
              });
            }}
          >
            <div className="favorite">
              <StarIcon />
            </div>
          </IconButton>
          <IconButton
            onClick={() => {
              showModal(features, name);
            }}
            aria-label="Show more"
          >
            <CompareArrowsIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  } return <CircularProgress />;
};

ProductCard.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  defaultPrice: PropTypes.string.isRequired
};

export default ProductCard;
