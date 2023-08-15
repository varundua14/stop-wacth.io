let counter = 0;


function increaseCounter() {
  counter++;
  postMessage(counter);
}

setInterval(increaseCounter, 1000);


