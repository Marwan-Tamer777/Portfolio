import React, { useContext,useEffect } from 'react';
import { ThemeContext } from '../../utils/Context/ThemeContext';

/*
    An interface to make card items for both education, work history and more in the future.
    expected prop is an object with the details of the card.

    all keys are accepted as string.
    if a main/sec URL is provided then the main title will be turned into a link to that url
    the optionalTitle would be displayed if no value was provided.
    {
        mainTitle:"",
        mainURL:"",
        secTitle:"",
        secURL:"",
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
                {props.mainURL != undefined ? (
                    <a href={props.mainURL} target="_blank">
                        <p className={`${colors.linkText} scale-up hover:underline text-lg font-extrabold m-3`}>{props.mainTitle}</p>
                    </a>
                ):(
                    <p className={`${colors.mainText} text-lg font-extrabold m-3`}>{props.mainTitle}</p>
                )}
               <div>
                    <span className={`${colors.mainText} text-sm font-semibold mx-2`}>
                       {props.optionalTitle != undefined ?(props.optionalTitle) : (null)}
                    </span>
                    <span className={`${colors.secBg + colors.secHeaderText} p-1 mx-2 text-xs inline-block`}>
                        {props.highLighted}
                    </span>
               </div>
           </div>

           <div className={`basis-[70%] m-3`}>
           {props.secURL != undefined ? (
                    <a href={props.secURL} target="_blank">
                        <p className={`${colors.linkText} scale-up hover:underline text-lg font-extrabold`}>{props.secTitle}</p>
                    </a>
                ):(
                    <p className={`${colors.mainText} text-lg font-extrabold`}>{props.secTitle}</p>
            )}
               <span className={`${colors.secText} text-sm`}>
                       {props.description}
                </span>
           </div>
        </div>
    )
}

export default ListCardItem;