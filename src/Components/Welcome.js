import React, { useContext } from 'react';
import { ThemeContext } from '../utils/Context/ThemeContext';
import avatarPic from "../Images/avatar-cutout.svg"
import particleRectangle from "../Images/particle-rectangle-sm.svg"
import particleCircle from "../Images/particle-circle-sm.svg"

function Welcome(){

    const {theme,code,colors} = useContext(ThemeContext)

    return(
        <div id="Welcome"  style={{'transition': '0.5s'}} className={`${colors.secBg} relative lg:rounded-2xl shadow-2xl flex flex-col p-5`}>

            {/* <object data={avatarPic} className={`absolute -right-1 bottom-0 max-h-full`}/> */}
            <object data={particleRectangle} className={`absolute left-[50%] top-[5%]`}/>
            <object data={particleCircle} className={`absolute left-[20%] bottom-[5%]`}/>
            
            <h1 className={`${colors.mainHeaderText} font-extrabold m-5 text-5xl`}>
                I'm Marwan Tamer<br/>
                A <span className={`${colors.secHeaderText}`}>Front-End</span> Developer
            </h1>
            <div className={`${colors.secHeaderText} text-sm lg:w-1/2 m-5`}>
                Hello there! I hope your day has been going great! I am a computer science undergraduate at FCAI eager to learn new tools and skills! 
                And make meaningful projects for clients to help post their online presence and create platforms to help people expand their businesses!
            </div>
            <a href="https://www.upwork.com/freelancers/~016c0d143620d2f2fe" target="_blank" className={`${colors.mainBg} py-3 px-6 scale-up rounded-md m-5  w-fit ${colors.secBgHover}`}>
                HIRE ME {`-->`}
            </a>
                
        </div>
    )
}

export default Welcome;