import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { flexbox } from '@material-ui/system';
import "./Trending.css";
import { Tooltip } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexWrap: "wrap",
    flexDirection: "row",
    maxWidth: 350,
    marginBottom: 30,
    maxHeight: 700
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
              {element?.media_type !== "tv" &&
                <Typography gutterBottom variant="h5" component="h2">
                  {element?.original_title}
                </Typography>
              }{element?.name &&
                <Typography gutterBottom variant="h5" component="h2">
                  {element?.name}
                </Typography>
              }
              <Tooltip title={<p style={{ fontSize: 14 }}>{element?.overview}</p>} enterDelay={800} css={{ fontSize: 16 }}>
                <Typography variant="body2" align="justify" paragraph={true} color="black" component="p" className="overview">
                  {element?.overview}
                </Typography>
              </Tooltip>
              
              {element?.media_type == "tv" &&
                < Typography align="left" variant="subtitle2" color="textSecondary" component="p">
                  {element?.media_type.toUpperCase()} series
                </Typography>
              }
              {element?.media_type == "movie" &&
                < Typography align="left" variant="subtitle2" color="textSecondary" component="p">
                  {element?.media_type.toUpperCase()}
                </Typography>
              }

              <Typography variant="subtitle2" align="right" color="textSecondary" >
                {element?.vote_average}
              </Typography>
              <Typography variant="subtitle2" align="right" color="textSecondary" >
                {element?.vote_count}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}

export default Trending;
