const Booting = ({isBoot} : {isBoot:boolean}) => {
    return (
        <div className={`${!isBoot && 'hidden'} fixed w-screen h-screen bg-black flex flex-col items-center justify-center pt-[120px]`}>
            <img src="/Images/Menu-Blue.png" className="w-[220px] h-[220px] mb-[370px]" alt="" />
            <div className="loading-icon">
                <div>
                    <div>
                    <div><div></div></div>
                    <div><div></div></div>
                    <div><div></div></div>
                    <div><div></div></div>
                    <div><div></div></div>
                    <div><div></div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booting;