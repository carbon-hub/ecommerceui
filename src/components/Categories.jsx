import { styled } from "@mui/material";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled("div")(({ theme }) => ({
    display: "flex",
    padding: "20px",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: { padding: "0px", flexDirection: "column"}
}));


const Categories = () => {
  return (
    <Container>
        { categories.map(item => (
            <CategoryItem item={ item } key={ item.id } />
        ))}
    </Container>
  )
}

export default Categories