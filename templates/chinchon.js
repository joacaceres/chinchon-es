// Our body with nav and footer // ==> We have our Instructions sheet outside the body, expected to fix that soon.
const wholeApp = document.querySelector('.wholeapp')
const spanish = document.querySelector('.spanish')
const english = document.querySelector('.english')

// Home //
const home = document.querySelector('#OptionsHome');
const newGame = document.querySelector('#newGame') ;
const sendToInstructions = document.querySelector('#instructions') ;

// Instructions //
const closingInstructions = document.querySelector('.closing-instructions')

//Setting Options //
const inputName = document.querySelector('#player')
const playersDiv = document.querySelector('.players');
const playersUl =document.querySelector('#playersUl');
const selectOptions = document.querySelector('#selectOptions');
const del1 = document.querySelector('#delete-1') ;
const del2 = document.querySelector('#delete-2') ;
const del3 = document.querySelector('#delete-3') ;
const del4 = document.querySelector('#delete-4') ;
const addNewPlayer = document.querySelector('#addPlayer');
const to70 = document.querySelector('#to70') ;
const to100 = document.querySelector('#to100') ;
const start = document.querySelector('#start') ;

// Game //
const theGame = document.querySelector('#theGame');
const playingPlayerDiv = document.querySelectorAll('.playing-player');
const addButton = document.querySelectorAll('.add');
const restButton = document.querySelectorAll('.rest');
let p1 = document.querySelector('#p1') ;
let p1Add = document.querySelector('#add-p1') ;
let p1Rest = document.querySelector('#rest-p1') ;


let p2= document.querySelector('#p2') ;
let p2Add = document.querySelector('#add-p2') ;
let p2Rest = document.querySelector('#rest-p2') ;

let p3 = document.querySelector('#p3') ;
let p3Add = document.querySelector('#add-p3') ;
let p3Rest = document.querySelector('#rest-p3') ;

let p4 = document.querySelector('#p4') ;
let p4Add = document.querySelector('#add-p4') ;
let p4Rest = document.querySelector('#rest-p4') ;
const restart = document.querySelector('#Restart');
const goHome = document.querySelector('#go-home') ;


const openOptions = function() {
    document.getElementById('OptionsHome').classList.add('hide');
    document.getElementById('selectOptions').classList.remove('hide');
}
newGame.addEventListener('click', openOptions);

const openInstructions = function() {
    document.getElementById('wholeAppId').classList.add('hide');
    document.getElementById('OptionsHome').classList.add('hide');
    document.getElementById('instructions-id').classList.remove('hide');
}
sendToInstructions.addEventListener('click', openInstructions);

const buttonBackHome = () => {
    document.getElementById('instructions-id').classList.add('hide');
    document.getElementById('wholeAppId').classList.remove('hide');
    document.getElementById('OptionsHome').classList.remove('hide');
}
closingInstructions.addEventListener('click', buttonBackHome);

// Create a "close" button and append it to each list item
var playersLi = document.getElementsByTagName("UL .players LI");
var i;
for(i= 0; i < playersLi.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className= "close";
    span.appendChild(txt);
    playersLi[i].appendChild(span);
}


// Click on a close button to delete it.
var close= document.getElementsByClassName("close");
var i;
for(i=0; i< close.length; i++) {
    close[i].onclick = function() {
       var div = this.parentElement;
        div.parentElement.removeChild(div);
    
    }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById('player').value ; 
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === ''){
        alert("Agregar nombre del jugador")
    }
    else {
        document.getElementById("playersUl").appendChild(li);
    }
    document.getElementById('player').value = "";

    var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  li.classList.add('nombre-participante');

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.parentElement.removeChild(div);
      addNewPlayer.classList.remove('hide');
      inputName.classList.remove('hide');

    }
  }
}



const alertMax = () => {
    if (playersUl.childElementCount == 4) {
    addNewPlayer.classList.add('hide');
    inputName.classList.add('hide');
    
    }
}
addNewPlayer.addEventListener('click',alertMax);
 

let limit = 0;

to70.addEventListener('click',function(){
    limit = 70;
    this.style.border ='3px inset #eeece4' ;
    to100.style.border = 'none' ;
})

to100.addEventListener('click',function(){
    limit = 100;
    this.style.border ='3px inset #eeece4' ;
    to70.style.border = 'none' ;
})

