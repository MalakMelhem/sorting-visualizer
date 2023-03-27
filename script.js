let randomize_btn= document.getElementById('randomize');
let solve_btn= document.getElementById('solve');
let bars_container= document.getElementById('bars-container');
let range=document.getElementById('vol');
let numOfBars=0;
let array_unsorted;
let array_sorted;

function generateRandomArray(length) {
    let arr = Array.from({length}, () => Math.floor(Math.random() * 100));
    return arr;
}

function renderBars(array) {
    for (let i = 0; i < array.length; i++) {
      let bar = document.createElement("div");
      bar.classList.add("bar");
      bar.style.height = (5+array[i] ) * 4 + "px";
      bar.innerHTML += array[i];
      bars_container.appendChild(bar);
    }
}  

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function bubbleSort(array) {
  let bars = document.getElementsByClassName("bar");
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      bars[j].style.backgroundColor = "lightgreen";
      bars[j + 1].style.backgroundColor = "lightgreen";
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        bars[j].style.height =(5+array[j]) * 4 + "px";
        bars[j].innerText = array[j];
        bars[j + 1].style.height = (5+array[j + 1] )* 4 + "px";
        bars[j + 1].innerText = array[j + 1];
        await sleep(150);  
      }
      await sleep(150);
      bars[j].style.backgroundColor = "#99ccff";
      bars[j + 1].style.backgroundColor = "#99ccff";
    }
    await sleep(150);
    bars[array.length-1 - i].style.backgroundColor = "#ffa31a";
  }
  return array;
}

randomize_btn.addEventListener('click',function(){
  bars_container.innerHTML = "";
  numOfBars=range.value;
  array_unsorted=generateRandomArray(numOfBars);
  console.log(array_unsorted);
  renderBars(array_unsorted);
}); 

solve_btn.addEventListener('click',function(){
array_sorted=bubbleSort(array_unsorted);
});