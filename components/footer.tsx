import { Separator } from "@/components/ui/separator";
export default function Footer() {
  return (
    <>
      <footer className="mx-auto w-full max-w-7xl px-4 py-3">
        <div className="rounded-lg bg-zinc-950 px-10 py-8">
          <p className="text-4xl font-bold text-white">hiraya</p>
          <div className="grid grid-cols-3">
            <div>
              <p className="mt-2 text-lg font-semibold text-white">
                Discover matcha perfection
              </p>
              <p className="mt-2 text-lg font-semibold text-white">
                © 2010 — 2020
              </p>
              <p className="mt-2 text-lg font-semibold text-white">
                Privacy - Terms
              </p>
            </div>
            <div>
              <p className="py-2 text-lg font-semibold text-gray-300">
                EXPLORE
              </p>
              <p className="text-lg font-semibold text-white">Features</p>
              <p className="mt-2 text-lg font-semibold text-white">
                Testimonials
              </p>
              <p className="mt-2 text-lg font-semibold text-white">Contacts</p>
            </div>

            <div>
              <p className="py-2 text-lg font-semibold text-gray-300">
                LET'S CONNECT
              </p>
              <p className="text-lg font-semibold text-white">Github</p>
              <p className="mt-2 text-lg font-semibold text-white">
                Twitter
              </p>
              <p className="mt-2 text-lg font-semibold text-white">Instagram</p>
            </div>

          </div>
          <Separator className="mt-8" />
          <p className="text-md mt-10 font-semibold text-secondary">
            Feedback? Suggestions Features you'd like to see? Contact Me
          </p>
          <p className="text-md mt-2 font-semibold text-secondary">
            Made with luv by jedaydiya
          </p>
        </div>
      </footer>
    </>
  );
}
