const MultipurposeButton = ({image, other, otherIn, onClick}:{image:string, other?:string, otherIn?:string, onClick?:()=>void}) => {

    return (
        <div className={`w-full h-fit relative hover:bg-[#52595D70] ${other}`}>
            <img src={`/Images/${image}.png`} alt="전원버튼" className={`first-letter:w-full p-[12px] ${otherIn}`} />
        </div>
    );
};

export default MultipurposeButton;