var container = document.getElementById("container");
var rainContainer = document.getElementById("rainContainer");
var dropsContainer1 = document.getElementById("drops1");
var dropsContainer2 = document.getElementById("drops2");
var documentHeight = document.documentElement.style.setProperty('--document-height', `${document.documentElement.scrollHeight}px`);

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    dropsAmount = 20;
    existingDrops = container.querySelectorAll(".drop");
    existingDrops.forEach(drop => {
        drop.style.width = "2px";
        drop.style.height = "10px";
    });

} else{
    dropsAmount = 60;
}


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
        drop.style.animationDelay = (Math.random()*2) + "s"

        dropsContainer1.appendChild(drop);

        if (i>dropsAmount/2){
            dropsContainer2.appendChild(drop);
        }
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

disableRainBtn = document.getElementById("disableRainBtn");
disableRainBtn.addEventListener("click", () => {
    if (disableRainBtn.classList.contains("rainEnabled")){
        rainContainer.style.display = "none";
        disableRainBtn.classList.remove("rainEnabled");
    }

    else {
        rainContainer.style.display = "block";
        disableRainBtn.classList.add("rainEnabled");
    }
})