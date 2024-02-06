if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    dropsAmount = 15;
} else{
    dropsAmount = 30;
}

var container = document.getElementById("container");

function currentWSize(){
    WSize = window.innerWidth;
    return WSize;
}

function removeRain(){
    container.innerHTML = "";
}

function makeRain(){
    removeRain();
    setTimeout(() =>{
        removeRain();
        for (i=0;i<dropsAmount;i++){
            drop = document.createElement("div");
            drop.className = "drop"; 
            drop.style.left = Math.floor(Math.random() * currentWSize()) + "px";
    
            drop.style.animationDelay = Math.random() + "s";
            console.log(Math.random() + "s")   
    
            container.appendChild(drop);
        }
    },1000)
}

window.addEventListener("load", makeRain);
window.addEventListener("resize", makeRain);
window.addEventListener("beforeunload", makeRain);