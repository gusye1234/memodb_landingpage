import Hero from "@/components/hero";
import FeaturesBlocks from "@/components/features";
import { FooterText } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-around items-center p-4 w-full overflow-y-auto overflow-x-hidden">
      <Hero />
      {/* <FeaturesBlocks /> */}
      <FooterText className="py-8" />
    </main>
  );
}
