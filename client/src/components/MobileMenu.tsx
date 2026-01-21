import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


export default function MobileMenu() {
  return (
    <ul className="flex-[9]">
      <Accordion type="single" collapsible className="bg-white text-black">
        <AccordionItem value="item-1" className="border-none bg-inherit">
          <AccordionTrigger className="bg-inherit">Skin</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-none bg-inherit">
          <AccordionTrigger className="bg-inherit">Body</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-none bg-inherit">
          <AccordionTrigger className="bg-inherit">Hair</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border-none bg-inherit">
          <AccordionTrigger className="bg-inherit">Gifting</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className="border-none bg-inherit">
          <AccordionTrigger className="bg-inherit">Trending</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6" className="border-none bg-inherit">
          <AccordionTrigger className="bg-inherit">
            Collections
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7" className="border-none bg-inherit">
          <AccordionTrigger className="bg-inherit">Men's</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8" className="border-none bg-inherit">
          <AccordionTrigger className="bg-inherit">Fragrances</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9" className="border-none bg-inherit">
          <AccordionTrigger className="bg-inherit">Cart</AccordionTrigger>
          <AccordionContent>
            Cart
          </AccordionContent>
        </AccordionItem>
      </Accordion>      
    </ul>
  );
}
