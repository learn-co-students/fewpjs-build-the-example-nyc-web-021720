// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let errorModal=document.getElementById("modal");

const hearts=document.querySelectorAll(".like-glphy");

document.addEventListener("click",e =>{
  if(e.target.innerText === FULL_HEART){
    e.target.innterText=EMPTY_HEART;
  }
  else if (e.target.innerText===EMPTY_HEART){
    e.target.innerText=FULL_HEART;
  }
})



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}



mimicServerCall()
.then(()=>{
  fillHearts()
  makeHeartsRed()
})
.catch((error)=>{
  errorModal.classList.remove("hidden");
  errorModal.innerText=error;
  setTimeout(()=>{

    errorModal.classList.add("hidden")
  },5000)
});


function fillHearts(){
  hearts.forEach(element=> (element.innerText=FULL_HEART));
}

function makeHeartsRed(){
  hearts.forEach(element=>(element.classList.add("activated-heart")));
}