"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import React, { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

type PricingSwitchProps = {
    onSwitch: (value: string) => void
}

type PricingCardProps = {
    isYearly?: boolean
    title: string
    monthlyPrice?: number | string
    yearlyPrice?: number | string
    description: string
    href: string
    features: string[]
    nofeatures: string[]
    showPerDate?: boolean
    actionLabel: string
    popular?: boolean
    exclusive?: boolean
}

const PricingHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <section className="text-center">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-xl pt-1">{subtitle}</p>
        <br />
    </section>
)

const PricingSwitch = ({ onSwitch }: PricingSwitchProps) => (
    <Tabs defaultValue="0" className="w-40 mx-auto" onValueChange={onSwitch}>
        <TabsList className="py-6 px-2">
            <TabsTrigger value="0" className="text-base">
                Monthly
            </TabsTrigger>
            <TabsTrigger value="1" className="text-base">
                Yearly
            </TabsTrigger>
        </TabsList>
    </Tabs>
)

const PricingCard = ({ isYearly, title, showPerDate = false, monthlyPrice, yearlyPrice, href, description, features, nofeatures, actionLabel, popular, exclusive }: PricingCardProps) => (
    <Card
        className={cn(`w-72 flex flex-col justify-between py-1 ${popular ? "border-rose-400" : "border-zinc-700"} mx-auto sm:mx-0`, {
            "animate-background-shine bg-white dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors":
                exclusive,
        })}>
        <div>
            <CardHeader className="pb-8 pt-4">
                <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">{title}</CardTitle>
                <div className="flex gap-0.5">
                    <h3 className="text-3xl font-bold">{monthlyPrice ? monthlyPrice : "Custom"}</h3>
                    <span className="flex flex-col justify-end text-sm mb-1">{showPerDate ?? (yearlyPrice && isYearly ? "/year" : monthlyPrice ? "/month" : null)}</span>
                </div>
                <CardDescription className="pt-1.5 h-12">{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
                {features.map((feature: string) => (
                    <CheckItem key={feature} text={feature} />
                ))}
                {nofeatures.map((feature: string) => (
                    <NoCheckItem key={feature} text={feature} />
                ))}
            </CardContent>
        </div>
        <CardFooter className="mt-2">
            <Link href={href} className="mx-auto">
                <Button variant={"default"}>
                    {actionLabel}
                </Button>
            </Link>
        </CardFooter>
    </Card>
)

const CheckItem = ({ text }: { text: string }) => (
    <div className="flex gap-2">
        <CheckCircle2 size={18} className="my-auto text-green-400" />
        <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">{text}</p>
    </div>
)

const NoCheckItem = ({ text }: { text: string }) => (
    <div className="flex gap-2">
        <XCircle size={18} className="my-auto text-gray-400" />
        <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">{text}</p>
    </div>
)

export default function PricingPage() {
    const [isYearly, setIsYearly] = useState(false)
    const togglePricingPeriod = (value: string) => setIsYearly(parseInt(value) === 1)

    const plans = [
        {
            title: "Self-hosted",
            monthlyPrice: 'Free',
            description: "Deploy MemoBase to your own infrastructure",
            features: ["Full functionality"],
            nofeatures: ["No Dashboard", "Scale as you want"],
            actionLabel: "Get Started",
            href: "https:/github.com/memodb-io/memobase"
        },
        {
            title: "Cloud-managed",
            monthlyPrice: "Not Yet",
            description: "Ideal for growing businesses that need a reliable, managed solution",
            features: ["Full functionality", "Dashboard & Visualization", "Scale as you need", "Pay as you go", "AWS EC2 Instance", "Cancel anytime"],
            nofeatures: [],
            actionLabel: "Join the waitlist",
            popular: true,
            href: "/#newsletter",
            exclusive: true,
        },
    ]
    return (
        <div className="py-8">
            <PricingHeader title="Pricing Plans" subtitle="Choose the plan that's right for you" />
            {/* <PricingSwitch onSwitch={togglePricingPeriod} /> */}
            <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mt-8">
                {plans.map((plan) => {
                    return <PricingCard key={plan.title} {...plan} isYearly={isYearly} />
                })}
            </section>
        </div>
    )
}