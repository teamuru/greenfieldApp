/* eslint react/jsx-indent: "off" */
/* eslint react/prop-types: "off" */

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteForever from '@material-ui/icons/DeleteForever';
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

const OutfitCard = (props) => {
  const classes = useStyles();

  const {
    category,
    name,
    defaultPrice,
    id,
    img,
    removeFromOutfit,
    stars
  } = props;

  return (
    <Card className={classes.card}>
      <CardHeader
        title={name}
        subheader={`$${defaultPrice}`}
        titleTypographyProps={{ variant: 'h8' }}
      />
      <Rating readOnly value={stars} precision={0.25} max={5} size="small" />
      <CardMedia className={classes.media} image={img} title={name} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {category}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="Remove from outfit"
          onClick={() => {
            removeFromOutfit(id);
          }}
        >
          <div className="remove">
            <DeleteForever />
          </div>
        </IconButton>
      </CardActions>
    </Card>
  );
};

OutfitCard.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  defaultPrice: PropTypes.string.isRequired
};

export default OutfitCard;
