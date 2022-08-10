import { styled } from "@mui/material";
import ArrowLeftOutlined from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlined from "@mui/icons-material/ArrowRightOutlined";
import { sliderItems } from "../data";
import { useState } from "react";

const Container = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  position: "relative",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: { display: "none"}
}));

const Arrow = styled("div")(({ direction }) => ({
  width: "50px",
  height: "50px",
  backgroundColor: "white",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: 0,
  bottom: 0,
  margin: "auto",
  left: direction === "left" ? "10px" : "none",
  right: direction === "right" ? "10px" : "none",
  cursor: "pointer",
  opacity: 0.5,
  zIndex: 2
}));

const Wrapper = styled("div")(({ sindex }) => ({
  height: "100%",
  display: "flex",
  transition: "all 1.5s ease",
  transform: `translateX(${ sindex * -100 }vw)`
}));

const Slide = styled("div")(({ bg }) => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  // backgroundImage: `url(${bgimg})`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
  backgroundColor: bg 
}));

const ImgContainer = styled("div")({
  flex: 1,
  height: "100%"
});

const Image = styled("img")({
    height: "80%"
});

const InfoContainer = styled("div")({
  flex: 1,
  padding: "50px"
});

const Title = styled("h1")({
    fontSize: "56px"
});

const Desc = styled("p")({
    margin: "50px 0px",
    fontSize: "20px",
    fontWeight: 500,
    letterSpacing: "3px"
});

const Button = styled("button")({
    padding: "10px",
    fontSize: "20px",
    backgroundColor: "transparent",
    cursor: "pointer"
});


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2  ? slideIndex + 1 : 0);
        }
    };

  return (
    <Container>
      <Arrow direction="left" onClick={ () => handleClick("left") }>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper sindex={ slideIndex }>
        { sliderItems.map((item) => (
            <Slide bg={ item.bg } key={ item.id }>
            <ImgContainer>
                <Image src={ item.img } />
            </ImgContainer>
            <InfoContainer></InfoContainer>
            <InfoContainer>
                <Title>{ item.title }</Title>
                <Desc>{ item.desc }</Desc>
                <Button>SHOP NOW</Button>
            </InfoContainer>
            </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={ () => handleClick("right") }>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
