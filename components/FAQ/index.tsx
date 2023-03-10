import { useState } from "react"
import { MdAdd } from "react-icons/md"

interface FAQProps {
    question: string,
    answer?: string
}

export const FrequentlyAskedQuestion: React.FC<FAQProps> = ({ question, answer }) => {
    const [hidden, setHidden] = useState<boolean>(true);

    return(
        <div className="w-[90%] md:w-[80%] my-2">
            <div className="w-full z-30 flex items-center px-2 py-1 justify-between bg-primary rounded-md">
                <p className="font-medium font-sans text-white">{question}</p>
                <button onClick={() => setHidden(!hidden)} className="bg-white w-10 h-10 flex items-center justify-center rounded-md" title="Get the answer to the question">
                    <MdAdd size={30} className="text-primary" />
                </button>
            </div>
            <div className={`p-3 w-[95%] z-20 mx-auto bg-white text-primary ${hidden ? 'hidden' : null}`}>
                {answer}
            </div>
        </div>
    )
}