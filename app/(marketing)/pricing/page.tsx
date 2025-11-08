import { Container } from "@/components/container";
import { Background } from "@/components/background";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Pricing } from "@/components/pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Bridge",
  description:
    "Bridge offers flexible pricing for individuals and enterprises. Choose the plan that suits your needs.",
  openGraph: {
    images: ["https://ai-saas-template-aceternity.vercel.app/banner.png"],
  },
};

export default function PricingPage() {
  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <Background />
      <Container className="flex flex-col items-center justify-between pb-20">
        <div className="relative z-20 py-10 md:pt-40">
          <Heading as="h1">Simple pricing for your ease</Heading>
          <Subheading className="text-center">
            Bridge offers a wide range of services. You can choose the one
            that suits your needs. Select from your favourite plan and get
            started instantly.
          </Subheading>
        </div>
        <Pricing />
      </Container>
    </div>
  );
}
