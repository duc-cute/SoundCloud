import icons from "@/ultils/icons";
import { IconButton } from "@mui/material";
const { RepeatIcon, RepeatOneIcon } = icons;

export const nextStatusSong: IStatusSong = {
  noRepeat: "repeat",
  repeat: "repeatOne",
  repeatOne: "noRepeat",
};
export const iconStatusSong = {
  noRepeat: <RepeatOneIcon sx={{ color: "#ff5500" }} />,
  repeat: <RepeatIcon />,
  repeatOne: <RepeatIcon sx={{ color: "#ff5500" }} />,
};
