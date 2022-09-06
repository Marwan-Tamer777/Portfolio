import {useEffect,useState} from 'react'
import NavBarInfoLeft from './Navs/NavBarInfoLeft';
import NavBarInfoRight from './Navs/NavBarRight';
import Welcome from './Welcome';
import PricePlans from './PricePlans/PricePlans';
import Education from './Education/Education';
import Experiences from './Experiences/Experiences';
import { ThemeContext,THEMES } from '../utils/Context/ThemeContext';

function App(){
  let [theme,toggleTheme] = useState(THEMES.light);

  useEffect(()=>{
    /* for some reason the object tags don't load the svg immediately the first time the website loads.
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

  useEffect(()=>{
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
      reColorSVGs(storedTheme)
    })

    function reColorSVGs(storedTheme){
      let SVGs =document.querySelectorAll("object")
      let path
      SVGs.forEach((svgDoc)=>(         
          path = svgDoc.contentDocument.querySelector("svg[toggle=true] path") ,
          path == null ? (0):(path.setAttribute('fill',storedTheme.colors.iconColor)),
          path = svgDoc.contentDocument.querySelector("svg[toggle=true] circle") ,
          path == null ? (0):(path.setAttribute('stroke',storedTheme.colors.particleCir)),
          path = svgDoc.contentDocument.querySelector("svg[toggle=true] rect") ,
          path == null ? (0):(path.setAttribute('stroke',storedTheme.colors.particleRec)),
          path = svgDoc.contentDocument.querySelector("svg.tick-right path") ,
          path == null ? (0):(path.setAttribute('fill',storedTheme.colors.tickRight)),
          path = svgDoc.contentDocument.querySelector("svg.tick-wrong path") ,
          path == null ? (0):(path.setAttribute('fill',storedTheme.colors.tickWrong))
      ))
    }

    function rerenderApp(newTheme){
      toggleTheme(newTheme)
    }

    return (
      <ThemeContext.Provider value={theme}>
        <div className={`App flex flex-row ${theme.colors.mainBg + theme.colors.mainText} `} >
              
              <NavBarInfoLeft/>
              <div className={`flex-grow-[15] self-start basis-0 rounded-2xl`}>
                <Welcome/>
                <PricePlans/>
                <Education/>
                <Experiences/>
              </div>
              <NavBarInfoRight rerender={rerenderApp}/>
        
        </div>
      </ThemeContext.Provider>
    );
}

export default App;
