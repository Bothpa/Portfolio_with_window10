import React from 'react';
import StartButton from './Components/StartButton';
import SearchBar from './Components/SearchBar';

const TaskBar = () => {
    return (
        <div className="fixed left-0 bottom-0 w-full h-[37px] mt-auto bg-[#1C1C1C] flex flex-row">
            <StartButton />
            <SearchBar />
        </div>
    )
};

export default TaskBar;