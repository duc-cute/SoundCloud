/** @format */

import MainSlider from "@/components/main/slider";
import { Container } from "@mui/material";
import { Settings } from "react-slick";

const HomePage = () => {
  return (
    <Container sx={{ marginTop: "30px" }}>
      <MainSlider />
    </Container>
  );
};

export default HomePage;
