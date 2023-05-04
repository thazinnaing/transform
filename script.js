const transformDivTag=document.querySelector(".transform");
const transformButtonTag=document.querySelector(".transformbutton")

transformButtonTag.addEventListener("click", ()=>{
    transformDivTag.classList.add("startTransform")
})
