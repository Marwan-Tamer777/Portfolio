import React, { useContext } from 'react';
import ListCardItem from '../Utils/ListCardItem';
import { ThemeContext } from '../../utils/Context/ThemeContext';

let educationListItems = [
    {
        mainTitle: "Cairo University",
        secTitle: "Bachelor of computer science and artifical intellgence",
        highLighted: "Jan 2020 - Jan 2024",
        description: `Amet minim mollit non deserunt ullamco est sit              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum 
        aliqua dolor do amet sint. Velit officia consequat dui`
    },
    {
        mainTitle: "Cairo University",
        secTitle: "Bachelor of computer science and artifical intellgence",
        optionalTitle: "sutdent",
        highLighted: "Jan 2020 - Jan 2024",
        description: `Amet minim mollit non deserunt ullamco est sit              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum 
        aliqua dolor do amet sint. Velit officia consequat dui`
    },
    {
        mainTitle: "Cairo University",
        secTitle: "Bachelor of computer science and artifical intellgence",
        optionalTitle: "sutdent",
        highLighted: "Jan 2020 - Jan 2024",
        description: `Amet minim mollit non deserunt ullamco est sit              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum 
        aliqua dolor do amet sint. Velit officia consequat dui`
    }
]
function PricePlans(){

    const {theme,code,colors} = useContext(ThemeContext)

    return(
        <div className={`p-5 my-5`}>
            <h2 className={`w-fit ${colors.mainText} mx-auto my-2 text-3xl font-extrabold`}>
                Education
            </h2>
            <p className={` w-1/3 ${colors.aviText} mx-auto my-4`}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum 
            </p>
            <div className={`flex flex-col ${colors.cardBg} p-5 rounded-2xl`}>
                {educationListItems.map((item,index)=>(
                    <ListCardItem {...item} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default PricePlans;