import React, { useContext } from 'react';
import { ThemeContext } from '../utils/Context/ThemeContext';
import avatarPic from "../Images/avatar-cutout.svg"
import particleRectangle from "../Images/particle-rectangle-sm.svg"
import particleCircle from "../Images/particle-circle-sm.svg"

function Welcome(){

    const {theme,code,colors} = useContext(ThemeContext)

    return(
        <div className={`${colors.secBg} relative rounded-2xl shadow-2xl flex flex-col p-5`}>

            <object data={avatarPic} className={`absolute -right-1 bottom-0 max-h-full`}/>
            <object data={particleRectangle} className={`absolute left-[50%] top-[5%]`}/>
            <object data={particleCircle} className={`absolute left-[20%] bottom-[5%]`}/>
            
            <h1 className={`${colors.mainHeaderText} font-extrabold m-5 text-5xl`}>
                I'm Marwan Tamer<br/>
                <span className={`${colors.secHeaderText}`}>Front-End</span> Developer
            </h1>
            <div className={`${colors.secHeaderText} text-sm w-1/3 m-5`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.
            </div>
            <a href="#" className={`${colors.mainBg} py-3 px-6 scale-up rounded-md m-5  w-fit ${colors.secBgHover}`}>
                HIRE ME {`-->`}
            </a>
                
        </div>
    )
}

export default Welcome;