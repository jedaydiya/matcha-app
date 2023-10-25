import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BentoCards from "./bento-cards";

export default function Features() {
  return (
    <>
      <section
        id="features"
        className="mx-auto mt-10 w-full max-w-7xl px-4 py-3 md:mt-48"
      >
        <h2 className=" scroll-m-20 text-center text-4xl font-extrabold tracking-tight transition-colors first:mt-0 md:text-5xl">
          Why Matcha ?
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto  h-20 w-20 rounded-full bg-gradient-to-br from-primary via-secondary to-accent md:h-24 md:w-24"></div>
              <CardTitle>
                <p className="mt-5 text-2xl underline decoration-primary decoration-8 md:mt-10 md:text-3xl">
                  Indulge in Unrivaled Flavor
                </p>
              </CardTitle>
            </CardHeader>
            <CardFooter>
              <p className="text-md mt-4  md:mt-14 md:text-xl">
                Immerse yourself in the world of matcha like never before
              </p>
            </CardFooter>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-primary via-secondary to-accent md:h-24 md:w-24"></div>
              <CardTitle>
                <p className="mt-5 text-2xl underline decoration-primary decoration-8 md:mt-10 md:text-3xl">
                  Nourish Your Body and Soul
                </p>
              </CardTitle>
            </CardHeader>
            <CardFooter>
              <p className="text-md mt-4 md:mt-14  md:text-xl">
                Elevate your well-being with the myriad benefits of matcha.
              </p>
            </CardFooter>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-primary via-secondary to-accent md:h-24 md:w-24"></div>
              <CardTitle>
                <p className="mt-5 text-2xl underline decoration-primary decoration-8 md:mt-10 md:text-3xl">
                  Choose Green,
                </p>
                <p className="mt-2 text-2xl underline decoration-primary decoration-8 md:text-3xl">
                  Choose Us
                </p>
              </CardTitle>
            </CardHeader>
            <CardFooter>
              <p className="text-md mt-4 md:mt-12 md:text-xl">
                You&apos;re not just choosing premium matcha; you&apos;re choosing
                sustainability.
              </p>
            </CardFooter>
          </Card>
        </div>
        <BentoCards></BentoCards>
      </section>
    </>
  );
}
