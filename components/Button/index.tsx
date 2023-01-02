interface ButtonProps {
    startIcon?: any,
    endIcon?: any,
    children: React.ReactNode,
    variant?: 'contained'|'outlined',
    className?: string
}

export const Button: React.FC<ButtonProps> = ({ startIcon, endIcon, children, variant, className }) => {
    const variantStyles = variant === 'contained' ? 'bg-primary text-white' : 'border-2 border-primary text-primary'
    return(
        <button className={`flex px-4 py-2 gap-2 items-center rounded-md font-normal ${className} ${variantStyles}`}>
            {startIcon}
            {children}
            {endIcon}
        </button>
    )
}

Button.defaultProps = {
    'variant': 'contained'
}