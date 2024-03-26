const slides=document.querySelectorAll("#slides");

slides.forEach((slide,index)=>{
    slide.style.left=`${index*100}%`;
})

let counter=0;
const slideImage=()=>{
    slides.forEach((slide)=>{
        slide.style.transform=`translateX(-${counter*100}%)`
    })
}

const goright=()=>{
    counter++;
    if(counter>3){
        counter=3;
    }
    slideImage();
}
const goleft=()=>{
    counter--;
    if(counter<0){
        counter=0;
    }
    slideImage();
}

// setInterval(() => {
//     gonext();
// }, 3000);
