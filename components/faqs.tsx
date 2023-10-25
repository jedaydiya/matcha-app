import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQs() {
  return (
    <>
      <div className="mx-auto mt-20 w-full max-w-7xl px-4 py-3">
        <p className="text-center text-4xl font-extrabold md:text-5xl">FAQ</p>
        <p className="mt-4 text-center text-xl">
          Explore our frequently asked questions to find answers to common
          queries.
        </p>

        <Accordion type="single" collapsible className="mt-12">
          <AccordionItem
            value="item-1"
            className="rounded-md bg-secondary px-4 py-2"
          >
            <AccordionTrigger className="text-lg md:text-2xl">
              How does the matcha subscription work?
            </AccordionTrigger>
            <AccordionContent className="mt-4 text-base md:text-xl">
              Our matcha subscription is designed for your convenience. Simply
              choose your preferred matcha plan, select your delivery frequency,
              and complete your order. You'll receive freshly sourced matcha
              delivered to your doorstep as per your chosen schedule.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="mt-8 rounded-md bg-secondary px-4 py-2"
          >
            <AccordionTrigger className="text-lg md:text-2xl">
              When can I expect my matcha delivery?
            </AccordionTrigger>
            <AccordionContent className="mt-4 text-base md:text-xl">
              Matcha deliveries typically occur within 3-7 business days from
              the date of your order. However, delivery times may vary depending
              on your location. Rest assured, we'll keep you informed with
              tracking details.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="mt-8 rounded-md bg-secondary px-4 py-2"
          >
            <AccordionTrigger className="text-lg md:text-2xl">
              Can I change my delivery frequency or address?
            </AccordionTrigger>
            <AccordionContent className="mt-4 text-base md:text-xl">
              Matcha deliveries typically occur within 3-7 business days from
              the date of your order. However, delivery times may vary depending
              on your location. Rest assured, we'll keep you informed with
              tracking details.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-4"
            className="mt-8 rounded-md bg-secondary px-4 py-2"
          >
            <AccordionTrigger className="text-lg md:text-2xl">
              Is there a shipping fee for matcha deliveries?
            </AccordionTrigger>
            <AccordionContent className="mt-4 text-base md:text-xl">
              We offer free standard shipping for all matcha subscription
              orders. If you require expedited shipping, additional fees may
              apply, which will be clearly indicated during the checkout
              process.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-5"
            className="mt-8 rounded-md bg-secondary px-4 py-2"
          >
            <AccordionTrigger className="text-lg md:text-2xl">
              What if my matcha arrives damaged or is incorrect?
            </AccordionTrigger>
            <AccordionContent className="mt-4 text-base md:text-xl">
              We strive to ensure the quality of every matcha delivery. In the
              rare event that your order is damaged or incorrect, please contact
              our customer support team within 7 days of receiving your package,
              and we'll promptly resolve the issue.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-6"
            className="mt-8 rounded-md bg-secondary px-4 py-2"
          >
            <AccordionTrigger className="text-lg md:text-2xl">
              Can I cancel my matcha subscription anytime?
            </AccordionTrigger>
            <AccordionContent className="mt-4 text-base md:text-xl">
              Yes, you can cancel your subscription at any time without any
              cancellation fees. We believe in flexibility and are here to
              accommodate your preferences.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-7"
            className="mt-8 rounded-md bg-secondary px-4 py-2"
          >
            <AccordionTrigger className="text-lg md:text-2xl">
              Are there any discounts for long-term subscriptions?
            </AccordionTrigger>
            <AccordionContent className="mt-4 text-base md:text-xl">
              Yes, we offer discounts for customers who choose longer
              subscription durations. You can find details about pricing and
              discounts on our Plans and Pricing page.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-8"
            className="mt-8 rounded-md bg-secondary px-4 py-2"
          >
            <AccordionTrigger className="text-lg md:text-2xl">
              Is your matcha sourced sustainably?
            </AccordionTrigger>
            <AccordionContent className="mt-4 text-base md:text-xl">
              We take pride in our commitment to sustainability. Our matcha is
              responsibly sourced from trusted partners who prioritize ethical
              and environmentally friendly practices.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-9"
            className="mt-8 rounded-md bg-secondary px-4 py-2"
          >
            <AccordionTrigger className="text-lg md:text-2xl">
              Do you offer different matcha varieties or flavors?
            </AccordionTrigger>
            <AccordionContent className="mt-4 text-base md:text-xl">
              Yes, we offer a range of matcha varieties to suit different
              tastes. Explore our selection on the Menu page to discover classic
              matcha, flavored blends, and more.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-10"
            className="mt-8 rounded-md bg-secondary px-4 py-2"
          >
            <AccordionTrigger className="text-lg md:text-2xl">
              How can I reach customer support for additional questions?
            </AccordionTrigger>
            <AccordionContent className="mt-4 text-base md:text-xl">
              For any further inquiries or assistance, please feel free to
              contact our customer support team at hirayamatcha@gmail.com. We're
              here to help you with your matcha journey!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
