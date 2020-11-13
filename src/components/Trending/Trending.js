import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
  media: {
    height: 500,
    maxHeight: 600,
  },
});

function Trending({ trending }) {
  const classes = useStyles();
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="trending">
      {trending?.results?.map((element, index) => (
        //   (console.log("trending", trending) ),
        <Card className={classes.root} key={index}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={imgUrl + element?.poster_path}
              title={element?.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {element?.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {element?.overview}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default Trending;
