export const MilestoneCard = ({ title, description, className}) => {
    return (
        <div className={`shadow-md rounded-[14px] px-6 py-8 ${className || ""}`}>
            <p className="text-2xl font-bold mb-6">{title}</p>
            <p>{description}</p>
        </div>
    )
}

export const MilestoneDateCard = ({ date, className }) => {
    return (
        <div className={`absolute sm:inset-0  ${className || ""} right-0 sm:mx-auto flex justify-center items-center w-14 h-14 rounded-[100px] bg-purple-600 text-[18px] text-[#fff] font-bold`}>
            {date}
        </div>
    )
}