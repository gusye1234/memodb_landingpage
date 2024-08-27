import Hero from "@/components/hero";
import FeaturesBlocks from "@/components/features";
import { FooterText } from "@/components/footer";
import Newsletter from "@/components/waitlist";

export default function Home() {
  return (
    <main className="flex flex-col min-h-full justify-start items-center p-4 w-full overflow-y-auto overflow-x-hidden">
      <Hero />
      <Newsletter />
      {/* <FeaturesBlocks /> */}
      <FooterText className="py-8" />
    </main>
  );
}
