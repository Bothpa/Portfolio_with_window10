const Booting = ({isBoot} : {isBoot:boolean}) => {
    return (
        <div className={`${!isBoot && 'hidden'} fixed w-screen h-screen bg-black flex flex-col items-center justify-center`}>
            <img src="/Images/Menu-Blue.png" className="w-[220px] h-[220px] mb-[500px]" alt="" />
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