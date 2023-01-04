export const SectionTitle: React.FC<{ title:string }> = ({ title }) => {
    return(
        <div className="w-3/5 md:w-1/3 top-0 mx-auto">
            <div className="flex items-center justify-around">
                <span className="w-6 h-9 bg-primary"/>
                <span className="w-6 h-9 bg-primary"/>
            </div>
            <span className="w-full h-20 bg-primary text-white flex items-center justify-center">
                {title}
            </span>
        </div>

    )
}