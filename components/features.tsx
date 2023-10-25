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
      <section id="features" className="mx-auto mt-10 md:mt-48 w-full max-w-7xl px-4 py-3">
        <h2 className=" scroll-m-20 text-center text-4xl md:text-5xl font-extrabold tracking-tight transition-colors first:mt-0">
          Why Matcha ?
        </h2>
        <div className="mt-10 grid md:grid-cols-3 gap-4">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto  h-20 w-20 md:h-24 md:w-24 rounded-full bg-gradient-to-br from-primary via-secondary to-accent"></div>
              <CardTitle>
                <p className="mt-5 md:mt-10 text-2xl md:text-3xl underline decoration-primary decoration-8">
                  Indulge in Unrivaled Flavor
                </p>
              </CardTitle>
            </CardHeader>
            <CardFooter>
              <p className="mt-4 md:mt-14  text-md md:text-xl">
                Immerse yourself in the world of matcha like never before
              </p>
            </CardFooter>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto h-20 w-20 md:h-24 md:w-24 rounded-full bg-gradient-to-br from-primary via-secondary to-accent"></div>
              <CardTitle>
                <p className="mt-5 md:mt-10 text-2xl md:text-3xl underline decoration-primary decoration-8">
                  Nourish Your Body and Soul
                </p>
              </CardTitle>
            </CardHeader>
            <CardFooter>
              <p className="mt-4 md:mt-14 text-md  md:text-xl">
                Elevate your well-being with the myriad benefits of matcha.
              </p>
            </CardFooter>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto h-20 w-20 md:h-24 md:w-24 rounded-full bg-gradient-to-br from-primary via-secondary to-accent"></div>
              <CardTitle>
                <p className="mt-5 md:mt-10 text-2xl md:text-3xl underline decoration-primary decoration-8">
                  Choose Green,
                </p>
                <p className="mt-2 text-2xl md:text-3xl underline decoration-primary decoration-8">
                  Choose Us
                </p>
              </CardTitle>
            </CardHeader>
            <CardFooter>
              <p className="mt-4 md:mt-12 text-md md:text-xl">
                You're not just choosing premium matcha; you're choosing
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
