/** @format */
"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Settings } from "react-slick";
import { Box, Button } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const MainSlider = () => {
  const NextArrow = (props: any) => {
    return (
      <Button
        onClick={props.onClick}
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateX(100%)",
          zIndex: 2,
          width: "32px",
          height: "32px",
          border: "1px solid #e5e5e5",
          minWidth: "32px",
          color: "#333",
          "&:hover": {
            borderColor: "#f50",
            color: "#f50",
          },
        }}
      >
        <ChevronRight />
      </Button>
    );
  };
  const PrevArrow = (props: any) => {
    return (
      <Button
        onClick={props.onClick}
        sx={{
          position: "absolute",
          left: 0,
          transform: "translateX(-100%)",
          top: "50%",
          zIndex: 2,
          width: "32px",
          height: "32px",
          border: "1px solid #e5e5e5",
          minWidth: "32px",
          color: "#333",
          backgroundColor: "#fff",
          "&:hover": {
            borderColor: "#f50",
            color: "#f50",
          },
        }}
      >
        <ChevronLeft />
      </Button>
    );
  };
  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Box
      sx={{
        margin: "0 50px",
        h3: {
          color: "#333",
          fontSize: "24px",
          marginBottom: "24px",
        },
        ".track-item": {
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          border: "1px solid #ccc",
        },
        ".track-item > h3": {
          textAlign: "center",
        },
      }}
    >
      <h2>Trending Music on SoundCloud</h2>

      <Slider {...settings}>
        <div className="track-item">
          <h3>Track 1</h3>
        </div>
        <div className="track-item">
          <h3>Track 2</h3>
        </div>
        <div className="track-item">
          <h3>Track 3</h3>
        </div>
        <div className="track-item">
          <h3>Track 4</h3>
        </div>
        <div className="track-item">
          <h3>Track 5</h3>
        </div>
        <div className="track-item">
          <h3>Track 6</h3>
        </div>
      </Slider>
    </Box>
  );
};

export default MainSlider;
