import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function HeroSection() {
  return (
    <>
      <div className="mt-8 px-4 py-3 md:mt-10">
        <main className="lg-px-8 mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:px-6">
          <div className="mt-20">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              The Best
            </h1>
            <h1 className="mt-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Matcha
              </span>
              In Town
            </h1>
            <h3 className="mt-10 scroll-m-20 text-lg tracking-tight lg:text-2xl">
              Discover matcha perfection at Matcha, where every sip unveils
              Japan&apos;s rich tea tradition in every enchanting drop
            </h3>
            <h3 className="mt-2 scroll-m-20 text-lg tracking-tight md:text-2xl">
              Elevate your senses with our signature matcha creations today!
            </h3>
            <div className="mt-10 flex gap-2">
              <Button size="lg">Get Started</Button>
              <Button variant="secondary" size="lg">
                Why Pick Us ?
              </Button>
            </div>
          </div>

          <div className="grid gap-2 md:grid-cols-2">
            <div className="relative h-60 overflow-hidden rounded-lg border border-black md:row-span-2 md:h-full">
              <Image
                className="rounded-lg "
                src="/hero-image2.jpg"
                alt="next-icon"
                fill={true}
                style={{
                  objectFit: "cover",
                }}
              ></Image>
            </div>
            <div className="relative h-60 w-full overflow-hidden rounded-lg">
              <Image
                className="rounded-lg"
                src="/hero-image1.jpg"
                alt="hero-picture"
                fill={true}
                style={{
                  objectFit: "cover",
                }}
              ></Image>
            </div>
            <div className="relative h-60 w-full overflow-hidden rounded-lg border border-black bg-white">
              <Image
                className="rounded-lg"
                src="/hero-image3.jpg"
                alt="hero-picture"
                fill={true}
                style={{
                  objectFit: "cover",
                }}
              ></Image>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
