import React, { useContext,useEffect} from 'react';
import {NavSkillsListProgressBarObserver} from "../../utils/Transitions/IntersectionObservers"
import { ThemeContext } from '../../utils/Context/ThemeContext';

/*
props got 2 variants
{ 
    title:"history",
    items:[
        {title:"skill",value:80}
    ]
}

or

{
    title: "history",
    type: (put anything except 'null' value here),
    items['string1','string2']
}
*/
function NavSkillsList(props){

    const {theme,code,colors} = useContext(ThemeContext)

    useEffect(()=>{
        let observer = new IntersectionObserver(NavSkillsListProgressBarObserver);
        let progressBars = document.getElementsByClassName("LeftNavProgressBar")
        
        Array.from(progressBars).forEach((elem)=>(
            observer.observe(elem)
        ))
    })
    return(
        <div className={`w-full py-4 border-b-2`}>
            <p className='mx-auto w-fit'>{props.list.title}</p>
            
            {props.list.items.map((item,key) => {
                return(
                    <div key={key}>
                        
                        {props.list.type==null ?
                            (
                            <>
                            <div className="flex flex-row justify-between py-1">
                                <p className={colors.secHeaderText}>{item.title}</p>
                                <p className={colors.secHeaderText}>{item.value +'%'}</p>
                            </div>
                            <div className={` rounded-3xl p-[1px] ${colors.progressBarBorder} border-[0.5px]`}>
                                <div className={`LeftNavProgressBar h-[3px] ${colors.progressBarBg} rounded-3xl`} style={{width: item.value+'%'}}></div>
                            </div>
                            </>) 
                            :
                            (<p className={`${colors.secHeaderText} text-sm my-1`}>{item}</p>)
                        }
                        
                    </div>
                )
            })}
            
        </div>
    )
}

export default NavSkillsList;