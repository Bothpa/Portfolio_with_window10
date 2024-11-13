import React, { useEffect, useRef } from 'react';
import PowerOffButton from './WindowMenuComponents/PowerOffButton';
import MultipurposeButton from './WindowMenuComponents/MultipurposeButton';
import WindowMenuList from './WindowMenuComponents/WindowMenuList';
import { ListData, sort } from '../../../TestData';
import WindowMenuBox from './WindowMenuComponents/WindowMenuBox';

const WindowMenu = (
    { isWindowMenu, setIsWindowMenu, WindowButtonRef }
    : { isWindowMenu: boolean, setIsWindowMenu: React.Dispatch<React.SetStateAction<boolean>>, WindowButtonRef : React.RefObject<HTMLDivElement> }
    ) => {
    const menuRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // 메뉴창이 열려있는 상태에서 메뉴창 외부를 클릭하면 메뉴창이 닫히도록 하는 이벤트
            // 메뉴의 ref가 존재하고, 메뉴의 ref가 가리키는 요소가 클릭한 요소의 부모 요소가 아니며, WindowButton의 ref가 존재하고, WindowButton의 ref가 가리키는 요소가 클릭한 요소의 부모 요소가 아닐 때
            // 알고리즘 by Copilot
            if (menuRef.current && !menuRef.current.contains(event.target as Node) && WindowButtonRef.current && !WindowButtonRef.current.contains(event.target as Node)) 
            {
                setIsWindowMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setIsWindowMenu]);

    return (
        <div ref={menuRef} className={`${!isWindowMenu && 'hidden'} pt-2 absolute bottom-[37px] left-0 w-[883px] h-[580px] bg-[#232323] bg-opacity-[0.95] flex backdrop-filter backdrop-blur-[6px]`}>
            <div className='flex flex-col h-full w-[46px]'>
                <MultipurposeButton image="Line3" other='mb-auto p-[1px]' otherIn='rounded-full p-[10px]'/>
                <MultipurposeButton image="User" otherIn='rounded-full p-[10px]'/>
                <MultipurposeButton image="File" otherIn='p-[14px]'/>
                <MultipurposeButton image="Image" otherIn='p-[14px]'/>
                <MultipurposeButton image="Setting" otherIn='p-[14px]'/>
                <PowerOffButton isWindowMenu={isWindowMenu} />
            </div>
            
            <div className='w-[260px] h-full overflow-y-auto custum-scrollbar'>
            {sort.map((sortItem, sortIndex) => {
                const filteredData = ListData.filter(data => data.text.charAt(0).toUpperCase() === sortItem.toUpperCase());
                if (filteredData.length === 0) return null;
                return (
                    <React.Fragment key={sortIndex}>
                        <div className='w-full h-[37px] flex items-center pl-3 taskhover text-white text-[13px]'>
                            <span>{sortItem}</span>
                        </div>
                        {filteredData.map((data, dataIndex) => (
                            <WindowMenuList key={dataIndex} img={data.img} text={data.text} />
                        ))}
                    </React.Fragment>
                );
            })}
            </div>

            <div className='w-[260px] h-full ml-2 text-white text-xs font-bold flex flex-col' >
                <span className='my-3'>내 생활 한 눈에 보기</span>
                <div className='grid grid-cols-2 gap-[6px] w-fit h-fit '>
                    <WindowMenuBox img='Forder' text='Photo'/>
                    <WindowMenuBox img='Instagram' text='인스타그램'/>
                    <WindowMenuBox img='In' text='LikeIn'/>
                    <WindowMenuBox img='Poker' text='Poker'/>
                    <WindowMenuBox img='Forder' text='로고 모음'/>
                </div>
            </div>

            <div className='w-[260px] h-full text-white text-xs font-bold flex flex-col ml-auto' >
                <span className='my-3'>엔터테이먼트</span>
                <div className='grid grid-cols-2 gap-[6px] w-fit h-fit '>
                    <WindowMenuBox img='Video' text='비디오'/>
                    <WindowMenuBox img='Photo' text='사진'/>
                    <WindowMenuBox img='Github' text='깃허브'/>
                    <WindowMenuBox img='Google' text='구글'/>
                    <WindowMenuBox img='Forder' text='2020201034'/>
                    <WindowMenuBox img='Horizon' text='호라이즌'/>
                    <WindowMenuBox img='Devlog' text='데블로그'/>
                    <WindowMenuBox img='Forder' text='My-App'/>
                </div>
            </div>

        </div>
    );
}; 

export default WindowMenu;