const player = {
    name : "test",
    age : 15,
    flag : true,
    sayHello : function(){
        console.log("hi!");
    }, 
    introduce : function(myName){
        console.log( ` 내 이름은 ${myName} 이야 ` );
    } 
}

//함수 호출 
player.sayHello(); 
player.introduce("yuna"); 

console.log(`${player.name} ${player.age} ${player.flag}`);
//값을 바꿔볼까? 
player.flag = false

console.log(`${player.name} ${player.age} ${player.flag}`);
//const 인데 값이 바뀜!! 왜?? constent 안에 있는 속성이 변하는 건 상관없다. player = false 로 바뀌면 문제!

//property 추가 
player.score = 4

//값 변경 
player.score += 10 

function func(name, age){
    console.log(`내 이름은 ${name}이고 나이는 ${age}살이야`); 
}

console.log(func("jun", 14));
console.log(func("ariana", 24));

//배열 
const arr = ["photo", "bread", "choco"]
arr[0] = "goguma"
console.log(arr);

//제곱 
console.log(2**10);

const calculator = {
    add : function(a, b){
        console.log(a + b ); 
    }
}

console.log(calculator.add(10,20))

function cal(a,b ){
    return a+ b; 
}

const result = cal(2,3); 
console.log(result);

/* 계산기 만들기 (+, -. /, %) */ 
const calculate = {
    plus : function(a, b){
        return a + b 
    },
    minus : function(a,b) {
        return a - b ; 
    },
    divide : function(a,b){
        return a / b; 
    },
    multi : function(a,b){
        return a*b; 
    },
    pow : function(a,b){
        return a**b; 
    }    
} 

/* 실행결과 */
const plus = calculate.plus(1,2); 
console.log(plus);
console.log(calculate.minus(1, 2));
console.log(calculate.divide(1, 2));
console.log(calculate.multi(1, 2));
console.log(calculate.pow(1, 2));

/* 사용자에게 입력받기 */
const opt = prompt("나이를 입력하세요."); 

/* int => string / string => int */
parseInt("5"); 
console.log(typeof " " + 5); 


/* isNaN 체크 */ 
function isCheck(age){
    if(!isNaN(age) && age > 10 ){
        console.log('10 세 이상임');
    } else if(!isNaN(age) && age > 14) {
        console.log('14이상임');
    } else {
        console.log('isNan 맞음');
    }
}

const user = parseInt(prompt('수를 입력하시오'))
isCheck(user); 

 //Object 의 porperty 값 변경 
 const textstyle = document.querySelector("div.title h1"); 
 console.dir(textstyle);


/* 이벤트 리스너 : on* 
    사용 시에는 on 빼고 * 만 작성해야 한다. 
*/
 const eventTest = document.querySelector("div.event h2");  
 console.dir(eventTest);      

 
 function handler (){
    console.log("클릭한거임.");
    textstyle.style.color ="blue"
 }

 eventTest.addEventListener("click", handler) //함수를 바로 실행시키지 않는 것이 중요하다. 괄호를 넣지 않는 것이 중요. js 에 function 만 넘겨주고 대신 실행시키게 해준다. 

 /* mouse */ 
const mouse = document.querySelector("div.mouse h3"); 

// mouse.addEventListener("mouseenter", mouseEvent); 
// mouse.addEventListener("mouseleave", mouseEvent02); 

function mouseEvent(){
    console.log("마우스를 냅다 올림");
}

function mouseEvent02(){
    console.log("마우스를 냅다 내림");
}

/* 이벤트 발생 방법 2가지 */
// mouse.addEventListener("mouseenter", mouseEvent);  //이 방법을 더 선호하는 이유? => .removeEventListener 적용 가능 
mouse.onmouseenter = mouseEvent; 

/* Window Event */ 
window.addEventListener("resize", handlerResize); 
window.addEventListener("copy", copyBlocked); 
window.addEventListener("offline", handleWindowOffline); 
window.addEventListener("online", handleWindowOnline); 

function handleWindowOffline(){
    alert("no wifi"); //와이파이가 꺼져있을 때 
}
function handleWindowOnline(){
    alert("connect wifi"); //와이파이 켜질 때 
}

function handlerResize(){
    document.body.style.backgroundColor = "blue"
}


function copyBlocked(){
    alert("copy noooppp!") 
}
