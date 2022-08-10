import { styled } from "@mui/material"

const Container = styled("div")({
    height: "30px",
    backgroundColor: "teal",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: 500
})


const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders over $100.
    </Container>
  )
}

export default Announcement