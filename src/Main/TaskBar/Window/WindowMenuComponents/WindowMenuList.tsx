const WindowMenuList = ({ img, text }: { img?:string, text:string }) => {
    return (
        <div className='w-full h-[37px] flex items-center pl-1 taskhover text-white text-[13px]'>
            {img && <img src={`/Images/${img}.png`} alt="icon" className='h-[67%] w-auto mr-2' />}
            <span>{text}</span>
        </div>
    );
}

export default WindowMenuList;