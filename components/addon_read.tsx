import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"



const AddonRead = ({ addon, content }: { addon: string, content: string }) => {
    return (
        <Popover>
            <PopoverTrigger className="underline">
                {addon}
            </PopoverTrigger>
            <PopoverContent className="text-sm text-start">
                {content}
            </PopoverContent>
        </Popover>
    )
}

export default AddonRead