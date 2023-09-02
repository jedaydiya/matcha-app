import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function HeroSection() {
  return (
    <>
      <div className="mt-10 px-4 py-3">
        <main className="lg-px-8 mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:px-6">
          <div className="mt-20">
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

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <div className="relative row-span-2 h-full overflow-hidden rounded-lg border border-black">
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
  )
}
