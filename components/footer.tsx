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
              <p className="text-md py-2 font-semibold text-gray-300 md:text-lg">
                EXPLORE
              </p>
              <p className="text-base font-semibold text-white md:text-lg">
                Features
              </p>
              <p className="mt-2 text-base font-semibold text-white md:text-lg">
                Testimonials
              </p>
              <p className="mt-2 text-base font-semibold text-white md:text-lg">
                Contacts
              </p>
            </div>

            <div>
              <p className="text-md py-2 font-semibold text-gray-300 md:text-lg">
                LET&apos;S CONNECT
              </p>
              <p className="text-base font-semibold text-white md:text-lg">
                Github
              </p>
              <p className="mt-2 text-base font-semibold text-white md:text-lg">
                Twitter
              </p>
              <p className="mt-2 text-base font-semibold text-white md:text-lg">
                Instagram
              </p>
            </div>
          </div>
          <Separator className="mt-4 md:mt-8" />
          <p className="md:text-md mt-4 text-sm font-semibold text-secondary md:mt-10">
            Feedback? Suggestions Features you&apos;d like to see? Contact Me
          </p>
          <p className="md:text-md mt-2 text-sm font-semibold text-secondary">
            Made with luv by jedaydiya
          </p>
        </div>
      </footer>
    </>
  );
}
