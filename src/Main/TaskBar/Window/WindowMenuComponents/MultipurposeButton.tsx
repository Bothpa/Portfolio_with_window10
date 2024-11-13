const MultipurposeButton = ({image, other, otherIn, onClick}:{image:string, other?:string, otherIn?:string, onClick?:()=>void}) => {

    return (
        <div className={`w-full h-fit relative taskhover ${other}`}>
            <img src={`/Images/${image}.png`} alt="전원버튼" className={`first-letter:w-full ${otherIn}`} />
        </div>
    );
};

export default MultipurposeButton;