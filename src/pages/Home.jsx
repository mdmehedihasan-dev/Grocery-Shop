import AboutSection from "../components/home/AboutSection"
import Banner from "../components/home/Banner"
import BlogSection from "../components/home/BlogSection"
import CustomerTestimonial from "../components/home/CustomerTestimonial"
import ProductsSection from "../components/home/ProductsSection"
import SeasonalFruit from "../components/home/SeasonalFruit"

const Home = () => {
  return (
    <div>
        <Banner/>
        <ProductsSection/>
        <AboutSection/>
        <SeasonalFruit/>
        <CustomerTestimonial/>
        <BlogSection/>

    </div>
  )
}

export default Home