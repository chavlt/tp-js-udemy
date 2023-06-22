let btnStartCount = document.querySelector('button');
let p = document.querySelector('p');
let intervalId;
let count = 10;

btnStartCount.addEventListener('click', () => {
  console.log("START !");
  start();
})

function start(){
  intervalId = setInterval(decompte, 1000);
}

function decompte(){
  if(count != 0){
    console.log(count);
    p.innerHTML = count;
    count -= 1;
  }else{
    stop();
    console.log("STOP");
    p.innerHTML = "FINITOOOOO";
  }
}

function stop(){
  clearInterval(intervalId);
}