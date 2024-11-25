// import { useRef, useState, useEffect } from "react";
// import ChromeStore from "../../Store/ChormeStore";

// const Chrome = () => {
//     const { isChromeOn, setChromeOFF, url } = ChromeStore();
//     const [isDragging, setIsDragging] = useState(false);
//     const [position, setPosition] = useState({ x: 0, y: 0 });
//     const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
//     const dragRef = useRef<HTMLDivElement>(null);
//     const animationFrameRef = useRef<number | null>(null);

//     const handleMouseDown = (event: React.MouseEvent) => {
//         event.preventDefault(); // 기본 동작 방지
//         event.stopPropagation(); // 이벤트 전파 중지
//         setIsDragging(true);
//         setDragStart({ x: event.clientX - position.x, y: event.clientY - position.y });
//     };

//     const handleMouseMove = (event: MouseEvent) => {
//         if (isDragging) {
//             if (animationFrameRef.current !== null) {
//                 cancelAnimationFrame(animationFrameRef.current);
//             }
//             animationFrameRef.current = requestAnimationFrame(() => {
//                 setPosition({ x: event.clientX - dragStart.x, y: event.clientY - dragStart.y });
//             });
//         }
//     };

//     const handleMouseUp = () => {
//         setIsDragging(false);
//         if (animationFrameRef.current !== null) {
//             cancelAnimationFrame(animationFrameRef.current);
//             animationFrameRef.current = null;
//         }
//     };

//     const handleMouseLeave = () => {
//         setIsDragging(false);
//     };

//     useEffect(() => {
//         const handleMouseUpGlobal = () => {
//             setIsDragging(false);
//             if (animationFrameRef.current !== null) {
//                 cancelAnimationFrame(animationFrameRef.current);
//                 animationFrameRef.current = null;
//             }
//         };

//         document.addEventListener("mousemove", handleMouseMove);
//         document.addEventListener("mouseup", handleMouseUpGlobal);
//         return () => {
//             document.removeEventListener("mousemove", handleMouseMove);
//             document.removeEventListener("mouseup", handleMouseUpGlobal);
//         };
//     }, [isDragging]);

//     return (
//         <div
//             style={{ left: position.x, top: position.y }}
//             className={`fixed flex flex-col w-[800px] h-[600px] bg-[#1F2020] ${!isChromeOn && 'hidden'}`}
//         >
//             <div 
//                 className="w-full h-[40px] flex items-center bg-[#1F2020]"
//                 onMouseDown={handleMouseDown}
//                 onMouseUp={handleMouseUp}
//                 onMouseLeave={handleMouseLeave}
//                 ref={dragRef}
//             >
//                 {/* 최소화 */}
//                 <div className="w-[50px] h-full hover:bg-[#363737] flex items-center justify-center ml-auto">
//                     <div className="w-[14px] h-[1px] rounded-xl bg-[#ffffff]" />
//                 </div>
//                 {/* 최대화 */}
//                 <div className="w-[50px] h-full hover:bg-[#363737] flex items-center justify-center">
//                     <div className="w-[12px] h-[12px] border border-white" />
//                 </div>
//                 {/* 닫기 */}
//                 <div className="w-[50px] h-full hover:bg-[#363737] flex items-center justify-center relative">
//                     <div className="absolute w-[16px] h-[1px] rounded-xl bg-[#ffffff] transform rotate-45" />
//                     <div className="absolute w-[16px] h-[1px] rounded-xl bg-[#ffffff] transform rotate-[135deg]" />
//                 </div>
//             </div>
//             <div className="flex-grow">
//                 <iframe src={`${url}`} className="w-full h-full" />
//             </div>
//         </div>
//     );
// };

// export default Chrome;

import { useRef, useState, useEffect, useCallback } from "react";
import ChromeStore from "../../Store/ChormeStore";

