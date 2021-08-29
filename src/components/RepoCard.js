import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

// Material Ui Inline styling
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 270,
    disableRipple: true,
    minHeight: 500,
    marginBottom: '1rem',
    [theme.breakpoints.down('sm')]: {
      minHeight: 450,
    },
  },
  button: {
    marginLeft: '16px',
    marginBottom: '10px',
  },
  cardMedia: {
    width: '100%',
    height: '100%',
  },
  fontWeight: {
    fontWeight: '700',
    fontSize: '1rem',
  },
  flex: {
    display: 'flex',
  },
  margin: {
    marginLeft: '0.2rem',
  },
  underLine: {
    color: 'blue',
    textDecoration: 'underline',
    textDecorationColor: 'blue',
    marginLeft: '0.2rem',
  },
}));

const RepoCard = ({ product }) => {
  const classes = useStyles();

  // Taking the user to the repository page
  const handleViewRepository = (url) => {
    window.open(url);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea disableRipple>
        <CardMedia
          className={classes.cardMedia}
          component='img'
          alt='Contemplative Reptile'
          height='140'
          image={product?.owner?.avatar_url}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='subtitle2'
            className={classes.fontWeight}
            component='h2'
          >
            {product?.full_name}
          </Typography>
          <Typography className={classes.flex}>
            <StarIcon style={{ fill: '#FFA500' }}></StarIcon>
            <span className={classes.margin}>{product?.stargazers_count}</span>
          </Typography>
          <Typography className={classes.flex}>
            <LocalOfferIcon style={{ fill: '#EAD38D' }}></LocalOfferIcon>
            <a
              className={classes.underLine}
              href={`https://codeload.${
                product?.html_url.split('//')[1]
              }/zip/refs/heads/master`}
            >
              {product?.name}
            </a>
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {product?.description?.slice(0, 100)}
            {product?.description?.length > 100 ? <span>...</span> : null}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button
        className={classes.button}
        variant='contained'
        color='primary'
        size='small'
        onClick={() => handleViewRepository(product?.owner?.html_url)}
      >
        View Repository
      </Button>
    </Card>
  );
};

export default RepoCard;
