import React, { useContext,useEffect } from 'react';
import { ThemeContext } from '../../utils/Context/ThemeContext';

/*
    An interface to make card items for both education, work history and more in the future.
    expected prop is an object with the details of the card.

    all keys are accepted as string.
    the optionalTitle would be disaplyed if no value was provided
    {
        mainTitle:"",
        secTitle:"",
        optionalTitle:"",
        highLighted:"",
        description:"",
    }
*/

function ListCardItem(props){
    
    const {theme,code,colors} = useContext(ThemeContext)

    return(
        <div className={`my-4 flex flex-row`}>

           <div className={`basis-[30%] flex flex-col`}>
               <p className={`${colors.mainText} text-lg font-extrabold m-3`}>{props.mainTitle}</p>
               <div>
                    <span className={`${colors.mainText} font-bold mx-2`}>
                       {props.optionalTitle != undefined ?(props.optionalTitle) : (null)}
                    </span>
                    <span className={`${colors.secBg + colors.secHeaderText} p-1 mx-2 text-xs`}>
                        {props.highLighted}
                    </span>
               </div>
           </div>

           <div className={`basis-[70%] m-3`}>
               <p className={`${colors.mainText} text-lg font-extrabold`}>{props.secTitle}</p>
               <span className={`${colors.secText} text-sm`}>
                       {props.description}
                </span>
           </div>
        </div>
    )
}

export default ListCardItem;