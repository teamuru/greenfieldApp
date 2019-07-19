import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

const ProductCard = () => {
  const classes = useStyles();

  return (
    <>
      <br />
      <br />
      <br />
      <Card className={classes.card}>
        <CardActionArea>
          {/* <CardMedia className={classes.media} image="" title="" /> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" />
            <Typography variant="body2" color="textSecondary" component="p">
              camo onsie camo onsie camo onsie camo onsie camo onsie camo onsie
              camo onsie camo onsie
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

// }

export default ProductCard;
