import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Features() {
  return (
    <>
      <section className="mx-auto mt-48 w-full max-w-7xl px-4 py-3">
        <h2 className=" scroll-m-20 text-center text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Why Matcha ?
        </h2>
        <div className="mt-10 grid grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary via-secondary to-accent mx-auto"></div>
              <CardTitle>
                <p className="mt-10 text-3xl underline decoration-primary decoration-8">
                  Indulge in Unrivaled Flavor
                </p>
              </CardTitle>
            </CardHeader>
            <CardFooter>
              <p className="mt-14 text-xl">Immerse yourself in the world of matcha like never before</p>
            </CardFooter>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary via-secondary to-accent mx-auto"></div>
              <CardTitle>
                <p className="text-3xl mt-10 underline decoration-primary decoration-8">
                  Nourish Your Body and Soul
                </p>
              </CardTitle>
            </CardHeader>
            <CardFooter>
              <p className="mt-14 text-xl">Elevate your well-being with the myriad benefits of matcha.</p>
            </CardFooter>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary via-secondary to-accent mx-auto"></div>
              <CardTitle>
                <p className="text-3xl mt-10 underline decoration-primary decoration-8">
                  Choose Green,
                </p>
                <p className="text-3xl decoration-primary decoration-8 underline mt-2">Choose Us</p>
              </CardTitle>
            </CardHeader>
            <CardFooter>
              <p className="mt-12 text-xl">You're not just choosing premium matcha; you're choosing sustainability.</p>
            </CardFooter>
          </Card>


        </div>
        <h1 className="text-center text-5xl mt-10">Hello</h1>
      </section>
    </>
  );
}
