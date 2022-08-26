import { createContext } from "react";


export const THEMES = {
    light:{
        theme:"light",
        code:0,
        colors:{
            'mainBg': ' bg-wheat ',
            'secBg': ' bg-wintergreen ',
            'secBgHover': ' hover:bg-darkwheat ',
            'progressBarBg':'bg-darkwheat',
            'progressBarBorder': 'border-darkwheat',
            'mainText': ' text-black ',
            'secText': 'text-wheat',
            'mainHeadText': ' text-wheat ',
            'aviText': ' text-green-500 ',
            'borderB': 'border-b-wheat',
            'iconColor':'#30362F',
            'particleRec':'#0047FF',
            'particleCir': '#05FF00',
        }    
    },
    dark:{
        theme:"dark",
        code:1,
        colors:{
            'mainBg': ' bg-dark ',
            'secBg': ' bg-seawhile-light ',
            'secBgHover': ' hover:bg-seawhile-medium ',
            'progressBarBg':'bg-seawhile-medium',
            'progressBarBorder': 'border-seawhile-medium',
            'mainText': ' text-white ',
            'secText': 'text-dark',
            'mainHeadText': ' text-seawhile-dark ',
            'aviText': ' text-dark ',
            'borderB': 'border-b-dark',
            'iconColor':'#FFFFFF',
            'particleRec':'#900C3F',
            'particleCir': '#FF5733',
        }    
    },
    // claymore:{
    //     theme:"claymore",
    //     code:2,
    //     colors:{
    //         'mainBg': ' bg-claymore-dark ',
    //         'secBg': ' bg-claymore-light ',
    //         'secBgHover': ' hover:bg-claymore-medium ',
    //         'progressBarBg':'bg-claymore-medium',
    //         'progressBarBorder': 'border-claymore-medium',
    //         'mainText': ' text-white ',
    //         'secText': 'text-dark',
    //         'mainHeadText': ' text-claymore-dark ',
    //         'aviText': ' text-dark ',
    //         'borderB': 'border-b-dark',
    //         'iconColor':'#A5C9CA'//E7F6F2,
    //     }    
    // }
}

export const ThemeContext = createContext(
    THEMES.light    
  );