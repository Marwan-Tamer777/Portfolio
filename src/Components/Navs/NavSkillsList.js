import React, { useContext } from 'react';
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

    return(
        <div className={`w-full py-4 border-b-2`}>
            <p className='mx-auto w-fit'>{props.list.title}</p>
            
            {props.list.items.map(item => {
                return(
                    <div>
                        
                        {props.list.type==null ?
                            (
                            <>
                            <div className="flex flex-row justify-between py-1">
                                <p className={colors.secHeaderText}>{item.title}</p>
                                <p className={colors.secHeaderText}>{item.value +'%'}</p>
                            </div>
                            <div className={`rounded-3xl p-[1px] ${colors.progressBarBorder} border-[0.5px]`}>
                                <div className={`h-[3px] ${colors.progressBarBg} rounded-3xl transition animate-fill-progress`} style={{width: item.value+'%'}}></div>
                            </div>
                            </>) 
                            :
                            (<p className={`${colors.secHeaderText} text-sm`}>{item}</p>)
                        }
                        
                    </div>
                )
            })}
            
        </div>
    )
}

export default NavSkillsList;