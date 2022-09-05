import {Component,useEffect,useState} from 'react'
import NavBarInfoLeft from './Navs/NavBarInfoLeft';
import NavBarInfoRight from './Navs/NavBarRight';
import Welcome from './Welcome';
import PricePlans from './PricePlans/PricePlans';
import { ThemeContext,THEMES } from '../utils/Context/ThemeContext';

function App(){
  let [theme,toggleTheme] = useState(THEMES.light);
  
  useEffect(()=>{
    let SVGs =document.querySelectorAll("object")
    let path
    SVGs.forEach((svgDoc)=>(         
        path= svgDoc.contentDocument.querySelector("svg[toggle=true] path") ,
        path == null ? (0):(path.setAttribute('fill',theme.colors.iconColor)),
        path= svgDoc.contentDocument.querySelector("svg[toggle=true] circle") ,
        path == null ? (0):(path.setAttribute('stroke',theme.colors.particleCir)),
        path= svgDoc.contentDocument.querySelector("svg[toggle=true] rect") ,
        path == null ? (0):(path.setAttribute('stroke',theme.colors.particleRec)),
        path= svgDoc.contentDocument.querySelector("svg.tick-right path") ,
        path == null ? (0):(path.setAttribute('fill',theme.colors.tickRight)),
        path= svgDoc.contentDocument.querySelector("svg.tick-wrong path") ,
        path == null ? (0):(path.setAttribute('fill',theme.colors.tickWrong))
    ))
  })

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
              </div>
              <NavBarInfoRight rerender={rerenderApp}/>
        
        </div>
      </ThemeContext.Provider>
    );
}

export default App;
