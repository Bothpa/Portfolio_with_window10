import WindowButton from './Window/WindowButton';
import SearchBar from './Search/SearchBar';
import Clock from './Others/Clock';
import Notification from './Others/Notification';
import ShowDesktopButton from './Others/ShowDesktopButton';
import Speaker from './Others/Speaker';
import HiddenItems from './Others/HiddenItems';
import X from './Others/X';
import ViewTasks from './Others/ViewTasks';

const TaskBar = () => {
    
    return (
        <div className="fixed left-0 bottom-0 w-full h-[40px] mt-auto bg-[#1C1C1C] flex flex-row z-[100] bg-opacity-[0.94] backdrop-filter backdrop-blur-[6px]">
            <WindowButton />
            <SearchBar />
            <ViewTasks />
            <div className='w-fit h-full ml-auto flex flex-row'>
                <HiddenItems />
                <Speaker />
                <X />
                <Clock />
                <Notification />
                <ShowDesktopButton />
            </div>
        </div>
    )
};

export default TaskBar;