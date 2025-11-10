const heartNumber = document.getElementById("navHeartCount");
const neHeartButton = document.querySelectorAll(".neHeartBtn"); 

neHeartButton.forEach(function(buttons) {buttons.addEventListener("click" , function() {
  let life = Number(heartNumber.innerText);
  life += 1;
  heartNumber.innerText = life ;
  
} ) }
  );


// alert("js connected😃")