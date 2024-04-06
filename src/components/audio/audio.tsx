"use client";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import VolumeUpRounded from "@mui/icons-material/VolumeUpRounded";
import VolumeDownRounded from "@mui/icons-material/VolumeDownRounded";
import { AppBar, Container } from "@mui/material";
import { VolumeDown, VolumeUp } from "@mui/icons-material";
import SkipNextSharpIcon from "@mui/icons-material/SkipNextSharp";
import SkipPreviousSharpIcon from "@mui/icons-material/SkipPreviousSharp";
import PauseSharpIcon from "@mui/icons-material/PauseSharp";
import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
import RepeatIcon from "@mui/icons-material/Repeat";
import RepeatOneIcon from "@mui/icons-material/RepeatOne";
const Widget = styled("div")(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: 343,
  maxWidth: "100%",
  margin: "auto",
  position: "relative",
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)",
  backdropFilter: "blur(40px)",
}));

const CoverImage = styled("div")({
  width: 100,
  height: 100,
  objectFit: "cover",
  overflow: "hidden",
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: "rgba(0,0,0,0.08)",
  "& > img": {
    width: "100%",
  },
});

const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

export default function MusicPlayerSlider() {
  const [valueTimeLine, setValueTimeLine] = React.useState<number>(30);
  const [valueVolumn, setValueVolumn] = React.useState<number>(30);

  const handleChangeTimeLine = (event: Event, newValue: number | number[]) => {
    setValueTimeLine(newValue as number);
    console.log("valueTimeLine", valueTimeLine);
  };
  const handleChangeVolumn = (event: Event, newValue: number | number[]) => {
    setValueVolumn(newValue as number);
    console.log("valueVolumn", valueVolumn);
  };

  function preventHorizontalKeyboardNavigation(event: React.KeyboardEvent) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      console.log("e", event.target);
    }
  }

  const duration = 200; // seconds
  const [position, setPosition] = React.useState(32);
  const [paused, setPaused] = React.useState(false);
  function formatDuration(value: number) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  return (
    <AppBar
      position="fixed"
      sx={{
        top: "auto",
        bottom: 0,
        background: "#f2f2f2",
        border: "1px solid #cecece",
      }}
    >
      <Container>
        <Widget
          sx={{
            display: "flex",
            width: "100%",
            background: "#f2f2f2",
            color: "#333",
            padding: "3px 0",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              button: {
                color: "#333",
              },
            }}
          >
            <IconButton aria-label="previous song">
              <SkipPreviousSharpIcon />
            </IconButton>
            <IconButton
              aria-label={paused ? "play" : "pause"}
              onClick={() => setPaused(!paused)}
            >
              {paused ? <PlayArrowSharpIcon /> : <PauseSharpIcon />}
            </IconButton>
            <IconButton aria-label="next song">
              <SkipNextSharpIcon />
            </IconButton>
            <IconButton aria-label="next song">
              <RepeatOneIcon />
              {/* <RepeatIcon /> */}
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flex: 1,
            }}
          >
            <Stack
              spacing={2}
              direction="row"
              sx={{ width: "100%", margin: "0 24px" }}
              alignItems="center"
            >
              <TinyText sx={{ opacity: 1 }}>
                {formatDuration(position)}
              </TinyText>
              <Slider
                size="small"
                aria-label="range"
                value={valueTimeLine}
                onChange={handleChangeTimeLine}
                sx={{
                  color: "#ff5500",
                  "& .MuiSlider-thumb": {
                    backgroundColor: "#ff5500",
                    border: "1px solid currentColor",
                    "&:hover": {
                      boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
                    },
                    width: "8px",
                    height: "8px",
                    "& .airbnb-bar": {
                      height: 9,
                      width: 1,
                      backgroundColor: "#ccc",
                      marginLeft: 1,
                      marginRight: 1,
                    },
                  },
                  "& .MuiSlider-rail": {
                    opacity: 0.5,
                    backgroundColor: "#ccc",
                  },
                }}
              />
              <TinyText sx={{ opacity: 1 }}>
                -{formatDuration(duration - position)}
              </TinyText>
            </Stack>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                // padding: "14px",
                "&:hover > div": {
                  display: "flex",
                },
              }}
            >
              <Box
                sx={{
                  display: "none",
                  padding: "16px 0",
                  border: "1px solid #ccc",
                  height: "118px",
                  position: "absolute",
                  bottom: "100%",
                  backgroundColor: "#f2f2f2",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  width: "30px",
                  zIndex: 2,
                  "&:after": {
                    content: "''",
                    position: "absolute",
                    bottom: "0",
                    left: "50%",
                    transform: "translate(-50%, 50%) rotate(45deg) ",
                    borderStyle: "solid",
                    borderWidth: "1px",
                    width: "10px",
                    height: "10px",
                    borderColor: "  transparent    #ccc #ccc  transparent  ",
                    backgroundColor: "#f2f2f2",
                    zIndex: 1,
                  },
                }}
              >
                <Slider
                  value={valueVolumn}
                  onChange={handleChangeVolumn}
                  sx={{
                    '& input[type="range"]': {
                      writingMode: "vertical-lr",
                      direction: "rtl",
                    },
                    height: "100%",
                    color: "#ff5500",
                    "> .Mui-focusVisible": {
                      boxShadow: "unset",
                    },
                    "& .MuiSlider-thumb": {
                      backgroundColor: "#ff5500",
                      border: "1px solid currentColor",
                      "&:hover": {
                        boxShadow: "unset",
                      },
                      width: "8px",
                      height: "8px",
                      "& .airbnb-bar": {
                        height: 9,
                        width: 1,
                        backgroundColor: "#ccc",
                        marginLeft: 1,
                        marginRight: 1,
                      },
                      "&:after": {
                        width: "30px",
                        height: "30px",
                      },
                    },
                    "& .MuiSlider-rail": {
                      opacity: 0.5,
                      backgroundColor: "#ccc",
                    },
                  }}
                  size="small"
                  orientation="vertical"
                  aria-label="volumn"
                  onKeyDown={preventHorizontalKeyboardNavigation}
                />
              </Box>
              <IconButton
                aria-label={valueVolumn > 60 ? "max" : "medium"}
                onClick={() => setValueVolumn(0)}
                sx={{ color: "#333", fontSize: "14px" }}
              >
                {valueVolumn > 60 ? <VolumeUp /> : <VolumeDown />}
              </IconButton>
            </Stack>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginLeft: "24px" }}
          >
            <CoverImage
              sx={{ width: "30px", height: "30px", borderRadius: "0" }}
            >
              <img
                alt="can't win - Chilling Sunday"
                src="https://i1.sndcdn.com/artworks-y81IzusucgGzzdpz-ePf9ZQ-t120x120.jpg"
              />
            </CoverImage>
            <Box
              sx={{
                ml: 1.5,
                minWidth: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#999",
                  fontSize: "12px",
                  lineHeight: "16px",
                }}
              >
                Jun Pulse
              </Typography>

              <Typography
                noWrap
                letterSpacing={-0.25}
                sx={{
                  color: "#666",
                  fontSize: "12px",
                  lineHeight: "16px",
                }}
              >
                Buông (Feat. HippoHappy)
              </Typography>
            </Box>
          </Box>
        </Widget>
      </Container>
    </AppBar>
  );
}
