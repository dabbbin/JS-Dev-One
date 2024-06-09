//handleTitleClick 

const text = document.querySelector("div.text h1"); 
console.log(text); 

text.addEventListener("click", handleTextColor)

// function handleTextColor(){
//     const currentColor= text.style.color; //const 는 불변의 값.  update 시 let 필요 ! 
//     let newColor;
//     if(currentColor === "blue"){
//         newColor="black"
//     } else {
//         newColor="blue"
//     }
//     text.style.color=newColor;
// }
// -> js 로 css 변경하는 것은 비추천 

/*
function handleTextColor(){
    const cn = "active"; 
    if(text.classList.contains(cn)){ //classList.contains : 실무에서 많이 사용한다! 
        text.classList.remove(cn) //css 에서 전달해주고 있다! 
    } else {
        text.classList.add(cn)
    }
}
*/ // ==> toggle 이 한번에 해결 가능! 

function handleTextColor(){
    const cn = "active"; 
        text.classList.toggle(cn) //toggle : text 에 cn이 있다면 제거, 없다면 생성 
}
