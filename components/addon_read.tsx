import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"



const AddonRead = ({ addon, content }: { addon: string, content: string }) => {
    return (
        <Popover>
            <PopoverTrigger className="underline underline-offset-2">
                {addon}
            </PopoverTrigger>
            <PopoverContent className="text-sm text-start">
                {content}
            </PopoverContent>
        </Popover>
    )
}

export default AddonRead