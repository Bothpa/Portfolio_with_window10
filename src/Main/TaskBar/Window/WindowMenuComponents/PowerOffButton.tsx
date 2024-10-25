import React, { useEffect, useRef, useState } from "react";

const PoserOffMenuLineElement = ({ text, onClick, img }: { text: string, onClick: () => void, img: string }) => {
    return (
        <div className='w-full h-[35px] flex items-center hover:bg-[#424343]' onClick={onClick}>
            <img src={`/Images/${img}`} alt="img" className="h-full ml-1 mr-1" />
            <div className='text-white text-[13px] '>{text}</div>
        </div>
    );
}

const PowerOffMenu = ({ PowerOffButtonRef, isPowerOffMenu, setPowerOffMenu }: { PowerOffButtonRef: React.RefObject<HTMLDivElement>, isPowerOffMenu: boolean, setPowerOffMenu: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const PowerOffMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                PowerOffMenuRef.current &&
                !PowerOffMenuRef.current.contains(event.target as Node) &&
                PowerOffButtonRef.current &&
                !PowerOffButtonRef.current.contains(event.target as Node)
            ) {
                setPowerOffMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setPowerOffMenu]);

    return (
        <div className={`${!isPowerOffMenu && 'hidden'} flex flex-col justify-center bg-[#222222] w-[255px] h-[115px] absolute bottom-full left-0`} ref={PowerOffMenuRef}>
            <PoserOffMenuLineElement text="절전" onClick={() => { }} img="SleepMode.png" />
            <PoserOffMenuLineElement text="시스템 종료" onClick={() => { }} img="PowerV2.png" />
            <PoserOffMenuLineElement text="다시시작" onClick={() => { }} img="Reload.png" />
        </div>
    );
}

const PowerOffButton = ({ isWindowMenu }: { isWindowMenu: boolean }) => {
    const [isPowerOffMenu, setPowerOffMenu] = useState(true);
    const PowerOffButtonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isWindowMenu) {
            setPowerOffMenu(false);
        }
    }, [isWindowMenu]);

    const handleClick = () => {
        setPowerOffMenu(prev => !prev);
    };

    return (
        <div className='w-full h-fit relative' ref={PowerOffButtonRef}>
            <img src="/Images/Power.png" alt="전원버튼" className='w-full p-1 hover:bg-[#52595D70]' onClick={handleClick} />
            <PowerOffMenu PowerOffButtonRef={PowerOffButtonRef} isPowerOffMenu={isPowerOffMenu} setPowerOffMenu={setPowerOffMenu} />
        </div>
    );
};

export default PowerOffButton;