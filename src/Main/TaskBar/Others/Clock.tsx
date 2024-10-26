import { useEffect, useState } from "react";

const Clock = () => {
    const [time, setTime] = useState(new Date());
    
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    const formattedDate = `${time.getFullYear()}-${String(time.getMonth() + 1).padStart(2, '0')}-${String(time.getDate()).padStart(2, '0')}`;

    const formattedTime = time.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    });

    return (
        <div className="flex flex-col h-full items-center justify-center text-white text-xs px-2 taskhover">
            <div className="mb-[1px]">{formattedTime}</div>
            <div>{formattedDate}</div>
        </div>
    );
}

export default Clock;