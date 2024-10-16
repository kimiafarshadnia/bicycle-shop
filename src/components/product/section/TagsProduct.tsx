'use client'

type Tags = {
    tags: string[]
}

export const TagsProduct = ({ tags }: Tags) => {
    return (
        <div className="flex flex-col gap-2 items-start">
            <h4 className="font-bold text-base">tags:</h4>
            <div className="flex flex-row gap-3">
                {tags.map((tag, index) => (
                    <span key={index} className="text-gray-400 text-xs">{tag}</span>
                ))}
            </div>
        </div>
    );
}


