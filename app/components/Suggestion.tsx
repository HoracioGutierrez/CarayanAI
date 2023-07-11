'use client'
import { useState } from "react"

const contentSuggestions = [
    {
        heading: "Test1",
        content: "re funca"
    },
    {
        heading: "Test2",
        content: "segundo funcado",
    },
    {
        heading: "Test3",
        content: "si funca"
    },
    {
        heading: "Test4",
        content: "cuarto funcado"
    }
]

function CreateSuggestion({ set }: any) {
    const [suggestion, setSuggestion] = useState(false)

    const handleMoreDetail = (e: any) => {
        setSuggestion(!suggestion)
        e.target.id
        contentSuggestions.find((item, i) => {
            if (e.target.id == i) {
                set(item.content)
            }
        }
        )
    }
    return (
        <div className="flex flex-col">
            {contentSuggestions.map((item, i) => (
                <button key={i} id={`${i}`} className="px-2 py-1 hover:bg-slate-800" onClick={handleMoreDetail}>{item.heading}</button>
            ))}
        </div>
    )
}

export default CreateSuggestion