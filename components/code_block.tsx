'use client'
// import { Badge } from "./ui/badge";
import { CopyBlock, dracula } from "react-code-blocks";
import { Badge } from "./ui/badge";

export function MyCoolCodeBlock({ code, language = "python", className = "", showLineNumbers = true }: {
    code: string;
    language?: string;
    className?: string;
    showLineNumbers?: boolean;
}) {
    return (
        <div className={className}>
            <Badge className="text-sm mb-1 font-normal text-primary/50" variant="outline">
                {language}
            </Badge>
            <CopyBlock text={code} showLineNumbers={showLineNumbers} language={language} theme={dracula} codeBlock />
        </div>
    );
}