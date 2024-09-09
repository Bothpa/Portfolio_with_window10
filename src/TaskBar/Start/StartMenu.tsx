import React, { useEffect, useRef } from 'react';

const StartMenu = ({ isStartMenu, setStartMenu, StartButtonRef }: { isStartMenu: boolean, setStartMenu: React.Dispatch<React.SetStateAction<boolean>>, StartButtonRef : React.RefObject<HTMLDivElement> }) => {
    const menuRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                StartButtonRef.current &&
                !StartButtonRef.current.contains(event.target as Node)
            ) {
                setStartMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setStartMenu]);

    return (
        <div ref={menuRef} className={`${!isStartMenu && 'hidden'} fixed bottom-[37px] left-0 w-[883px] h-[580px] bg-[#252525] flex bg-opacity-[0.94] backdrop-filter backdrop-blur-[6px]`}>
            <div className='flex flex-col h-full w-[43px]'>
                <img src="/Images/Power.png" alt="전원버튼" className='w-full p-1 mt-auto hover:bg-[#545454]' />
            </div>
        </div>
    );
};

export default StartMenu;