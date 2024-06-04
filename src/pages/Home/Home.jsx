import AllRecipes from "../AllRecipes/AllRecipes";
import ContactUs from "../ContactUs/ContactUs";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllRecipes></AllRecipes>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;