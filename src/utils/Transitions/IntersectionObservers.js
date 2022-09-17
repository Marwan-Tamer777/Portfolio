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
            entry.target.classList.add("FadeInLTR")
        }
        // else{
        //     entry.target.classList.remove("FadeInLTR")
        // }
    })
}

export {NavSkillsListProgressBarObserver,PriceCardsObserver};