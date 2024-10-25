import WindowButton from './Window/WindowButton';
import SearchBar from './Search/SearchBar';
import Clock from './Others/Clock';
import MultipurposeButton from './Window/WindowMenuComponents/MultipurposeButton';

const TaskBar = () => {
    
    return (
        <div className="fixed left-0 bottom-0 w-full h-[37px] mt-auto bg-[#1C1C1C] flex flex-row z-[100] bg-opacity-[0.94] backdrop-filter backdrop-blur-[6px]">
            <WindowButton />
            <SearchBar />
            <div className='ml-auto'>
                <Clock />
                
            </div>
        </div>
    )
};

export default TaskBar;