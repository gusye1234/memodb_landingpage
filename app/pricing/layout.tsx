import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Pricing",
    description: "Pricing page for MemoBase",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
}