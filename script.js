// Navbar Heart Count Number

const heartNumber = document.getElementById("navHeartCount");
const neHeartButton = document.querySelectorAll(".neHeartBtn"); 

neHeartButton.forEach(function(button) {
  button.addEventListener("click", function() {
    let life = Number(heartNumber.innerText);
    life += 1;
    heartNumber.innerText = life;
  });
});


// Navbar Copy Count Number

const navCopyNumber = document.getElementById("navCopyCountNumber");
const cardCopyBtn = document.querySelectorAll(".gridCopyBtn"); 

cardCopyBtn.forEach(function(btn) {
  btn.addEventListener("click", function() {
    let copyValues = Number(navCopyNumber.innerText);
    copyValues += 1;
    navCopyNumber.innerText = copyValues;
  });
}); 

// Navbar Coin Count Number
const navCoinCountNumber = document.getElementById("navCoinCount");
const navCoinNumber = document.querySelectorAll(".gridCallBtn");

navCoinNumber.forEach(function(callButtons) {callButtons.addEventListener("click",function() {
  let totalCoins = Number( navCoinCountNumber.innerText
    );
    totalCoins -= 10;
    navCoinCountNumber.innerText = totalCoins ;
    
} );
} );
// navCoinCount
// gridCallBtn


