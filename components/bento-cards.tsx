import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BentoCards() {
  return (
    <>
      <section className="mt-20 grid grid-cols-3 gap-4">
        <Card className="row-span-2 bg-primary">
          <CardHeader>
            <CardTitle><p className="text-4xl font-semibold">
              Unlock a world of matcha with our subscription service.
            </p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-semibold">
              Enjoy these exclusive benefits:
            </p>
          </CardContent>
        </Card>

        <Card className="bg-secondary">
          <CardHeader>
            <CardTitle>
              <p className="text-4xl font-semibold ">100%</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-semibold">Made in Japan</p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-950">
          <CardHeader>
            <CardTitle>
              <p className="text-4xl font-semibold text-white">
                100k Deliveries
              </p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl text-white">
              Over 100,000 deliveries and counting, ensuring freshness at your
              doorstep.
            </p>
          </CardContent>
        </Card>

        <Card className="col-span-2 bg-accent">
          <CardHeader>
            <CardTitle>
              <p className="text-4xl font-semibold">20+ Variety of Flavors</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl">Experience a diverse range of matcha blends, from classic to unique flavors.</p>
          </CardContent>
        </Card>

        <Card className="bg-secondary">
          <CardHeader>
            <CardTitle>
              <p className="text-4xl font-semibold">Exclusive</p>
              <p className="text-4xl font-semibold">Access</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl">Subscribers get early access to new products and limited editions.</p>
          </CardContent>
        </Card>

        <Card className="bg-primary">
          <CardHeader>
            <CardTitle><p className="text-4xl font-semibold">Flexible Subscriptions</p></CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl"><span className="font-semibold">Pause Anytime</span>: Easily pause your subscription for vacations or breaks.</p>
          </CardContent>
        </Card>

        <Card className="bg-secondary">
          <CardHeader>
            <CardTitle><p className="text-4xl font-semibold">Convenient Deliveries</p></CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl">Automatic deliveries on your schedule, so you never run out.</p>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
