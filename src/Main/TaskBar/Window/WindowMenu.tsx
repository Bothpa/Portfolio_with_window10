import React, { useEffect, useRef } from 'react';
import PowerOffButton from './WindowMenuComponents/PowerOffButton';
import MultipurposeButton from './WindowMenuComponents/MultipurposeButton';

const WindowMenu = ({ isWindowMenu, setIsWindowMenu, WindowButtonRef }: { isWindowMenu: boolean, setIsWindowMenu: React.Dispatch<React.SetStateAction<boolean>>, WindowButtonRef : React.RefObject<HTMLDivElement> }) => {
    const menuRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                WindowButtonRef.current &&
                !WindowButtonRef.current.contains(event.target as Node)
            ) {
                setIsWindowMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setIsWindowMenu]);

    return (
        <div ref={menuRef} className={`${!isWindowMenu && 'hidden'} absolute bottom-[37px] left-0 w-[883px] h-[580px] bg-[#252525] flex bg-opacity-[0.94] backdrop-filter backdrop-blur-[6px]`}>
            <div className='flex flex-col h-full w-[43px]'>
                <MultipurposeButton image="User" other='mt-auto' otherIn='rounded-full'/>
                <MultipurposeButton image="File" />
                <MultipurposeButton image="Image" />
                <MultipurposeButton image="Setting" />
                <PowerOffButton isWindowMenu={isWindowMenu} />
            </div>
        </div>
    );
};

export default WindowMenu;