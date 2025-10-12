// src/app/page.js

import Image from "next/image"; 
import Navbar from "../../Components/Homepage/Navbar";
import HeroSection from "../../Components/Homepage/HeroSection";
import FeatureSection from "../../Components/Homepage/FeatureSection";
import AssessmentCategories from "../../Components/Homepage/AssessmentSection";
import HiringTimeline from "../../Components/Homepage/Process";
import { Separator } from "@radix-ui/react-separator";
import Footer from "../../Components/Footer/Footer"

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      
      
      <FeatureSection/>
      
      <Separator/> 
      
      <AssessmentCategories/>
      
      <Separator/> 
      
      <HiringTimeline/>
      <Footer/>
    </div>
  )
}