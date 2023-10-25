import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Contact() {
  return (
    <>
      <div id="contacts " className="mx-auto mt-20 w-full max-w-7xl px-4 py-3">
        <p className="text-center text-4xl md:text-5xl font-extrabold">
          Subscribe to our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Newsletter
          </span>
        </p>
        <p className="mt-4 text-center text-xl">
          Receive the latest news, events, and special offers directly in your
          inbox.
        </p>

        <div className=" flex justify-center">
          <Button size="lg" className="mt-8">
            Stay Tuned
          </Button>
        </div>
      </div>
    </>
  );
}
