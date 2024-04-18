import { Slider,Card,FeaturedProducts, Categories, Contact } from "../../components";
import featuredItems from "../../constants/trendingItems/featuredItems";
import trendingItems from "../../constants/trendingItems/trendingItems";

const Home = ()=>{

    return(
        <div className="my-4 sm:my-7 md:my-10 lg:my-12">

            <Slider />
            <FeaturedProducts type='Featured' productsList={featuredItems}/>
            <Categories />
            <FeaturedProducts type='Trending' productsList={trendingItems}/>
            <Contact />
            
        </div>
    )
}

export default Home;