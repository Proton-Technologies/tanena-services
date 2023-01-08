import { useEffect } from "react"
import { MdCancel } from "react-icons/md"
interface ModalProps {
    isOpen: boolean,
    onDismiss?: React.MouseEventHandler,
    children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onDismiss, children }) => {
    useEffect(() => {
        isOpen ? document.body.setAttribute('class', 'backdrop-no-scroll')
        : document.body.removeAttribute('class')
    }, [isOpen])
    
    if(!isOpen) {
        return null
    } else {
        return(
            <div className="w-[100vw] h-[100vh] z-[999] bg-[#121212c2] fixed top-0 left-0 right-0 flex items-center justify-center">
                <div className="w-4/5 h-max p-3 md:w-3/5 md:p-5 bg-background box-border relative">
                    <span onClick={onDismiss} className="absolute top-3 right-3">
                        <MdCancel/>
                    </span>
                    { children }
                </div>
            </div>
        )
    }
    
}