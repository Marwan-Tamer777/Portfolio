import React, { useContext } from 'react';
import ListCardItem from '../Utils/ListCardItem';
import { ThemeContext } from '../../utils/Context/ThemeContext';
let educationListItems = [
    {
        mainTitle: "EgyptAir",
        mainURL:"https://www.egyptair.com",
        secTitle: "Web Development Summer Training",
        highLighted: "Apr 2021 - May 2021",
        optionalTitle:"Trainee",
        description: `This training consisted of on-site bi-weekly work days for a month to the Information Sector
        under 3 Software engineers focused on Information System development, specifically FullStack Web Development
        using ASP.NET framework and SQL as the database. `
    },
    {
        mainTitle: "Banque Misr",
        mainURL:"https://www.banquemisr.com/",
        secTitle: "IT & IS Summer Training",
        optionalTitle:"Trainee",
        highLighted: "Jun 2022 - July 2022",
        description: `This training lasted for one month of office work hours where I got the chance to explore
        all the different departments and systems that connect and communicate with each other to create the bank system.
        It touched on both technical, business and work frameworks (Agile/Scrum framework) and other aspects of how a bank operates and how large projects and systems are build.
        `
    },
    {
        mainTitle: "IEEE CUSB",
        mainURL:"https://ieeecusb.org/",
        secTitle: "Front End Committee Member (Instructor)",
        optionalTitle:"Volunteer",
        highLighted: "Oct 2021 - August 2022",
        description: `IEEE Cairo University Student Branch is a student activity group focusing on educating others
        on engineering and tech related topics commonly in the form of free offline/online WorkShops.
        during season 2022 I was on of the 3 FrontEnd instructors in the computer committee and my work consisted
        of writing, preparing and giving out workshops sessions on JS, APIs, and React.js and working with colleagues to help prepare the other
        sessions about HTML,CSS, and Socket.IO`
    }
]
function Experiences(){

    const {theme,code,colors} = useContext(ThemeContext)

    return(
        <div id="Experiences" className={`p-5 my-5`}>
            <h2 className={`${colors.mainText} text-center my-2 text-3xl font-extrabold`}>
                Past Training & Experience
            </h2>
            <p className={`${colors.aviText} lg:w-1/2 lg:mx-auto text-center my-4`}>
                This part is about my current and past education! From college degrees to online degrees all related to Web Development            
            </p>
            <div className={`flex flex-col ${colors.cardBg} p-5 rounded-b-3xl`}>
                {educationListItems.map((item,index)=>(
                    <ListCardItem {...item} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default Experiences;