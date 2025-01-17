import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/layout/accordion";

const FAQS = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-5 md:gap-0 mb-10">
      <div className="mx-auto w-full text-center animate-fade-up inline-block bg-clip-text">
        <h1 className=" lg:mt-8 mt-2 md:mt-0 md:-mb-8 flex justify-center w-full items-center gap-1 sm:gap-4 h-[5rem] md:h-[4rem] lg:h-[16rem] sm:text-[5rem] lg:text-[30px] xl:text-[50px] text-[2.2rem]">
          <span>F</span>
          <span>A</span>
          <span>Q's</span>
        </h1>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem
          value="item-1"
          className="border-2 px-10 py-2 rounded-xl"
        >
          <AccordionTrigger className="text-2xl">
            How does adXchain ensure security?
          </AccordionTrigger>
          <AccordionContent>
            adXchain utilizes Solana's blockchain technology to ensure security.
            By securely connecting users' Solana wallets, all transactions are
            conducted on a decentralized network, eliminating the risk of fraud
            and unauthorized access.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="border-2 px-10 py-2 rounded-xl mt-5"
        >
          <AccordionTrigger className="text-2xl">
            How are ad spaces priced on adXchain?
          </AccordionTrigger>
          <AccordionContent>
            Ad spaces on adXchain are priced in Solana (SOL) and vary based on
            factors such as dimensions (height and width in pixels) and the
            popularity of the website. Sellers set the prices for their ad
            spaces, and buyers can purchase them directly using SOL.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="border-2 px-10 py-2 rounded-xl mt-5"
        >
          <AccordionTrigger className="text-2xl">
            What happens after purchasing an ad space on adXchain?
          </AccordionTrigger>
          <AccordionContent>
            After a successful purchase, a unique address key is generated for
            the buyer. This key ensures transparency and provides proof of
            ownership of the purchased ad space. Sellers receive SOL directly
            into their Solana wallets upon successful transactions.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-4"
          className="border-2 px-10 py-2 rounded-xl mt-5"
        >
          <AccordionTrigger className="text-2xl">
            Is adXchain suitable for both advertisers and publishers?
          </AccordionTrigger>
          <AccordionContent>
            Yes, adXchain caters to both advertisers and publishers. Advertisers
            can purchase ad spaces on websites to promote their products or
            services, while publishers can monetize their websites by selling ad
            spaces as NFTs on the platform.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-5"
          className="border-2 px-10 py-2 rounded-xl mt-5"
        >
          <AccordionTrigger className="text-2xl">
            How can I get started with adXchain?
          </AccordionTrigger>
          <AccordionContent>
            Getting started with adXchain is easy! Simply create an account,
            connect your Solana wallet, and start exploring available ad spaces.
            Whether you're an advertiser looking to reach your target audience
            or a publisher seeking to monetize your website, adXchain has you
            covered. further answers of the FAQ section
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQS;
