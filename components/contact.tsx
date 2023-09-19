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
      <div className="mx-auto w-full max-w-7xl px-4 py-3 mt-10">
        <p className="text-3xl font-semibold text-center">Subscribe to our Newsletter</p>
        <p className="text-xl mt-4 text-center">Receive the latest news, events, and special offers directly in your inbox.</p>
        <div className="flexjustify-center">
          <div className=" bg-card rounded-md mt-8 w-1/3 p-8 mx-auto">

            <Input type="email" placeholder="Email" />
            <div className=" flex justify-center">
              <Button size="lg" className="mt-8">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
