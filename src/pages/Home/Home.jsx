import { useLoaderData } from "react-router-dom";

import ContactUs from "../ContactUs/ContactUs";
import Banner from "./Banner";
import HomeRecipes from "./HomeRecipes";
import AboutUs from "../AboutUs/AboutUs";
import Review from "../Review/Review";
import Partners from "../Partners/Partners";

const Home = () => {
  const recipes = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <HomeRecipes recipes={recipes}></HomeRecipes>
      <AboutUs></AboutUs>
      <Review></Review>
      <Partners></Partners>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
