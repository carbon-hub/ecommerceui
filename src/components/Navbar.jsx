import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Badge, styled } from '@mui/material'

const Container = styled("div")(({ theme }) => ({
    height: "60px",
    [theme.breakpoints.down("sm")]: { height: "50px"}
}));

const Wrapper = styled("div")(({theme}) => ({
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: { padding: "10px 0px"}
}));

const Left = styled("div")({
    flex: 1,
    display: "flex",
    alignItems: "center"
});

const Center = styled("div")({
    flex: 1,
    textAlign: "center"
});

const Right = styled("div")(({ theme } ) => ({
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: { flex: 2, justifyContent: "center"}
}));

const Language = styled("span")(({ theme }) => ({
    fontSize: "14px",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: { display: "none"}    
}));

const SearchContainer = styled("div")({
    border: "0.5px solid lightgray",
    display: "flex",
    alignItems: "center",
    marginLeft: "25px",
    padding: "5px"
});


const Input = styled("input")(({ theme }) => ({
    border: "none",
    [theme.breakpoints.down("sm")]: { width: "50px"}    
}));

const Logo = styled("h1")(({ theme }) => ({
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: { fontSize: "24px"}
}));

const MenuItem = styled("div")(({ theme }) => ({
    fontSize: "14px",
    cursor: "pointer",
    marginLeft: "25px",
    [theme.breakpoints.down("sm")]: { fontSize: "12px", marginLeft: "10px"}
}));

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search'/>
                    <SearchIcon sx={{ color: "gray", fontSize: 16 }}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>CarbonHub</Logo>
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlinedIcon/>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar