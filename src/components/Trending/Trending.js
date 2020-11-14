import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { flexbox } from "@material-ui/system";
import "./Trending.css";
import Carousel from "react-elastic-carousel";
import { Tooltip } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles({
  root: {
    flexWrap: "wrap",
    flexDirection: "row",
    width: 250,
    height: 425,
    backgroundColor: "black",
  },
  media: {
    height: 320,
  },
});

function Trending({ trending }) {
  const classes = useStyles();
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 4 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
  return (
    <div className="container">
      <h2>Trending</h2>
      <div className="trending">
        <div className="carousal">
          <Carousel
            itemsToScroll={2}
            itemsToShow={6}
            pagination={false}
            easing={"ease"}
            breakPoints={breakPoints}
          >
            {trending?.results
              ?.filter((a) => a.original_language === "en")
              .map((element, index) => (
                <Card className={classes.root} key={index}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={imgUrl + element?.poster_path}
                      title={element?.title}
                    />
                    <CardContent className="card-content">
                      {/* <Tooltip title={<p style={{ fontSize: 14 }}>{element?.overview}</p>} enterDelay={800} css={{ fontSize: 16 }}>
                <Typography variant="body2" align="justify" paragraph={true} color="black" component="p" className="overview">
                  {element?.overview}
                </Typography>
              </Tooltip> */}

                      {element?.media_type !== "tv" && (
                        <Typography gutterBottom style={{ fontSize: 14 }}>
                          {element?.original_title}
                        </Typography>
                      )}
                      {element?.name && (
                        <Typography gutterBottom style={{ fontSize: 14, fontWeight: "600" }}>
                          {element?.name}
                        </Typography>
                      )}

                      {element?.media_type === "tv" && (
                        <Typography style={{ fontSize: 12 }}>
                          {element?.media_type.charAt(0).toUpperCase() +
                            element?.media_type.slice(1)}{" "}
                          Series
                        </Typography>
                      )}

                      {element?.media_type === "movie" && (
                        <Typography style={{ fontSize: 12 }}>
                          {element?.media_type.charAt(0).toUpperCase() +
                            element?.media_type.slice(1)}
                        </Typography>
                      )}

                      <Typography style={{ fontSize: 12 }}>
                        <StarIcon style={{ color: "yellow", fontSize: 12 }} />{" "}
                        {element?.vote_average}
                      </Typography>
                      {/* <Typography variant="subtitle2" align="right" >
                  {element?.vote_count}
                </Typography> */}
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Trending;
