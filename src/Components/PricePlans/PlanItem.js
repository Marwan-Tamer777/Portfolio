import React, { useContext } from 'react';
import includedIcon from '../../Images/tick-right.svg'
import notIncludedIcon from '../../Images/tick-wrong.svg'
import { ThemeContext } from '../../utils/Context/ThemeContext';

function PlanItem(props){

    const {theme,code,colors} = useContext(ThemeContext)

    return(
        <div className={`my-2`}>
            <object data={props.included == 1? includedIcon: notIncludedIcon} className={` inline mx-2`}/>
            <span className={`${props.included == 1 ? colors.mainText : colors.secText} text-md`}>{props.text}</span>
        </div>
    )
}

export default PlanItem;