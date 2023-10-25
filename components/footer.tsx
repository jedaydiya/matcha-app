import { Separator } from "@/components/ui/separator";
export default function Footer() {
  return (
    <>
      <footer className="mx-auto mt-10 w-full max-w-7xl px-4 py-3">
        <div className="rounded-lg bg-zinc-950 px-10 py-8">
          <p className=" text-base font-bold text-white md:text-4xl">hiraya</p>
          <div className="grid md:grid-cols-3">
            <div>
              <p className="mt-2 text-base font-semibold text-white md:text-lg">
                Discover matcha perfection
              </p>
              <p className="mt-2 text-base font-semibold text-white md:text-lg">
                © 2023
              </p>
              <p className="mt-2 text-base font-semibold text-white md:text-lg">
                Privacy - Terms
              </p>
            </div>
            <div>
              <p className="py-2 text-md font-semibold text-gray-300 md:text-lg">
                EXPLORE
              </p>
              <p className="text-base font-semibold text-white md:text-lg">
                Features
              </p>
              <p className="mt-2 text-base md:text-lg font-semibold text-white">
                Testimonials
              </p>
              <p className="mt-2 text-base md:text-lg font-semibold text-white">Contacts</p>
            </div>

            <div>
              <p className="py-2 text-md md:text-lg font-semibold text-gray-300">
                LET'S CONNECT
              </p>
              <p className="text-base md:text-lg font-semibold text-white">Github</p>
              <p className="mt-2 text-base md:text-lg font-semibold text-white">Twitter</p>
              <p className="mt-2 text-base md:text-lg font-semibold text-white">Instagram</p>
            </div>
          </div>
          <Separator className="mt-4 md:mt-8" />
          <p className="text-sm md:text-md mt-4 md:mt-10 font-semibold text-secondary">
            Feedback? Suggestions Features you'd like to see? Contact Me
          </p>
          <p className="text-sm md:text-md mt-2 font-semibold text-secondary">
            Made with luv by jedaydiya
          </p>
        </div>
      </footer>
    </>
  );
}
