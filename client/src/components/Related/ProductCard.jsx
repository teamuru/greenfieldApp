/* eslint react/jsx-indent: "off" */

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

const ProductCard = (props) => {
  const classes = useStyles();

  const {
 category, name, defaultPrice, image 
} = props;

  if (image) {
    return (
      <>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              title={name}
              image={image.photo.results[0].photos[0].thumbnail_url}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" />
              <Typography variant="body2" color="textSecondary" component="p">
                {category} 
{' '}
<br />
                {name}
                <br />
                {defaultPrice} 
{' '}
<br />
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </>
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
