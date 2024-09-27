import { useEffect, useState } from "react";

const Login = () => {
    const [isLogin, setLogin] = useState(false)
    useEffect(() => {
      setTimeout(() => {
        setLogin(true)
      }, 3000)
    }
    , [])
  
    return (
      <div className={`w-screen h-screen lbi flex justify-center items-center flex-col z-[200] ${isLogin ? 'hidden' : ''}`}>
        <img src="/Images/User.png" alt="" className="z-[6] w-[210px] h-[210px] rounded-full mb-6"/>
        <span className="font-bold text-3xl text-white mb-5">Administrator</span>
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

export default Login;