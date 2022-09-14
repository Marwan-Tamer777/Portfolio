import themeChange from '../../Images/theme-change.svg'
import contactUs from '../../Images/nav-contact-us.svg'
import education from '../../Images/nav-education.svg'
import home from '../../Images/nav-home.svg'
import prices from '../../Images/nav-prices.svg'
import services from '../../Images/nav-services.svg'
import {useContext,useEffect} from 'react'
import { ThemeContext,THEMES } from '../../utils/Context/ThemeContext'

function NavBarInfoRight(props){
    const {theme,code,colors} = useContext(ThemeContext)

    useEffect(()=>{
        /*
         prevents user from spamming the change theme icon as eveytime the page rerenders
         this component doesn't mount the changeTheme function on the theme icon immediately
         but instead waits 1 second to not allow any "funky" behaviour while the SVGs load on recolor
         */
        let icon = document.getElementById("ThemeIcon")
        setTimeout(()=>{icon.addEventListener('click',changeTheme)}, 1000)
    })

    function changeTheme(){
        let newCode = (code+1) > Object.keys(THEMES).length-1 ? 0:(code+1)
        localStorage.setItem("theme",newCode)
        Object.entries(THEMES).forEach((item,key)=>{
            if(item[1].code == newCode){
                props.rerender(item[1])
            }
        })
    }

    return(
        <div className={`flex-grow-[1] flex-shrink-[1] self-start  sticky top-[15%] ${colors.secBg} ml-1 lg:ml-5 rounded-2xl
        flex flex-col justify-start`}>

            <div id={'ThemeIcon'} className=" self-start mx-auto my-[20%]">
            <object data={themeChange} style={{"pointer-events": "none"}}/>
            </div>

            <div className='w-full flex flex-col justify-center items-center'>            
            <a href="#Welcome" className={`p-2 mx-2 my-5 rounded-full scale-up  ${colors.secBgHover + colors.mainBg}`}><object data={home} className=" m-auto object-fill" style={{"pointer-events": "none"}}/></a>
            <a href="#Education" className={`p-2 mx-2 my-5 rounded-full scale-up  ${colors.secBgHover + colors.mainBg}`}><object data={education} className="m-auto object-fill" style={{"pointer-events": "none"}}/></a>
            <a href="#Experiences" className={`p-2 mx-2 my-5 rounded-full scale-up  ${colors.secBgHover + colors.mainBg}`}><object data={services} className="m-auto object-fill" style={{"pointer-events": "none"}}/></a>
            <a href="#PricePlans" className={`p-2 mx-2 my-5 rounded-full scale-up  ${colors.secBgHover + colors.mainBg}`}><object data={prices} className="m-auto object-fill" style={{"pointer-events": "none"}}/></a>
            <a href="#ContactUs" className={`p-2 mx-2 my-5 rounded-full scale-up  ${colors.secBgHover + colors.mainBg}`}><object data={contactUs} className="m-auto object-fill" style={{"pointer-events": "none"}}/></a>
            </div>
        </div>
    ) 
}

export default NavBarInfoRight