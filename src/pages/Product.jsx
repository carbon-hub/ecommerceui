import { styled } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Announcement from '../components/Announcement'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled("div")({

});

const Wrapper = styled("div")({
    padding: "50px",
    display: "flex"
});

const ImgContainer = styled("div")({
    flex: 1
});

const Image = styled("img")({
    width: "100%",
    height: "90vh",
    objectFit: "cover"
});

const InfoContainer = styled("div")({
    flex: 1,
    padding: "0px 50px"
});

const Title = styled("h1")({
    fontWeight: 200
});

const Desc = styled("p")({
    margin: "20px 0px"
});

const Price = styled("span")({
    fontWeight: 100,
    fontSize: "40px"
});

const FilterContainer = styled("div")({
    width: "50%",
    margin: "30px 0px",
    display: "flex",
    justifyContent: "space-between"
});

const Filter = styled("div")({
    display: "flex",
    alignItems: "center"
});

const FilterTitle = styled("span")({
    fontSize: "20px",
    fontWeight: 200
});

const FilterColor = styled("div")(({color}) => ({
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: color,
    margin: "0px 5px",
    cursor: "pointer"
}));

const FilterSize = styled("select")({
    marginLeft: "10px",
    padding: "5px"
});

const FilterSizeOption = styled("option")({

});

const AddContainer = styled("div")({
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
});

const AmountContainer = styled("div")({
    display: "flex",
    alignItems: "center",
    fontWeight: 700
});

const Amount = styled("span")({
    width: "30px",
    height: "30px",
    borderRadius: "10px",
    border: "1px solid teal",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0px 5px"
});

const Button = styled("button")({
    padding: "15px",
    border: "2px solid teal",
    backgroundColor: "white",
    cursor: "pointer",
    fontWeight: 500,
    "&:hover": {
        backgroundColor: "#f8f4f4"
    }
});

const Product = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
            <ImgContainer>
                <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                tristique tortor pretium ut. Curabitur elit justo, consequat id
                condimentum ac, volutpat ornare.
                </Desc>
                <Price>$ 20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black" />
                        <FilterColor color="darkblue" />
                        <FilterColor color="gray" />
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>                    
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <RemoveIcon />
                        <Amount>1</Amount>
                        <AddIcon />
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product