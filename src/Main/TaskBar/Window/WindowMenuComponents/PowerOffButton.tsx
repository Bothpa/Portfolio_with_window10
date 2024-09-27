import React, { useEffect, useRef, useState } from "react";

const PowerOffMenu = ({PowerOffButtonRef, isPowerOffMenu, setPowerOffMenu} : {PowerOffButtonRef:React.RefObject<HTMLDivElement>,isPowerOffMenu:boolean, setPowerOffMenu:React.Dispatch<React.SetStateAction<boolean>>}) => {
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
        <div className={`${!isPowerOffMenu && 'hidden'} bg-[#222222] w-[260px] h-[150px] absolute bottom-full left-0`} ref={PowerOffMenuRef}>
            
        </div>
    );
}

const PowerOffButton = ({isWindowMenu} : {isWindowMenu : boolean}) => {
    const [isPowerOffMenu, setPowerOffMenu] = useState(false);
    const PowerOffButtonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isWindowMenu) {
            setPowerOffMenu(false);
        }
    },[isWindowMenu]);

    const handleClick = () => {
        setPowerOffMenu(prev => !prev);
    };

    return (
        <div className='w-full h-fit mt-auto relative' ref={PowerOffButtonRef}>
            <img src="/Images/Power.png" alt="전원버튼" className='w-full p-1 hover:bg-[#545454]' onClick={handleClick} />
            <PowerOffMenu PowerOffButtonRef={PowerOffButtonRef} isPowerOffMenu={isPowerOffMenu} setPowerOffMenu={setPowerOffMenu}/>
        </div>
    );
};

export default PowerOffButton;