import { Container } from "@/components/container";
import { Background } from "@/components/background";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Bridge",
  description: "Stay updated with the latest news and insights from Bridge.",
};

export default function BlogPage() {
  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <Background />
      <Container className="flex flex-col items-center justify-between pb-20">
        <div className="relative z-20 py-10 md:pt-40">
          <Heading as="h1">Blog</Heading>
          <Subheading className="text-center">
            Coming soon. Stay tuned for updates and insights.
          </Subheading>
        </div>
      </Container>
    </div>
  );
}
