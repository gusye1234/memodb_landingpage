import { CopyBlock, dracula } from "react-code-blocks";


export function MyCoolCodeBlock({ code, language = "python", className }: {
    code: string;
    language?: string;
    className?: string;
}) {
    return (
        <div className={className ? className : ""}>
            <CopyBlock text={code} language={language} theme={dracula} codeBlock />
        </div>
    );
}