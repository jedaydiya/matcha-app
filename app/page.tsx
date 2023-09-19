import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "../components/header"
import HeroSection from "@/components/hero-section";
import Features from "@/components/features";
import Subscription from "@/components/subscriptions";
import Footer from "@/components/footer";
import Contact from "@/components/contact"
import FAQs from "@/components/faqs"
import Testmional from "@/components/testimonial"
export default function Home() {
  return (
    <>
      <div>
        <Header></Header>
        <HeroSection></HeroSection>
        <Features></Features>
        <Subscription></Subscription>
        <FAQs></FAQs>
        <Testmional></Testmional>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </>
  );
}
