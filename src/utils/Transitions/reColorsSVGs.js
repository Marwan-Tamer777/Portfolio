function reColorSVGs(storedTheme){
    /* 
      very.. convoluted code due to the SVG and objects tags interactions with the query selector.
      needs modification.
      currently the nav drawer and close svg maybe hidden so their content document might be null which will crash the site.
      rest of code is for assigning the right theme for each svg type
    */
    let SVGs =document.querySelectorAll("object")
    let path
    let doc
    SVGs.forEach((svgDoc)=>(
        doc = svgDoc.contentDocument,
        path =  doc === null ?(null) : (doc.querySelector("#svgNavClose path")),
        path === null ? (0):(path.setAttribute('fill',storedTheme.colors.iconColor)),
        path =  doc === null ?(null) : (doc.querySelectorAll("#svgNavDrawer rect")),
        path === null ? (0):(path.forEach((rec)=>((rec.setAttribute('fill',storedTheme.colors.iconColor))))),
        path = doc === null ?(null) : (doc.querySelector("svg[toggle=true] path")),
        path === null ? (0):(path.setAttribute('fill',storedTheme.colors.iconColor)),
        path = doc === null ?(null) : (doc.querySelector("svg[toggle=true] circle")),
        path === null ? (0):(path.setAttribute('stroke',storedTheme.colors.particleCir)),
        path = doc === null ?(null) : (doc.querySelector("svg[toggle=true] rect")),
        path === null ? (0):(path.setAttribute('stroke',storedTheme.colors.particleRec)),
        path = doc === null ?(null) : (doc.querySelector("svg.tick-right path")),
        path === null ? (0):(path.setAttribute('fill',storedTheme.colors.tickRight)),
        path = doc === null ?(null) : (doc.querySelector("svg.tick-wrong path")),
        path === null ? (0):(path.setAttribute('fill',storedTheme.colors.tickWrong))
      
    ))
  }

export default reColorSVGs