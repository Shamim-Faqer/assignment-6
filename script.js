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
    alert("copied text") ;
    let pnNumber = btn.closest(".card").querySelector(".callingNumber").innerText;
    navigator.clipboard.writeText(pnNumber);
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
    let card = callButtons.closest(".card");
    let name = card.querySelector("h2").innerText;
    let number= card.querySelector(".callingNumber").innerText;
    if (totalCoins<20) {
      alert("🚫 পর্যাপ্ত কয়েন নেই! কমপক্ষে 20 কয়েন লাগবে।");
      return;
    }
    else{
      totalCoins -= 20;
    navCoinCountNumber.innerText = totalCoins ;
    
    
    alert(`calling ${name} ${number}, 20 coins will be deducated`);
    } 
    let historyList = document.getElementById("historyList");
let newItem = document.createElement("li");
let time =new Date().toLocaleTimeString();

newItem.innerText = `${name} ${number}-${time} `; 
historyList.appendChild(newItem);
    
} );
} );
// Call History 

const historyClearBtn = document.getElementById("historyClearBtn");
historyClearBtn.addEventListener("click", function(){
  const historyList = document.getElementById("historyList");
  historyList.innerHTML="";
  alert("Cleared Data");
} );


// gridCallBtn


