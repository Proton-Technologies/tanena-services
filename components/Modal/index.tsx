interface ModalProps {
    isOpen: boolean,
    onDismiss?: React.MouseEventHandler,
    children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onDismiss, children }) => {
    if(!isOpen) {
        return null
    } else {
        return(
            <div className="w-[100vw] h-[100vh] bg-[#12121282] absolute top-0 left-0 right-0">
                <div className="w-4/5 h-max p-3 md:w-3/5 md:p-5 bg-background box-border">
                    { children }
                </div>
            </div>
        )
    }
    
}