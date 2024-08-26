import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"





const AddonRead = ({ addon, content }: { addon: string, content: string }) => {
    return (
        <HoverCard>
            <HoverCardTrigger className="underline">
                {addon}
            </HoverCardTrigger>
            <HoverCardContent className="text-sm text-start">
                {content}
            </HoverCardContent>
        </HoverCard>
    )
}

export default AddonRead