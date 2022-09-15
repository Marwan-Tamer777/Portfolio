import {useEffect,useState} from 'react'
import NavBarInfoLeft from './Navs/NavBarInfoLeft';
import NavBarInfoRight from './Navs/NavBarRight';
import Welcome from './Welcome';
import PricePlans from './PricePlans/PricePlans';
import Education from './Education/Education';
import Experiences from './Experiences/Experiences';
import ContactUs from './ContactUs/ContactUs';
import reColorSVGs from '../utils/Transitions/reColorsSVGs';
import { ThemeContext,THEMES } from '../utils/Context/ThemeContext';

function App(){
  let [theme,toggleTheme] = useState(THEMES.light);

  useEffect(()=>{
    /* due to the object tags not loading the SVGs immediately the first time the website loads.
    so this useEffect is meant to run once when the website gets mounted for the first time
    then wait a less than a second for the SVGs objects to load before changing their colors to
    the appropriate theme.
    it is a fallback to ensure that the first time the website
    is loaded the right theme is loaded with it instead of defaulting to a specific theme
    */
    let storedThemeCode = localStorage.getItem("theme")
    let storedTheme
    if(storedThemeCode != undefined){
      Object.entries(THEMES).forEach((item,key)=>{
        if(item[1].code == storedThemeCode){
          toggleTheme(item[1]) 
          storedTheme = item[1]
        }
      })
    }
    
    setTimeout(()=>{reColorSVGs(storedTheme)},500)
  },[])

    function rerenderApp(newTheme){
      toggleTheme(newTheme)
      reColorSVGs(newTheme)
    }

    return (
      <ThemeContext.Provider value={theme}>
        <div className={`App flex flex-row ${theme.colors.mainBg + theme.colors.mainText} `} >
              
              <NavBarInfoLeft/>
              <div id="main" className={`flex-grow-[20] flex-shrink-[7] self-start  rounded-2xl relative`} style={{'transition': '0.5s'}}>
                <Welcome/>
                <Education/>
                <Experiences/>
                <PricePlans/>
                <ContactUs/>
              </div>
              <NavBarInfoRight rerender={rerenderApp}/>
        
        </div>
      </ThemeContext.Provider>
    );
}

export default App;
