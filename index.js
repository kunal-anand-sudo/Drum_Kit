document.addEventListener("keydown", function(event){
  makeSound(event.key);
  animate(event.key);
});

for(var i = 0; i<7; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var button = this.innerHTML;
    makeSound(button);
    animate(button);
  });
}

function makeSound(key){
  if(key=='w'){
    var obj = new Audio("sounds/crash.mp3");
    obj.play();
  }
  else if(key=='a'){
    var obj = new Audio("sounds/kick-bass.mp3");
    obj.play();
  }
  else if(key=='s'){
    var obj = new Audio("sounds/snare.mp3");
    obj.play();
  }
  else if(key=='d'){
    var obj = new Audio("sounds/tom-1.mp3");
    obj.play();
  }
  else if(key=='j'){
    var obj = new Audio("sounds/tom-2.mp3");
    obj.play();
  }
  else if(key=='k'){
    var obj = new Audio("sounds/tom-3.mp3");
    obj.play();
  }
  else if(key=='l'){
    var obj = new Audio("sounds/tom-4.mp3");
    obj.play();
  }
}

function animate(key){
  document.querySelector("." + key).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("." + key).classList.remove("pressed");
  },100);
}
