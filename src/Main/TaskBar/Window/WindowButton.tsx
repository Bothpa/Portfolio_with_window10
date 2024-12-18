import { useEffect, useRef, useState } from 'react';
import WindowMenu from './WindowMenu';

const WindowButton = () => {
    const [isWindowMenu, setIsWindowMenu] = useState(false)
    const WindowButtonRef = useRef<HTMLDivElement>(null);

    const handleClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        setIsWindowMenu(prev => !prev);
    };

    return (
        <>
        <div ref={WindowButtonRef} className="h-full w-[46px] flex justify-center items-center taskhover" onClick={handleClick}>
            <img src="/Images/Menu-White.png" className="w-[18px] h-[18.5px] filter invert brightness-0" alt="윈도우 버튼" />
        </div>
        <WindowMenu isWindowMenu={isWindowMenu} setIsWindowMenu={setIsWindowMenu} WindowButtonRef={WindowButtonRef}/>
        </>
    )
}

export default WindowButton;