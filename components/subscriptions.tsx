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
      <section className="mx-auto mt-20 w-full max-w-7xl px-4 py-3">
        <h2 className=" scroll-m-20 text-center text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Plans & Pricing
        </h2>
        <p className="mt-4 text-center text-lg">
          {" "}
          Explore our plans and find the one that adds flavor to your life.
        </p>

        <div className="mt-10 grid grid-cols-3 gap-4">
          <Card className="text-center">
            <CardHeader>
              <CardTitle>
                <p className="text-3xl">Matcha Explorer</p>
              </CardTitle>
              <CardDescription>
                <p className="text-xl">Discover New Flavors Monthly</p>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>One 30g tin of premium matcha every month.</p>
              <p>Access to exclusive new flavor releases.</p>
              <p>Recipe suggestions and recommendations</p>
            </CardContent>
            <CardFooter className="justify-center"><Button>Start Now</Button></CardFooter>
          </Card>

          <Card className="bg-secondary text-center">
            <CardHeader>
              <CardTitle>
                <p className="text-3xl">Matcha Enthusiast</p>
              </CardTitle>
              <CardDescription>
                <p className="text-xl">Elevate your Matcha Ritual</p>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Two 30g tins of premium matcha, tailored to your preferences.
              </p>
              <p>Access to exclusive new flavor releases.</p>
              <p>Recipe suggestions and recommendations</p>
            </CardContent>
            <CardFooter className="justify-center">
              <Button>Start Now</Button>
            </CardFooter>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle>
                <p className="text-3xl">Matcha Explorer</p>
              </CardTitle>
              <CardDescription>
                <p className="text-xl">Discover New Flavors Monthly</p>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>One 30g tin of premium matcha every month.</p>
              <p>Access to exclusive new flavor releases.</p>
              <p>Recipe suggestions and recommendations</p>
            </CardContent>
            <CardFooter className="justify-center">
              <Button>Start Now</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </>
  );
}