const Chrome = () => {
    const { isChromeOn, setChromeOFF, url } = ChromeStore();
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [size, setSize] = useState<{width:string|number, height:string|number}>({ width: 800, height: 600 });
    const [isSizeMax, setIsSizeMax] = useState(false);
    const dragRef = useRef<HTMLDivElement>(null);
    const animationFrameRef = useRef<number | null>(null);

    const handleMouseDown = (event: React.MouseEvent) => {
        event.stopPropagation(); // 이벤트 전파 중지
        setIsDragging(true);
        setDragStart({ x: event.clientX - position.x, y: event.clientY - position.y });
    };

    const handleMouseMove = (event: MouseEvent) => {
        if (isDragging) {
            if (animationFrameRef.current !== null) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            animationFrameRef.current = requestAnimationFrame(() => {
                setPosition({ x: event.clientX - dragStart.x, y: event.clientY - dragStart.y });
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        if (animationFrameRef.current !== null) {
            cancelAnimationFrame(animationFrameRef.current);
            animationFrameRef.current = null;
        }
    };

    const handleMouseLeave = (event: MouseEvent | React.MouseEvent<HTMLDivElement>) => {
        if (isDragging && dragRef.current) {
            const rect = dragRef.current.getBoundingClientRect();
            const buffer = 300; // 300픽셀 여유 공간
            if (
                event.clientY < rect.top - buffer ||
                event.clientY > rect.bottom + buffer ||
                event.clientX < rect.left - buffer ||
                event.clientX > rect.right + buffer
            ) {
                setIsDragging(false);
            }
        }
    };

    useEffect(() => {
        const handleMouseUpGlobal = () => {
            setIsDragging(false);
            if (animationFrameRef.current !== null) {
                cancelAnimationFrame(animationFrameRef.current);
                animationFrameRef.current = null;
            }
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUpGlobal);
        document.addEventListener("mouseleave", handleMouseLeave);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUpGlobal);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [isDragging]);

    const maxSize = useCallback(() => {
        setPosition({ x: 0, y: 0 });
        setSize({ width: "100%", height: "100%" });
        setIsSizeMax(true);
    },[]) 

    const minSize = useCallback(() => {
        setPosition({ x: 400, y: 300 });
        setSize({ width: 800, height: 600 });
        setIsSizeMax(false);
    },[]) 

    return (
        <div
            style={{ left: position.x, top: position.y, width: size.width, height: size.height }}
            className={`fixed flex flex-col w-[800px] h-[600px] bg-[#1F2020] ${!isChromeOn && 'hidden'}`}
        >
            <div 
                className="w-full h-[40px] flex items-center bg-[#1F2020]"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                ref={dragRef}
            >
                {/* 최소화 */}
                <div className="w-[50px] h-full hover:bg-[#363737] flex items-center justify-center ml-auto" onClick={setChromeOFF}>
                    <div className="w-[14px] h-[1px] rounded-xl bg-[#ffffff]" />
                </div>
                {/* 최대크기로 + 원래크기로*/}
                {isSizeMax ? (
                    <div className="w-[50px] h-full hover:bg-[#363737] relative" onClick={minSize}>
                        <div className="w-[9px] h-[9px] border border-white absolute transform top-[14px] left-[22px] z-[9]"/>
                        <div className="w-[9px] h-[9px] border border-white absolute transform bottom-[14px] left-[19px] z-[10] bg-black"/>
                    </div>
                ) : (
                    <div className="w-[50px] h-full hover:bg-[#363737] flex items-center justify-center" onClick={maxSize}>
                        <div className="w-[11px] h-[11px] border border-white" />
                    </div>
                )}
                {/* 닫기 */}
                <div 
                    className="w-[50px] h-full hover:bg-[#363737] flex items-center justify-center relative"
                    onClick={setChromeOFF}
                >
                    <div className="absolute w-[16px] h-[1px] rounded-xl bg-[#ffffff] transform rotate-45" />
                    <div className="absolute w-[16px] h-[1px] rounded-xl bg-[#ffffff] transform rotate-[135deg]" />
                </div>
            </div>
            <div className="flex-grow">
                <iframe src={`${url}`} className="w-full h-full" />
            </div>
        </div>
    );
};

export default Chrome;