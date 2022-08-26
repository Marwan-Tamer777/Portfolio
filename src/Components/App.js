import {Component,useEffect,useState} from 'react'
import NavBarInfoLeft from './NavBarInfoLeft';
import NavBarInfoRight from './NavBarRight';
import Welcome from './Welcome';
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
        path == null ? (0):(path.setAttribute('stroke',theme.colors.particleRec))
    ))
  })

  function rerenderApp(newTheme){
    toggleTheme(newTheme)
  }

    return (
      <ThemeContext.Provider value={theme}>
        <div className={`App flex flex-row ${theme.colors.mainBg + theme.colors.mainText} `} >
              <NavBarInfoLeft/>
              <div className={`flex-grow-[15] self-start basis-0 ${theme.colors.secBg} rounded-2xl`}>
                <Welcome/>
              </div>
              <NavBarInfoRight rerender={rerenderApp}/>
        </div>
      </ThemeContext.Provider>
    );
}

export default App;
