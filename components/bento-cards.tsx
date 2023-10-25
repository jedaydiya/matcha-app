import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BentoCards() {
  return (
    <>
      <section className="mt-20 grid  md:grid-cols-3 gap-4">
        <Card className="md:row-span-2 bg-primary">
          <CardHeader>
            <CardTitle><p className="text-3xl md:text-4xl font-extrabold">
              Unlock a world of matcha with our subscription service.
            </p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-md md:text-xl">
              Enjoy these exclusive benefits:
            </p>
          </CardContent>
        </Card>

        <Card className="bg-secondary">
          <CardHeader>
            <CardTitle>
              <p className="text-3xl md:text-4xl font-extrabold">100%</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl md:text-4xl font-extrabold">Made in Japan</p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-950">
          <CardHeader>
            <CardTitle>
              <p className="text-3xl md:text-4xl font-extrabold text-white">
                100k Deliveries
              </p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-md md:text-lg text-white">
              Over 100,000 deliveries and counting, ensuring freshness at your
              doorstep.
            </p>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 bg-accent">
          <CardHeader>
            <CardTitle>
              <p className="text-3xl md:text-4xl font-extrabold">20+ Variety of Flavors</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-md md:text-lg">Experience a diverse range of matcha blends, from classic to unique flavors.</p>
          </CardContent>
        </Card>

        <Card className="bg-secondary">
          <CardHeader>
            <CardTitle>
              <p className="text-3xl md:text-4xl font-extrabold">Exclusive</p>
              <p className="text-3xl md:text-4xl font-extrabold">Access</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-md md:text-lg">Subscribers get early access to new products and limited editions.</p>
          </CardContent>
        </Card>

        <Card className="bg-primary">
          <CardHeader>
            <CardTitle><p className="text-3xl md:text-4xl font-extrabold">Flexible Subscriptions</p></CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-md md:text-lg"><span className="font-extrabold">Pause Anytime</span>: Easily pause your subscription for vacations or breaks.</p>
          </CardContent>
        </Card>

        <Card className="bg-secondary">
          <CardHeader>
            <CardTitle><p className="text-3xl md:text-4xl font-extrabold">Convenient Deliveries</p></CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-md md:text-lg">Automatic deliveries on your schedule, so you never run out.</p>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
