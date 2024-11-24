import Hero from "@/components/hero";
import FeaturesBlocks from "@/components/features";
import Features from "@/components/feature_slides";
import { FooterText } from "@/components/footer";
import Newsletter from "@/components/waitlist";
import Banner from "@/components/banner";

export const runtime = 'edge'
export default function Home() {
  return (
    <main className="flex flex-col min-h-full justify-start items-center p-4 w-full overflow-y-auto overflow-x-hidden">
      <Hero />
      <Newsletter />
      <FeaturesBlocks />
      <Features />
      <FooterText className="py-8" />
      <Banner />
    </main>
  );
}
