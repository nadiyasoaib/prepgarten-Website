//what to do an object when input or action done on object
//show alert when drum clicked for one first drum

//type 1
/*document.querySelector(".drum").addEventListener("click",handleEvent);
function handleEvent(){
    alert("i clicked on")
}*/

//type 2
// document.querySelector(".drum").addEventListener("click",function(){
//     alert("i clicked on")
// });

//whenevr any drum clicked it show alert
// Get all the buttons on the page


// Add an event listener to each button that listens for the click event



var buttonslen = document.querySelectorAll(".drum").length
for (var i = 0; i < buttonslen; i++) {



  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    
    makeSound(this.innerHTML);
    var activeButton= document.querySelector("."+this.innerHTML);
    flash(activeButton);

  })
}
document.addEventListener("keypress", function (event) {

  
  console.log(event.key);
  makeSound(event.key);
  var activeButton= document.querySelector("."+event.key)
  flash(activeButton);
 
  
})
function makeSound(activeButton) {

  switch (activeButton) {
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;

    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;

    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;

    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;

    case "j":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;

    case "k":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;

    case "l":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;

  }
}
function flash(activeButton) {

  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed")
  }, 100);

}






