import React from 'react';

const SearchBar = () => {
    return (
        <div className="h-full w-[287px] relative flex items-center">
            <input
                type="text"
                className="w-full h-full bg-[#3F3F3F] border border-[#777777] text-white text-sm hover:border-[2px] pl-10 box-border search"
                placeholder="찾기"
            />
            <img src="/Images/Search.png" alt="돋보기" className="absolute left-2 w-5" />
        </div>
    );
};

export default SearchBar;