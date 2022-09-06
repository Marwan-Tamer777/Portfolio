import React, { useContext } from 'react';
import ListCardItem from '../Utils/ListCardItem';
import { ThemeContext } from '../../utils/Context/ThemeContext';
let educationListItems = [
    {
        mainTitle: "Cairo University",
        secTitle: "Bachelor of computer science and artificial intelligence",
        highLighted: "Jan 2020 - Jun 2024",
        description: `A undergraduate in Computer Science from Cairo University, majoring in Information Systems with
        3.7 GPA`
    },
    {
        mainTitle: "Udacity Nanodegree",
        secTitle: "Front End Web Development professional",
        highLighted: "Mar 2021 - Apr 2021",
        description: `This nanodegree consisted of courses on JS, ES6, APIs, node.js and express servers,
        all submitted projects can be viewed on my Github`
    },
    {
        mainTitle: "Udacity Nanodegree",
        secTitle: "Front End Web Development Advanced",
        highLighted: "Apr 2021 - Jun 2021",
        description: `This nanodegree consisted of courses on React.js, React Router and Redux.js,
        all submitted projects can be viewed on my Github`
    },
    {
        mainTitle: "MongoDB University",
        secTitle: "MS220: MongoDB for JavaScript Developers",
        highLighted: "Jul 2021 - Sep 2021",
        description: `This Course focused on using MongoDB as a database for a full stack online-streaming mock website and
        completing it's BackEnd functionality and APIs`
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
                This part is about my current and past education! From college degrees to online degrees all related to Web Development            
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