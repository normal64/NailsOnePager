//open more nail samples
const extendShowCaseBtn = document.getElementById("extendShowCaseBtn");
extendShowCaseBtn.addEventListener("click", theExtend);
function theExtend(){
  
    let images = document.getElementsByClassName("bWrapper")[0].getElementsByTagName("img");
    console.log(images);
    let imagesArr = [...images]
    imagesArr.map(elem =>  elem.classList.remove("hidden"))
    console.log(images);

}   
