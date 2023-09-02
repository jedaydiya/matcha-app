import Container from "../components/container";
import { Button } from "@/components/ui/button";
export default function Header() {
  return (
    <>
      <header className="px-4 py-3 sm:flex sm:justify-between">
        <Container>
          <div className="relative flex h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Matcha
              </h1>
            </div>
            <nav className="mx-6 flex items-center space-x-4">
              <h1>Home</h1>
              <h1>Features</h1>
              <h1>Testimonials</h1>
              <h1>Contacts</h1>
              <Button>Subscribe</Button>
            </nav>
          </div>
        </Container>
      </header>
    </>
  )
}
