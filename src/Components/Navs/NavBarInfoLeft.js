import avatar from "../../Images/avatar-circle.svg"
import linkedin from "../../Images/icon-linkedin.svg"
import github from "../../Images/icon-github.svg"
import downloadIcon from '../../Images/download-cv.svg'
import drawer from "../../Images/nav-drawer.svg"
import close from "../../Images/nav-close.svg"
import NavSkillsList from "./NavSkillsList"
import CV from '../../Resources/Marwan-Tamer-Resume-U.pdf'
import { useContext } from "react"
import { ThemeContext } from "../../utils/Context/ThemeContext"
const languagesList = {
    title: "Languages",
    items:[
        {title:"Arabic", value:100},
        {title: "English", value:90},
        {title: "German", value: 20}
    ]
}

const mainSkillsList ={
    title: "Skills",
    items:[
        {title:"Front-End devlopment",value:90},
        {title:"Tailwind CSS",value:90},
        {title:"React.js",value:85},
        {title:"Redux",value:70},
        
        {title:"Back-End devlopment",value:70},
        {title:"Node.js",value:80},
        {title:"MongoDB",value:70},
        {title:"express",value:60},

    ]
}

const secondarySkillsList= {
    title: "Secondary Skills",
    type: "anything",
    items:[
        'Android app development','Android studio', 'Desktop app decelopment', 'java', 
        'C++', 'problem solving','OOP'
    ]
}

const softSkillsList= {
    title: "Soft/Managment Skills",
    type: "anything",
    items:[
        'Project Management','Agile development' ,'Scrum framework','Time management'
    ]
}


/*
 The left nav drawer logic for mobile phones needs reconsidering as 
    1-the theme updates dynamically from the App parent 
    component which makes the SVG not load properly
    2-once the user clicks on the menu it fixed to the open/flex and close/none display ignoring
    if the user widens the screen/css media queries
 */
function openNav() {
    console.log("Open")
    document.getElementById("NavDrawer").style.display="none"
    document.getElementById("NavClose").style.display="inline"
    document.getElementById("NavBarInfoLeft").style.display = "flex";
  }
  
  function closeNav() {
    console.log("Close")
    document.getElementById("NavDrawer").style.display="inline"
    document.getElementById("NavClose").style.display="none"
    document.getElementById("NavBarInfoLeft").style.display = "none";
  }
function NavBarInfoLeft(){
    const {theme,code,colors} = useContext(ThemeContext)

    return(
        <div>
            <div onClick={openNav}>
                <object data={drawer} id="NavDrawer"  className=" inline md:hidden object-fill" style={{"pointer-events": "none"}}/>
            </div>
            <div id="NavBarInfoLeft" className={`hidden md:flex flex-col flex-grow-[3] flex-shrink-[2] basis-0 self-start  top-0 ${colors.secBg} mr-5 rounded-r-2xl
            justify-center items-center p-5`}>
                
                <div onClick={closeNav}>
                    <object data={close} id="NavClose" className="inline md:hidden object-fill" style={{"pointer-events": "none"}}/>
                </div>
                <object data={avatar}/>
                <p className={`${colors.mainHeaderText} text-lg font-bold `}>Marwan Tamer</p>
                <p className={`${colors.mainHeaderText} text-lg font-bold `}>Front-End Developer</p>

                <div className={`flex flex-row justify-around items-around w-full py-4 ${colors.borderB} border-b-2`}>
                    <a href="https://www.linkedin.com/in/marwan-tamer/" target="_blank" className={`p-2 m-2 ${colors.mainBg} rounded-full scale-up`}><object data={linkedin} style={{"pointer-events": "none"}} className="m-auto object-fill"/></a>
                    <a href="https://github.com/thetimelord777/" target="_blank" className={`p-2 m-2 ${colors.mainBg} rounded-full scale-up`}><object data={github} style={{"pointer-events": "none"}} className="m-auto object-fill"/></a>
                </div>

                <div className={`w-full py-4 ${colors.borderB} border-b-2`}>
                    <div className="flex flex-row justify-between py-1">
                        <p className={`${colors.mainBg} p-1 font-medium`}>Age:</p>
                        <p className={colors.secHeaderText}>20</p>
                    </div>

                    <div className="flex flex-row justify-between py-1">
                        <p className={`${colors.mainBg} p-1`}>Location:</p>
                        <p className={colors.secHeaderText}>Cairo,Egypt</p>
                    </div>

                    <div className="flex flex-row justify-between py-1">
                        <p className={`${colors.mainBg}p-1`}>Freelance:</p>
                        <p className={colors.aviText}>Available</p>
                    </div>

                    <div className="flex flex-row justify-between py-1">
                        <p className={`${colors.mainBg}p-1`}>Job opportunities:</p>
                        <p className={colors.aviText}>Open</p>
                    </div>
                </div>

                <NavSkillsList list={languagesList}/>
                <NavSkillsList list={mainSkillsList}/>
                <NavSkillsList list={secondarySkillsList}/>
                <NavSkillsList list={softSkillsList}/>

                <a href={CV} download>
                    <div className={`flex flex-row items-center ${colors.mainBg} p-4 mt-4 rounded-lg shadow-2xl scale-up`}>
                        <span className=" font-bold text-sm">
                            DOWNLOAD CV
                        </span>
                        <object data={downloadIcon}/>
                    </div>     
                </a>
        </div>
    </div>
    )
}

export default NavBarInfoLeft