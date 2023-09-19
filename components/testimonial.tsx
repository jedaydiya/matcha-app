import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function Testimonial() {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl px-4 py-3">
        <p className="mt-4 text-center text-3xl font-semibold">Testimonial</p>
        <p className="mt-4 text-center text-xl">
          What people are saying about us.
        </p>

        <div className="mt-12 grid grid-cols-3 gap-4">
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="https://github.com/ssshadcn.png" />
                  <AvatarFallback className="border-2 border-black bg-primary">
                    MH
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="mt-2 text-3xl">Mary H.</CardTitle>
                  <CardDescription className="text-xl">
                    Matcha Lover
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <blockquote className="mt-2 text-xl italic">
                "I've been a matcha enthusiast for years, and this subscription
                has taken my love for matcha to the next level! The quality and
                freshness of the matcha I receive are unmatched. I look forward
                to my monthly matcha deliveries like a kid waiting for
                Christmas!"
              </blockquote>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="https://github.com/ssshadcn.png" />
                  <AvatarFallback className="border-2 border-black bg-primary">
                    MR
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="mt-2 text-3xl">Michael R.</CardTitle>
                  <CardDescription className="text-xl">
                    Matcha Connoisseur
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <blockquote className="mt-2 text-xl italic">
                "I've tried matcha from various sources, but none can compare to
                the purity and flavor of the matcha from this subscription.
                What's even better is the flexibility – I can adjust my
                deliveries to suit my consumption. This subscription is a
                game-changer!"{" "}
              </blockquote>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="https://github.com/ssshadcn.png" />
                  <AvatarFallback className="border-2 border-black bg-primary">
                    ES
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="mt-2 text-3xl">Emily S.</CardTitle>
                  <CardDescription className="text-xl">
                    Matcha Novice
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <blockquote className="mt-2 text-xl italic">
                "As someone new to matcha, I was a bit overwhelmed at first.
                However, this subscription made it easy to get started. The
                website is user-friendly, and the support team patiently
                answered all my questions. Now, I can't imagine my mornings
                without a soothing cup of matcha."
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
