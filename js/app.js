'use strict';
let score=0;
let userN =prompt('what is your name ?')
alert('welcome 🥰'+userN)
alert('please answer me yess or no ')
let education = prompt('Are you educative ?').toLowerCase()
if (!(education === 'yes'||education ==='no'||education ==='y'||education ==='n')){
    alert('please answer me yes or no 🥺 ')
    education= prompt('Are you educative ?')
}
score++;

console.log(education)

let sport = prompt('Are you sporting  ?').toLowerCase()
if (!(sport === 'yes'||sport ==='no'||sport ==='y'||sport ==='n')){
    alert('please answer me yes or no 🥺')
    sport = prompt('Are you sporting  ?')
    console.log('sport')
}

score++;

let smoke =prompt ('Are you smoking ?').toLowerCase()
if (!(smoke === 'yes'||smoke ==='no'||smoke ==='y'||smoke ==='n')){
    alert('please answer me yes or no 🥺 ')
    smoke =prompt ('Are you smoking ?')

}
score++;
let health = prompt('Do you suffer from health problems ?').toLowerCase()
console.log('health')
if (!(health === 'yes'||health ==='no'||health ==='y'||health ==='n')){
    alert('please answer me yes or no 🥺 ')
    health = prompt('Do you suffer from health problems ?')

}
score++;

let food = prompt('Do you eat helthy food ?').toLowerCase()
if (!(food === 'yes'||food ==='no'||food ==='y'||food ==='n')){
    alert('please answer me yes or no 🥺 ')
    food = prompt('Do you eat helthy food ?')

}
score++;
alert('you made grate job '+ userN +'❤️')





for(let i=1 ; i<=4; i++) {
    let animale = prompt('How much I like animal from (1 to 10) ?' )
     animale=Number(animale);
    if (animale===6){  
        alert('awseom')
        score++
        break
        
    }else if(animale<6){
        alert('tow high')
     
    }else if (6<animale){
        alert('tow low')
 
    }
    console.log(i)
}

alert('let you see what I like')

let statment ='❤️';

let arr=['I like sport ',' ,I dont like animal ',' ,I eat healthy food ', ', I hate smoking']
for (let i=0;i<arr.length;i++){
    
  statment =statment+ arr[i]
  console.log(statment)
}
alert(statment)



let arrOfColor=['green','pink','black','white']

let color =prompt( "what is the favorite color ?")
let count=0
for(let attempts=0;attempts<5;attempts++){
    for(let i=0;i<arrOfColor.length;i++){
            // console.log('color:',color)
            // console.log(color === arrOfColor[i],'array')
            if(color ===arrOfColor[i]){
                console.log('after if:',color)
                console.log(arrOfColor[i])
                alert('good job you know one of my favourite color ')
                count++
                break;
            }
            console.log(i)
        }
    if(count===1){
        break;
    }else{
        // alert('please try again')
        color =prompt( "what is the favorite color ?")
    }
      
console.log('attempts',attempts)
} 
console.log('score',count)

let col='';
 for(let i=0;i<arrOfColor.length;i++){
   col = col +arrOfColor[i]+' '

 }
 
 alert('my favorite color is : '+ col)
 score= score+count
 console.log(score)
 alert('your  score is:',score)


// make some of dome 

if (sport=== 'yes'||sport==='y'){
    sport=1;
    console.log(sport)
}else{
    sport=0
    console.log(sport)

}
if (food=== 'yes'||food==='y'){
    food=1;
    console.log(food)
}else{
    food=0
    console.log(food)

}
if (smoke === 'yes'||smoke ==='y'){
    smoke=0;
    console.log(smoke)
}else{
    smoke=1
    console.log(smoke)

}
let count = smoke + food +sport 
console.log(count);

function user(){
if (count<2){
    document.getElementById("unhealthy").style.display='block' 
    console.log(count);
}else{
    document.getElementById("healthy").style.display='block' 
console.log(count)
}

}
user();

function aboutUser(){
    if (count<2){
    
    document.getElementById("userBad").innerHTML="welcome " +userN +' Based on your answers, we noticed that you do not care for your health well. Please leave bad habits';
    console.log(count);
}else{
     
    document.getElementById("userGood").innerHTML= "welcome " +userN +' Based on your answers, we noticed that you care for your health very  well. Please  keep doing that';
console.log(count)
}

}
aboutUser();





