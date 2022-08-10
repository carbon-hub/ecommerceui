import { styled } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled("div")({

});

const Wrapper = styled("div")({
    padding: "2px"
});

const Title = styled("h1")({
    fontWeight: 300,
    textAlign: "center"
});

const Top = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px"
});

const TopButton = styled("button")(({ type }) => ({
    padding: "10px",
    fontWeight: 600,
    cursor: "pointer",
    border: `${type} === "filled" && "none"`,
    backgroundColor: `${type} === "filled" ? "black" : "transparent"`,
    color: `${type} === "filled" && "white"`
}));

const TopTexts = styled("div")({
});

const TopText = styled("span")({
    textDecoration: "underline",
    cursor: "pointer",
    margin: "0px 10px"
});

const Bottom = styled("div")({
    display: "flex",
    justifyContent: "space-between"
});

const Info = styled("div")({
    flex: 3
});

const Product = styled("div")({
    display: "flex",
    justifyContent: "space-between"
});

const ProductDetail = styled("div")({
    flex: 2,
    display: "flex"
});

const Image = styled("img")({
    width: "200px"
});

const Details = styled("div")({
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
});

const ProductName = styled("span")({
});

const ProductId = styled("span")({
});

const ProductColor = styled("div")(({ color }) => ({
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: color
}));

const ProductSize = styled("span")({
});

const PriceDetail = styled("div")({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
});

const ProductAmountContainer = styled("div")({
    display: "flex",
    alignItems: "center",
    marginBottom: "20px"
});

const ProductAmount = styled("div")({
    fontSize: "24px",
    margin: "5px"
});

const ProductPrice = styled("div")({
    fontSize: "30px",
    fontWeight: 200
});

const Hr = styled("hr")({
    backgroundColor: "#eee",
    border: "none",
    height: "1px"
});

const Summary = styled("div")({
    flex: 1,
    border: "0.5px solid lightgray",
    borderRadius: "10px",
    padding: "20px",
    height: "50vh"
});

const SummaryTitle = styled("h1")({
    fontWeight: 200
});

const SummaryItem = styled("div")(({ type }) => ({
    margin: "30px 0px",
    display: "flex",
    justifyContent: "space-between",
    fontWeight: `${type} === "total" && "500"`,
    fontSize: `${type} === "total" && "24px"`
}));

const SummaryItemText = styled("span")({

});

const SummaryItemPrice = styled("span")({

});

const Button = styled("button")({
    width: "100%",
    padding: "10px",
    backgroundColor: "black",
    color: "white",
    fontWeight: 600
});

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon />
                  <ProductAmount>2</ProductAmount>
                  <RemoveIcon />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> HAKURA T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon />
                  <ProductAmount>1</ProductAmount>
                  <RemoveIcon />
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart