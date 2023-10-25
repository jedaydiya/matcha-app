"use client";
import Container from "../components/container";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);


  const toggleNav = () => setIsOpen(!isOpen);
  return (
    <>
      <header id="home" className="flex justify-between px-4 py-3">
        <Container>
          <nav>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className=" items-center">
                  <Link
                    href="/"
                    className="flex-shrink-0 scroll-m-20 text-4xl font-extrabold tracking-tight"
                  >
                    hiraya
                  </Link>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-2">
                    <Link
                      href="#home"
                      className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent focus:ring-gray-800"
                    >
                      Home
                    </Link>
                    <Link
                      href="#features"
                      className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent focus:ring-gray-800"
                    >
                      Features
                    </Link>
                    <Link
                      href="#testimonials"
                      className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
                    >
                      Testimonial
                    </Link>
                    <Link
                      href="#contacts"
                      className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
                    >
                      Contacts
                    </Link>
                    <Link href="#pricing">
                      <Button>Subscribe</Button>
                    </Link>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  <button
                    onClick={toggleNav}
                    type="button"
                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-700 hover:text-white focus:bg-primary focus:text-white focus:outline-none"
                  >
                    <svg
                      className={`${isOpen ? "hidden" : "block"
                        } h-6 w-6 text-black`}
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                    <svg
                      className={`${isOpen ? "block" : "hidden"
                        } h-6 w-6 text-black`}
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
              <div className="px-2 pb-3 pt-2 sm:px-3">
                <Link
                  href="#home"
                  className="block rounded-md px-3 py-2 text-base font-medium hover:bg-accent"
                >
                  Home
                </Link>
                <Link
                  href="#features"
                  className="block rounded-md px-3 py-2 text-base font-medium hover:bg-accent"
                >
                  About
                </Link>
                <Link
                  href="#testimonials"
                  className="block rounded-md px-3 py-2 text-base font-medium hover:bg-accent"
                >
                  Testimonial
                </Link>

                <Link
                  href="#contacts"
                  className="block rounded-md px-3 py-2 text-base font-medium hover:text-white"
                >
                  Contact
                </Link>
              </div>
            </div>
          </nav>
        </Container>
      </header>
    </>
  );
}
