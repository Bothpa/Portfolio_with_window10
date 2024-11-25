import React, { useState, useRef, useEffect } from 'react';
import Login from "../Booting/Login";
import TaskBar from './TaskBar/TaskBar';
import MainIcon from './MainComponent/MainIcon';
import Chrome from './MainComponent/Chrome';
import ChromeStore from '../Store/ChormeStore';

const Main = () => {
    const { isChromeOn, setChromeOn, setUrl  } = ChromeStore();
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [dragEnd, setDragEnd] = useState({ x: 0, y: 0 });
    const dragRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = (event: React.MouseEvent) => {
        setIsDragging(true);
        setDragStart({ x: event.clientX, y: event.clientY });
        setDragEnd({ x: event.clientX, y: event.clientY });
    };

    const handleMouseMove = (event: React.MouseEvent) => {
        if (isDragging) {
            setDragEnd({ x: event.clientX, y: event.clientY });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const getDragStyle = () => {
        const width = Math.abs(dragEnd.x - dragStart.x);
        const height = Math.abs(dragEnd.y - dragStart.y);
        const left = Math.min(dragStart.x, dragEnd.x);
        const top = Math.min(dragStart.y, dragEnd.y);
        return {
            width,
            height,
            left,
            top,
            position: 'absolute' as 'absolute',
            border: '1px solid #0078D7',
            backgroundColor: 'rgba(0, 0, 180, 0.13)',
            pointerEvents: 'none' as 'none',
        };
    };

    return (
        <div
            className="w-screen h-screen wdbi flex flex-col p-1"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            <MainIcon img="RecycleBin" text="휴지통"/>
            <MainIcon img="Kakao" text="카카오톡"/>
            <MainIcon img="Chrome" text="Google Chrome" onClick={()=>{
                setChromeOn()
                setUrl("https://example.com")
            }}/>
            <MainIcon img="Devlog" text="데블로그" onClick={()=>{
                setChromeOn()
                setUrl("https://jungsonghun.iptime.org")
            }}/>
            <MainIcon img="Calendar" text="매모플레너" onClick={()=>{
                setChromeOn()
                setUrl("http://jungsonghun.iptime.org:8864/")
            }}/>
 
            <TaskBar />
            <Login />
            <Chrome/>
            <div ref={dragRef} className={`${!isDragging && "hidden"}`} style={getDragStyle()} />
        </div>
    );
};

export default Main;