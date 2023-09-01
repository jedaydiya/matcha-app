import Image from "next/image";
import Container from "../components/container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <header className="px-4 py-3 sm:flex sm:justify-between">
        <Container>
          <div className="relative flex h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Matcha
              </h1>
            </div>
            <nav className="mx-6 flex items-center space-x-4">
              <h1>Home</h1>
              <h1>Features</h1>
              <h1>Testimonials</h1>
              <h1>Contacts</h1>
              <Button>Subscribe</Button>
            </nav>
          </div>
        </Container>
      </header>

      <div className="mt-10 px-4 py-3">
        <main className="lg-px-8 mx-auto grid w-full max-w-7xl grid-cols-1 sm:grid-cols-2 gap-4 px-4 sm:px-6">
          <div className="mt-10">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              The Best
            </h1>
            <h1 className="mt-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Matcha In Town
            </h1>
            <p className="mt-4 leading-7">
              Discover matcha perfection at Matcha, where every sip unveils
              Japan's rich tea tradition in every enchanting drop
            </p>
            <p className="leading-7">
              Elevate your senses with our signature matcha creations today!
            </p>
            <div className="mt-4 flex gap-2">
              <Button size="lg">Get Started</Button>
              <Button variant="secondary" size="lg">
                Why Pick Us ?
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="h-full rounded-lg border border-black row-span-2 relative">
              <Image className="rounded-lg " src="/hero-image2.jpg" alt="next-icon" fill={true}>
              </Image>
            </div>
            <div className="h-60 w-full rounded-lg relative">
              <Image className="rounded-lg" src="/hero-image1.jpg" alt="hero-picture" fill={true}></Image>
            </div>
            <div className="h-60 w-full rounded-lg border border-black bg-white relative">
              <Image className="rounded-lg" src="/hero-image3.jpg" alt="hero-picture" fill={true}></Image>
            </div>
          </div>
        </main >
      </div >
    </>
  );
}
