import { useEffect, useState } from "react";
import Booting from "./Booting/Booting";
import Main from "./Main/Main";
import OnOff from "./Store/OnOff";

const App = () => {
  // const [isFullScreen, setFullScreen] = useState(false)
  // const [isBoot, setBoot] = useState(false)
  const { setIsFullScreen, setIsBoot, isFullScreen, isBoot } = OnOff()

  const toggleFullScreen = () => {
    setTimeout(() => {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      }  else {
       document.documentElement.requestFullscreen()
      }
      setIsBoot(true)
      setTimeout(() => {
        setIsBoot(false)
        setIsFullScreen(true)
      }, 4000)
    }, 500)
  }

  return (
    <>
      {isFullScreen ? (
        <Main/>
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
