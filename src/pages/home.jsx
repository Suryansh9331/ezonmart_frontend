import NewArrivals from "../components/layout/newarrival";
import Hero from "../components/layout/hero";
import Navbar from "../components/layout/Navbar";
import StaticImageShowcase from "../components/layout/StaticImageShowcase";
 
function Home() {
  return (
    <div>
       <Navbar/>
      <Hero />
      <NewArrivals />  
      <StaticImageShowcase/>
    </div>
  );
}

export default Home;  
