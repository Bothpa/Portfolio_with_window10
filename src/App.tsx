import { useEffect, useState } from "react";
import TaskBar from "./TaskBar/TaskBar";

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

const Login = () => {
  const [isLogin, setLogin] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setLogin(true)
    }, 3000)
  }
  , [])

  return (
    <div className={`w-screen h-screen lbi flex justify-center items-center flex-col ${isLogin ? 'hidden' : ''}`}>
      <img src="/Images/User.png" alt="" className="z-[6] w-[210px] h-[210px] rounded-full mb-6"/>
      <span className="font-bold text-3xl text-white mb-5">Administer</span>
      <div className="flex items-center">
        <div className="loading-icon mr-2">
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
        <span className="text-white text-2xl">환영합니다</span>
      </div>
    </div>
  );
};

const App = () => {
  const [isFullScreen, setFullScreen] = useState(false)
  const [isBoot, setBoot] = useState(false)

  const toggleFullScreen = () => {
    setTimeout(() => {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      }  else {
       document.documentElement.requestFullscreen()
      }
      setBoot(true)
      setTimeout(() => {
        setBoot(false)
        setFullScreen(true)
      }, 4000)
    }, 500)
  }

  return (
    <>
      {isFullScreen ? (
        <div className="w-screen h-screen wdbi flex pl-[39px]">
          <TaskBar />
          <Login/>
        </div>
      ) : (
        <div className="w-screen h-screen flex flex-col items-center justify-center text-3xl font-bold">
          <img src="/Images/Switch.png" className="btn-3d color" alt="전원버튼" onMouseUp={toggleFullScreen} />
          <Booting isBoot={isBoot}/>
        </div>
      )
      }
    </>
  );
}

export default App;

function sleep(arg0: number) {
  throw new Error("Function not implemented.");
}