start.addEventListener('click',startFc)
    function startFc(){
        if(playersUl.childElementCount < 2){
            return alert('Se necesitan al menos 2 jugadores.')
        }
        if (limit === 0) {
           return  alert('Por favor seleccione a cuantos puntos se jugará')
        }
        else{
            selectOptions.classList.add('hide');
            theGame.classList.remove('hide');
            return gameData();
        }
    }


    function gameData(){
        const scoresFather = document.getElementsByClassName('scoresFather')
        const allLis =  document.getElementsByClassName('nombre-participante'); 
        const p1Name = allLis[0].textContent.substring(0,allLis[0].textContent.length-1);
        const p2Name = allLis[1].textContent.substring(0,allLis[1].textContent.length-1);
        const Li3 = allLis[2];
        const Li4 = allLis[3];
        p1.textContent = p1Name ; 
        p2.textContent = p2Name; 


        if(Li4 !== undefined) {
            scoresFather[2].classList.remove('hide');
            scoresFather[3].classList.remove('hide');
            const p3Name = allLis[2].textContent.substring(0,allLis[2].textContent.length-1);
            p3.textContent = p3Name;
            const p4Name = allLis[3].textContent.substring(0,allLis[3].textContent.length-1);
            p4.textContent = p4Name;
        } else if (Li3 !== undefined) {
            const p3Name = allLis[2].textContent.substring(0,allLis[2].textContent.length-1);
            p3.textContent = p3Name;
            scoresFather[2].classList.remove('hide');
        }
    }

    //Add points and congrats the winner
 //p1
     p1Add.addEventListener('click', () => addFunction(`p1Score`, `newpointP1`))
      p1Rest.addEventListener('click', () => restFunction(`p1Score`, `newpointP1`))
      playingPlayerDiv[0].addEventListener('click', () =>changeColor(`p1Score`))  


    //P2
    p2Add.addEventListener('click', () => addFunction(`p2Score`, `newpointP2`))
    p2Rest.addEventListener('click', () => restFunction(`p2Score`, `newpointP2`))
    playingPlayerDiv[1].addEventListener('click',() => changeColor(`p2Score`))  

//p3
p3Add.addEventListener('click', () => addFunction(`p3Score`, `newpointP3`))
p3Rest.addEventListener('click', () => restFunction(`p3Score`, `newpointP3`))
playingPlayerDiv[2].addEventListener('click',() => changeColor(`p3Score`))  


// p4
      p4Add.addEventListener('click', () => addFunction(`p4Score`, `newpointP4`))
      p4Rest.addEventListener('click', () => restFunction(`p4Score`, `newpointP4`))
      playingPlayerDiv[3].addEventListener('click',() => changeColor(`p4Score`))  
    


// change add and rest  
function addFunction(e,i){ 
    let es = `.` + e;
    let is = `#` + i;
    let pScore = document.querySelector(es)
    let inputNUmber= document.querySelector(is)
    if(parseInt(inputNUmber.value)) {
      pScore.textContent = parseInt(pScore.textContent) + parseInt(inputNUmber.value)
      inputNUmber.value = ''; }
    else {
      inputNUmber.value = '';}
    }

    function restFunction(e,i){ 
     let es = `.` + e;
    let is = `#` + i;
    let pScore = document.querySelector(es);
    let inputNUmber= document.querySelector(is);
        if(parseInt(inputNUmber.value)) {
          pScore.textContent = parseInt(pScore.textContent) - parseInt(inputNUmber.value)
          inputNUmber.value = ''; }
        else {
          inputNUmber.value = '';}
          
        }
        
// change the colors depending the score
 
function changeColor(e){ 
    let es = `.` + e;
    let ese = document.querySelector(es)
    let is = parseInt(ese.textContent)
        if (is > 50 && is <= limit){
        ese.style.color = `red`}
        else if(is >= 0 && is <= 50){
            ese.style.color = `black`
        }
        else if( is > limit) {
            ese.parentElement.parentElement.style.color = 'grey';
            ese.parentElement.parentElement.style.textDecoration = 'line-through';
            ese.parentElement.classList.add('hide');
        }
        else {ese.style.color = `green`}
      };

      
    // function winner() {
    //     for (playingPlayer of playingPlayerDiv)
    //      if(playingPlayer.firstElementChild.style.color = 'grey'){
    //         console.log(`not ${playingPlayer}`) 
    //      }
    //      else {console.log(`yes ${playingPlayer}`)}
    //      };
    
    
      

      
        
        
  //  ulElement.addEventListener('click', function (event) { // catch all click event on parent ul
    //  if (!event.target || !event.target.parentElement) {return} // if the click not on li or one of the child ignore it
    //  else if (event.target.parentElement.classList.contains('li-class')) { // if clicked element's parent is li with the class
     //   event.target.parentElement.style.color = 'red';
    //  } 
    ///  else if (event.target.classList.contains('li-class')) { // if clicked element is li with the class
    //    event.target.style.color = 'red'
   //   }
      
   // }, false);
    
// Restart the scores BUtton
restart.addEventListener('click',restarted)  
    function restarted() {
     for(score of document.querySelectorAll('.score')){
        score.textContent = '0';
        score.style.color = 'black';
        score.parentElement.parentElement.style.color = '';
        score.parentElement.parentElement.style.textDecoration = 'none';
        score.parentElement.classList.remove('hide')
        for(newpoint of document.querySelectorAll('.newpoint')){
            newpoint.value = '';
        }
     }
    } 


// Go Home Button
    goHome.addEventListener('click',goback)  
    function goback() {
       $( document ).ready(function() {
        $("body").load(window.location.href);
    });
    } 
    