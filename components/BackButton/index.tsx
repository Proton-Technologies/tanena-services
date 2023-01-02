import { useRouter } from "next/router"
import { MdArrowBack } from "react-icons/md"

export const BackButton: React.FC = () => {
    const router = useRouter();

    return(
        <button onClick={() => router.back()} className="flex items-center justify-center rounded-full w-11 h-11 bg-slate-200" title="Go to previous page">
            <MdArrowBack/>
        </button>
    )
}