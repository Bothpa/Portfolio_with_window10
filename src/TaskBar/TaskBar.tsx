import React from 'react';
import StartButton from './Start/StartButton';
import SearchBar from './Search/SearchBar';

const TaskBar = () => {
    return (
        <div className="fixed left-0 bottom-0 w-full h-[37px] mt-auto bg-[#1C1C1C] flex flex-row z-[100] bg-opacity-[0.94] backdrop-filter backdrop-blur-[6px]">
            <StartButton />
            <SearchBar />
        </div>
    )
};

export default TaskBar;