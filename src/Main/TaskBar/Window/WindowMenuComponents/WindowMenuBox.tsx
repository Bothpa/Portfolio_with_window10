const WindowMenuBox = ({img, text} : {img:string, text:string}) => {
    return (
        <div className='relative border-2 border-transparent hover:border-zinc-400 box-border w-[110px] h-[110px] bg-[#999999] bg-opacity-[0.3] hover:bg-opacity-[0.4] flex items-center justify-center'>
            <img src={`/Images/${img}.png`} alt="" className='w-2/5 h-2/5'/>
            <span className='absolute bottom-1 left-1'>{text}</span>
        </div>
    );
}

export default WindowMenuBox;