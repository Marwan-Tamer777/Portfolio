import React, { useContext } from 'react';
import includedIcon from '../../Images/tick-right.svg'
import notIncludedIcon from '../../Images/tick-wrong.svg'
import PlanItem from './PlanItem';
import { ThemeContext } from '../../utils/Context/ThemeContext';

function PricePlans(){

    const {theme,code,colors} = useContext(ThemeContext)

    return(
        <div className={`p-5 my-5`}>
            <h2 className={`w-fit ${colors.mainText} mx-auto my-2 text-3xl font-extrabold`}>
                Price Plans & Services
            </h2>
            <p className={` w-1/3 ${colors.secText} mx-auto my-4`}>
                This is the standard pricing and services, any extra or special requests can be
                negoitaited!  
            </p>

            <div className={`flex flex-row justify-between`}>

                <div className={`${colors.cardBg} rounded-l-3xl shadow-2xl p-3 w-[31%]
                 flex flex-col justify-center items-center`}>
                    <p className={`${colors.mainText} text-xl font-extrabold my-4`}>Silver</p>
                    <p className={`${colors.mainText} text-2xl my-2`}>$15.00 <span className={` text-xs`}>/hour</span></p>
                    <p className={`${colors.secText} text-sm text-center my-2`}>
                        Your best option if you are an online artist and your website is just a static portoflio to
                        show your work and leave your contacts!
                    </p>
                    <div className={`flex flex-col w-full`}>
                        <PlanItem included={1} text={"Vanilla Static Website "} />
                        <PlanItem included={1} text={"Vanilla JS, CSS"} />
                        <PlanItem included={1} text={"FrontEnd Only"} />
                        <PlanItem included={0} text={"React.js"} />
                        <PlanItem included={0} text={"TailWind CSS"} />
                        <PlanItem included={0} text={"BackEnd"} />
                        <PlanItem included={0} text={"Node.js"} />
                        <PlanItem included={0} text={"Express server"} />
                        <PlanItem included={0} text={"DataBase"} />
                    </div>
                    {/* <p className={`${colors.mainText + colors.cardBg} rounded-full shadow-2xl text-sm font-bold py-3 px-10 my-2 scale-up`}>
                        ORDER NOW</p> */}
                </div>

                <div className={`${colors.cardBg  + colors.beforeSecBG} shadow-2xl p-3 w-[31%] relative
                 flex flex-col justify-center items-center before:content-['Most_popular'] before:w-full before:text-center before:absolute before:top-0`}>
                    
                    <p className={`${colors.mainText} text-xl font-extrabold my-4`}>Gold</p>
                    <p className={`${colors.mainText} text-2xl my-2`}>$30.00 <span className={` text-xs`}>/hour</span></p>
                    <p className={`${colors.secText} text-sm text-center my-2`}>This is your best option
                    if you are an up and coming business looking for more than a template online shop and 
                    already have a databse and backend established!
                    </p>
                    <div className={`flex flex-col w-full`}>
                        <PlanItem included={1} text={"Dynamic Website"} />
                        <PlanItem included={1} text={"FrontEnd Only"} />
                        <PlanItem included={1} text={"Using given APIs"} />
                        <PlanItem included={1} text={"React.js"} />
                        <PlanItem included={1} text={"TailWind CSS"} />
                        <PlanItem included={0} text={"BackEnd"} />
                        <PlanItem included={0} text={"Node.js"} />
                        <PlanItem included={0} text={"REST API"} />
                        <PlanItem included={0} text={"dataBase"} />
                    </div>
                    {/* <p className={`${colors.mainText + colors.cardBg} rounded-full shadow-2xl text-sm font-bold py-3 px-10 my-2 scale-up`}>
                        ORDER NOW</p> */}
                </div>

                <div className={`${colors.cardBg} rounded-r-3xl shadow-2xl p-3 w-[31%]
                 flex flex-col justify-center items-center`}>
                    <p className={`${colors.mainText} text-xl font-extrabold my-4`}>Diamond</p>
                    <p className={`${colors.mainText} text-2xl my-2`}>$80.00 <span className={` text-xs`}>/hour</span></p>
                    <p className={`${colors.secText} text-sm text-center my-2`}>
                        This plan is for businesses who are looking to build their whole information system
                        and website to kick-start online presence!
                    </p>
                    <div className={`flex flex-col w-full`}>
                        <PlanItem included={1} text={"Dynamic Website"} />
                        <PlanItem included={1} text={"FullStack Website"} />
                        <PlanItem included={1} text={"Using Provided APIs"} />
                        <PlanItem included={1} text={"React.js"} />
                        <PlanItem included={1} text={"TailWind CSS"} />
                        <PlanItem included={1} text={"BackEnd"} />
                        <PlanItem included={1} text={"Node.js"} />
                        <PlanItem included={1} text={"REST API"} />
                        <PlanItem included={1} text={"SQL database/MongoDB"} />
                    </div>
                    {/* <p className={`${colors.mainText + colors.cardBg} rounded-full shadow-2xl text-sm font-bold py-3 px-10 my-2 scale-up`}>
                        ORDER NOW</p> */}
                </div>

            </div>
        </div>
    )
}

export default PricePlans;