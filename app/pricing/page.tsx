import PricingPage from "@/components/pricing";

export default function Home() {
    return (
        <main className="flex flex-col min-h-full justify-start items-center p-4 w-full overflow-y-auto overflow-x-hidden">
            {/* <PackagesComponent /> */}
            <PricingPage />
        </main>
    );
}
