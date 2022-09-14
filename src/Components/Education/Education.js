import React, { useContext } from 'react';
import ListCardItem from '../Utils/ListCardItem';
import { ThemeContext } from '../../utils/Context/ThemeContext';
let educationListItems = [
    {
        mainTitle: "Cairo University",
        mainURL:"http://fci.cu.edu.eg/",
        secTitle: "Bachelor of computer science and artificial intelligence",
        highLighted: "Jan 2020 - Jun 2024",
        optionalTitle:"undergraduate student",
        description: `A undergraduate in Computer Science from Cairo University, majoring in Information Systems with
        3.7 GPA`
    },
    {
        mainTitle: "Udacity Nanodegree",
        mainURL:"https://www.udacity.com/",
        secTitle: "Front End Web Development professional",
        secURL:"https://confirm.udacity.com/JLREMMTK",
        highLighted: "Mar 2021 - Apr 2021",
        description: `This nanodegree consisted of courses on JS, ES6, APIs, node.js and express servers,
        all submitted projects can be viewed on my Github`
    },
    {
        mainTitle: "Udacity Nanodegree",
        mainURL:"https://www.udacity.com/",
        secTitle: "Front End Web Development Advanced",
        secURL:"https:/confirm.udacity.com/6PSG2HKK",
        highLighted: "Apr 2021 - Jun 2021",
        description: `This nanodegree consisted of courses on React.js, React Router and Redux.js,
        all submitted projects can be viewed on my Github`
    },
    {
        mainTitle: "MongoDB University",
        mainURL:"https://university.mongodb.com/",
        secTitle: "MS220: MongoDB for JavaScript Developers",
        secURL:"https://university.mongodb.com/course_completion/24b7fa77-ec60-4c80-8607-8aa9216c5939?utm_source=copy&utm_medium=social&utm_campaign=university_social_sharing",
        highLighted: "Jul 2021 - Sep 2021",
        description: `This Course focused on using MongoDB as a database for a full stack online-streaming mock website and
        completing it's BackEnd functionality and APIs`
    }
]
function Education(){

    const {theme,code,colors} = useContext(ThemeContext)

    return(
        <div id="Education" className={`p-5 my-5`}>
            <h2 className={`${colors.mainText}text-center my-2 text-3xl font-extrabold`}>
                Education & Certifications
            </h2>
            <p className={`${colors.aviText} lg:w-1/2 lg:mx-auto text-center my-4`}>
                This part is about my current and past education! From college degrees to online degrees all related to Web Development            
            </p>
            <div className={`flex flex-col ${colors.cardBg} p-5 rounded-t-3xl`}>
                {educationListItems.map((item,index)=>(
                    <ListCardItem {...item} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default Education;