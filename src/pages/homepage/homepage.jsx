import Navbar from "../../common/navbar/navbar";
import Categories from "../../common/categories/categories";
import Carousel from "./components/carousel";
import Grid1 from "./components/homebody/grid1.js"
import Grid2 from "./components/homebody/grid2.js"
import CarouselDeal from "./components/carousel/carousel2.js";
import Footer from "../../common/footer/index.js";


const Homepage = () => {
    return (
        <>
        <Navbar />
        <Categories />
        <Carousel />
        <Grid1 />
        <Grid2 />
        <CarouselDeal />
        <CarouselDeal />
        <Grid1 />
        <Grid2 />
        <CarouselDeal />
        <CarouselDeal />
        <Grid1 />
        <Grid2 />
        <Footer />
        </>
    )
}

export default Homepage;