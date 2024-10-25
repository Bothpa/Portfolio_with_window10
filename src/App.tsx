import { useEffect, useState } from "react";
import Booting from "./Booting/Booting";
import Main from "./Main/Main";

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
