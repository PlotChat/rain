if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    dropsAmount = 15;
} else{
    dropsAmount = 50;
}

var container = document.getElementById("container");

function currentWSize(){
    WSize = window.innerWidth;
    return WSize;
}

function removeRain(){
    existingDrops = container.querySelectorAll(".drop");
    existingDrops.forEach(drop => drop.remove());
}

function makeRain(){
    removeRain();
    for (i=0;i<dropsAmount;i++){
        drop = document.createElement("div");
        
        drop.className = "drop"; 
        drop.style.opacity = 0.7;
        drop.style.left = Math.random() * currentWSize() + "px"
        drop.style.animationDelay = (Math.random() + 0.3) + "s"

        container.appendChild(drop);
    }
}

function fadeRain(){
    existingDrops = container.querySelectorAll(".drop");
    existingDrops.forEach(drop => {
        drop.style.opacity = 0;
    });
}

window.addEventListener("load", makeRain);

prevSize = currentWSize();
window.addEventListener("resize", () => {
    if (prevSize != currentWSize()){
        fadeRain();
        setTimeout(makeRain,500);  
    }
    prevSize = currentWSize();
});
window.addEventListener("beforeunload", makeRain);
