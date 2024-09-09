import { useEffect, useRef, useState } from 'react';
import StartMenu from './StartMenu';

const StartButton = () => {
    const [isStartMenu, setStartMenu] = useState(false)
    const StartButtonRef = useRef<HTMLDivElement>(null);

    const handleClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        setStartMenu(prev => !prev);
    };

    return (
        <>
        <div ref={StartButtonRef} className="h-full w-[43px] flex justify-center items-center hover:bg-[#393939]" onClick={handleClick}>
            <img src="/Images/Menu-White.png" className="w-[17px] h-[17.5px] filter invert brightness-0" alt="시작 버튼" />
        </div>
        <StartMenu isStartMenu={isStartMenu} setStartMenu={setStartMenu} StartButtonRef={StartButtonRef}/>
        </>
    )
}

export default StartButton;