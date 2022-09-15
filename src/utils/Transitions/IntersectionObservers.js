function NavSkillsListProgressBarObserver(entries,observer){
    entries.forEach((entry)=>{
        console.log("Observe: ",entry)
        if(entry.isIntersecting){
            entry.target.classList.add("animate-fill-progress")
        }
    })
}

export {NavSkillsListProgressBarObserver};