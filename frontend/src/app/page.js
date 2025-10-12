import Image from "next/image";
import Navbar from "../../Components/Homepage/Navbar";
import HeroSection from "../../Components/Homepage/HeroSection";
import FeatureSection from "../../Components/Homepage/FeatureSection"
export default function Home() {
  return (
    
    <div>
      <Navbar/>
      <HeroSection/>
      <FeatureSection/>
    </div>
  )
}