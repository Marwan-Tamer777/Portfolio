function NavSkillsListProgressBarObserver(entries,observer){
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("animate-fillProgress")
        }
    })
}

function PriceCardsObserver(entries,observer){
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("animate-slideInLeft")
        }
        // else{
        //     entry.target.classList.remove("animate-slideInLeft")
        // }
    })
}

export {NavSkillsListProgressBarObserver,PriceCardsObserver};