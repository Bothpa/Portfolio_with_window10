const MainIcon = ({img, text, onClick} : {img:string, text:string, onClick?:()=>void}) => {
    return (
        <div onDoubleClick={onClick} className='w-[80px] mr-1 mb-7 h-fit Iconhover flex flex-col text-white text-xs items-center justify-center'>
            <img src={`/Images/${img}.png`} className="w-[60px] h-[60px] p-1" alt="Windows10" />
            <span className="w-[60px] text-center">{text}</span>
        </div>
    );
}

export default MainIcon;