import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Subscription() {
  return (
    <>
      <section id="pricing" className="mx-auto mt-20 w-full max-w-7xl px-4 py-3">
        <h2 className=" scroll-m-20 text-center text-4xl md:text-5xl font-extrabold tracking-tight transition-colors first:mt-0">
          Plans & Pricing
        </h2>
        <p className="mt-4 text-center text-lg">
          Explore our plans and find the one that adds flavor to your life.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl pt-8">
                Matcha Explorer
              </CardTitle>
              <CardDescription className="text-lg md:text-xl">
                Discover New Flavors Monthly
              </CardDescription>
              <CardDescription className="text-xl md:text-2xl text-black font-semibold mt-4">
                $19.99/month
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-2">
              <p className="mt-2">One 30g tin of premium matcha</p>
              <p className="mt-2">Access to exclusive new flavor releases.</p>
              <p className="mt-2">Recipe suggestions and recommendations</p>
            </CardContent>
            <CardFooter className="justify-center"><Button className="mt-8">Get Started</Button></CardFooter>
          </Card>

          <Card className="bg-secondary text-center">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl pt-8">
                Matcha Enthusiast
              </CardTitle>
              <CardDescription className="text-lg md:text-xl">
                Elevate your Matcha Ritual
              </CardDescription>
              <CardDescription className="text-xl md:text-2xl text-black font-semibold mt-4">
                $34.99/month
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mt-2">
                Two 30g tins of premium matcha.
              </p>
              <p className="mt-2">Monthly surprise matcha-related treats.</p>
              <p className="mt-2">Early access to limited edition products.</p>
              <p className="mt-2">Recipe book with creative matcha recipes.</p>
            </CardContent>
            <CardFooter className="justify-center">
              <Button>Get Started</Button>
            </CardFooter>
          </Card>


          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl pt-8 ">
                Matcha Connoisseur
              </CardTitle>
              <CardDescription className="text-lg md:text-xl">
                Sip Sustainably and Explore Depth
              </CardDescription>
              <CardDescription className="text-xl md:text-2xl text-black font-semibold mt-4">
                $59.99/month
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mt-2">Three 30g tins of premium matcha</p>
              <p className="mt-2">Quarterly Deluxe matcha-themed gift box</p>
              <p className="mt-2">VIP access to virtual events and workshops</p>
              <p className="mt-2">Personalized consultation with an expert.</p>

            </CardContent>
            <CardFooter className="justify-center">
              <Button>Get Started</Button>
            </CardFooter>
          </Card>


        </div>
      </section>
    </>
  );
}
