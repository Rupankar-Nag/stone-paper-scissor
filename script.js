let r = document.getElementById("rock");
let p = document.getElementById("paper");
let s = document.getElementById("scissor");
let reset = document.getElementById("reset");
let rule = document.getElementById("rule");
// let m = document.getElementById("volume");
function playclick () {
    let audio = new Audio("mixkit-arcade-game-jump-coin-216.wav");
    audio.play();
}
function playclick1 () {
    let audio = new Audio("mixkit-hard-typewriter-click-1119.wav");
    audio.play();
}
function won () {
        document.querySelector(".result").innerHTML = "<p>WON</p>";
        document.querySelector(".result").style.color="green";
        let s = document.querySelector("#humanScore").innerText;
        s++;
        document.querySelector("#humanScore").innerHTML = s;
        setTimeout(()=>{
            let audio = new Audio("mixkit-quick-win-video-game-notification-269.wav");
            audio.play();
        },300);
}
function draw () {
    setTimeout(()=>{
        let audio = new Audio("mixkit-video-game-mystery-alert-234.wav");
        audio.play();
    },300);
    document.querySelector(".result").innerHTML = "<p>DRAW</p>";
    document.querySelector(".result").style.color="black";
}
function lost () {
    setTimeout(()=>{
        let audio = new Audio("mixkit-negative-tone-interface-tap-2569.wav");
        audio.play();
    },300);
    document.querySelector(".result").innerHTML = "<p;>LOST</p>";
    document.querySelector(".result").style.color="red";
    let s = document.querySelector("#computerScore").innerText;
    s++;
    document.querySelector("#computerScore").innerHTML = s;
}
function rockc() {
    setTimeout(()=>{
        document.getElementById("rockc").style.fontSize = "70px";
        document.getElementById("rockc").style.color = "rgb(234, 8, 8)";
        document.getElementById("rockc").style.boxShadow = "rgba(72, 135, 202, 0.9) 0 0 90px , 3px 3px 3px red";
    },10);
    setTimeout(()=>{
        document.getElementById("rockc").style.fontSize = "50px";
        document.getElementById("rockc").style.color = "black";
        document.getElementById("rockc").style.boxShadow = "";
    },1000);
}
function paperc() {
    setTimeout(()=>{
        document.getElementById("paperc").style.fontSize = "70px";
        document.getElementById("paperc").style.color = "rgb(234, 8, 8)";
        document.getElementById("paperc").style.boxShadow = "rgba(72, 135, 202, 0.9) 0 0 90px , 3px 3px 3px red";
    },10);
    setTimeout(()=>{
        document.getElementById("paperc").style.fontSize = "50px";
        document.getElementById("paperc").style.color = "black";
        document.getElementById("paperc").style.boxShadow = "";
    },1000);
}
function scissorc () {
    setTimeout(()=>{
        document.getElementById("scissorc").style.fontSize = "70px";
        document.getElementById("scissorc").style.color = "rgb(234, 8, 8)";
        document.getElementById("scissorc").style.boxShadow = "rgba(72, 135, 202, 0.9) 0 0 90px , 3px 3px 3px red";
    },10);
    setTimeout(()=>{
        document.getElementById("scissorc").style.fontSize = "50px";
        document.getElementById("scissorc").style.color = "black";
        document.getElementById("scissorc").style.boxShadow = "";
    },1000);
}
//comp=0=rock;comp=1=paper;comp=2=scissor
r.addEventListener("click",()=>{//rock
    playclick();
    setTimeout(()=>{
        document.getElementById("rock").style.fontSize = "100px";
        document.getElementById("rock").style.color = "rgb(234, 8, 8)";
        document.getElementById("rock").style.boxShadow = "rgba(72, 135, 202, 0.9) 0 0 90px , 3px 3px 3px red";
    },10);
    setTimeout(()=>{
        document.getElementById("rock").style.fontSize = "50px";
        document.getElementById("rock").style.color = "black";
        document.getElementById("rock").style.boxShadow = "";
    },200);
    let comp = Math.floor(Math.random() * 3);
    if(comp==0){
        draw();
        rockc();
    }
    else if(comp==1){
        lost();
        paperc();
    }
    else{
        won();
        scissorc();
    }
});
p.addEventListener("click",()=>{//paper
    playclick();
    setTimeout(()=>{
        document.getElementById("paper").style.fontSize = "100px";
        document.getElementById("paper").style.color = "rgb(234, 8, 8)";
        document.getElementById("paper").style.boxShadow = "rgba(72, 135, 202, 0.9) 0 0 90px , 3px 3px 3px red";
    },10);
    setTimeout(()=>{
        document.getElementById("paper").style.fontSize = "50px";
        document.getElementById("paper").style.color = "black";
        document.getElementById("paper").style.boxShadow = "";
    },200);
    let comp= Math.floor(Math.random() * 3);
    if(comp ==0){
        won();
        rockc();
    }
    else if(comp==1){
        draw();
        paperc();
    }
    else{
        lost();
        scissorc();
    }
});
s.addEventListener("click",()=>{//scissor
    playclick();
    setTimeout(()=>{
        document.getElementById("scissor").style.fontSize = "100px";
        document.getElementById("scissor").style.color = "rgb(234, 8, 8)";
        document.getElementById("scissor").style.boxShadow = "rgba(72, 135, 202, 0.9) 0 0 90px , 3px 3px 3px red";
    },10);
    setTimeout(()=>{
        document.getElementById("scissor").style.fontSize = "50px";
        document.getElementById("scissor").style.color = "black";
        document.getElementById("scissor").style.boxShadow = "";
    },200);
    let comp = Math.floor(Math.random() * 3);
    if(comp==0){
        lost();
        rockc();
    }
    else if(comp==1){
        won();
        paperc();
    }
    else{
        draw();
        scissorc();    
    }
});
//A=rock;S=Paper;D=Scissor
document.addEventListener("keydown",(e)=>{
    // console.log(e);
    if (e.code =='KeyA'){//rock
        playclick();
        setTimeout(()=>{
            document.getElementById("rock").style.fontSize = "100px";
            document.getElementById("rock").style.color = "rgb(234, 8, 8)";
            document.getElementById("rock").style.boxShadow = "rgba(72, 135, 202, 0.9) 0 0 90px , 3px 3px 3px red";
        },10);
        setTimeout(()=>{
            document.getElementById("rock").style.fontSize = "50px";
            document.getElementById("rock").style.color = "black";
            document.getElementById("rock").style.boxShadow = "";
        },200);
        let comp = Math.floor(Math.random() * 3);
        if(comp==0){
            draw();
            rockc();
        }
        else if(comp==1){
            lost();
            paperc();
        }
        else{
            won();
            scissorc();
        }
    }
    else if(e.code=='KeyS'){//paper
        playclick();
        setTimeout(()=>{
            document.getElementById("paper").style.fontSize = "100px";
            document.getElementById("paper").style.color = "rgb(234, 8, 8)";
            document.getElementById("paper").style.boxShadow = "rgba(72, 135, 202, 0.9) 0 0 90px , 3px 3px 3px red";
        },10);
        setTimeout(()=>{
            document.getElementById("paper").style.fontSize = "50px";
            document.getElementById("paper").style.color = "black";
            document.getElementById("paper").style.boxShadow = "";
        },200);
        let comp= Math.floor(Math.random() * 3);
        if(comp ==0){
            won();
            rockc();
        }
        else if(comp==1){
            draw();
            paperc();
        }
        else{
            lost();
            scissorc();
        }
    }
    else if(e.code=='KeyD'){//scissor
        playclick();
        setTimeout(()=>{
            document.getElementById("scissor").style.fontSize = "100px";
            document.getElementById("scissor").style.color = "rgb(234, 8, 8)";
            document.getElementById("scissor").style.boxShadow = "rgba(72, 135, 202, 0.9) 0 0 90px , 3px 3px 3px red";
        },10);
        setTimeout(()=>{
            document.getElementById("scissor").style.fontSize = "50px";
            document.getElementById("scissor").style.color = "black";
            document.getElementById("scissor").style.boxShadow = "";
        },200);
        let comp = Math.floor(Math.random() * 3);
        if(comp==0){
            lost();
            rockc();
        }
        else if(comp==1){
            won();
            paperc();
        }
        else{
            draw();
            scissorc();
        }
    }
});
reset.addEventListener("click",()=>{
    playclick1();
    document.querySelector("#humanScore").innerHTML = "0";
    document.querySelector("#computerScore").innerHTML = "0";
    document.querySelector(".result").innerHTML = "<p>MAKE YOUR MOVE</p>";
    document.querySelector(".result").style.color="black";
});
rule.addEventListener("click",playclick1);