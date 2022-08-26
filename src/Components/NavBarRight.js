import themeChange from '../Images/theme-change.svg'
import contatUs from '../Images/nav-contact-us.svg'
import education from '../Images/nav-education.svg'
import home from '../Images/nav-home.svg'
import prices from '../Images/nav-prices.svg'
import services from '../Images/nav-services.svg'
import {useContext} from 'react'
import { ThemeContext,THEMES } from '../utils/Context/ThemeContext'

function NavBarInfoRight(props){
    const {theme,code,colors} = useContext(ThemeContext)

    function changeTheme(){
        let newCode = (code+1) > Object.keys(THEMES).length-1 ? 0:(code+1)
        Object.entries(THEMES).forEach((item,key)=>{
            console.log(item);
            if(item[1].code == newCode){
                props.rerender(item[1])
            }
        })
        //props.rerender(theme == 'light'? THEMES.dark : THEMES.light)
    }

    return(
        <div className={`flex-grow-[2] self-start basis-0 sticky top-[15%] ${colors.secBg} ml-5 rounded-2xl
        flex flex-col justify-start`}>

            <div onClick={changeTheme} className=" self-start mx-auto my-[20%]">
            <object data={themeChange} style={{"pointer-events": "none"}}/>
            </div>

            <div className='w-full flex flex-col justify-center items-center'>
            <a href="#" className={`p-2 mx-2 my-5 rounded-full scale-up  ${colors.secBgHover + colors.mainBg}`}><object data={home} className=" m-auto object-fill"/></a>
            <a href="#" className={`p-2 mx-2 my-5 rounded-full scale-up  ${colors.secBgHover + colors.mainBg}`}><object data={services} className="m-auto object-fill"/></a>
            <a href="#" className={`p-2 mx-2 my-5 rounded-full scale-up  ${colors.secBgHover + colors.mainBg}`}><object data={education} className="m-auto object-fill"/></a>
            <a href="#" className={`p-2 mx-2 my-5 rounded-full scale-up  ${colors.secBgHover + colors.mainBg}`}><object data={prices} className="m-auto object-fill"/></a>
            <a href="#" className={`p-2 mx-2 my-5 rounded-full scale-up  ${colors.secBgHover + colors.mainBg}`}><object data={contatUs} className="m-auto object-fill"/></a>
            </div>
        </div>
    ) 
}

export default NavBarInfoRight