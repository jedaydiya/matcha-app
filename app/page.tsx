import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Header from "../components/header"
import HeroSection from "@/components/hero-section";
import Features from "@/components/features";
export default function Home() {
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <Features></Features>
    </>
  );
}
