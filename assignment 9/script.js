document.getElementById('generateButton').onclick = generateDice();
document.getElementById('setButton').onclick = function() {
    setDice(Number(document.getElementById('set').value));
};
document.getElementById('addButton').onclick = function() {
    addDice(Number(document.getElementById('add').value));
};


function generateDice() {
  for (let i = 1; i <= 5; i++) {
      document.getElementById('dice' + i).innerHTML = `<b>${Math.floor(Math.random() * 12) + 1}</b>`;
  }
}

function setDice(value) {
  if (value >=1 && value <= 12){for (let i = 1; i <= 5; i++) {
    document.getElementById('dice' + i).innerHTML = `<b>${value}</b>`;
    document.getElementById('output').innerHTML = "";
  }}else{document.getElementById('output').innerHTML = "Invalid Number";}
}

function addDice(value) {
  if (value >=1 && value <= 5){
    let total = 0;
    for (let i = 1; i <= value; i++) {
    total = total + Number(document.getElementById('dice' + i).innerText);
    document.getElementById('output').innerHTML = `<b>The total of first ${value} dice is ${total}</b>`;
    }
  }else{document.getElementById('output').innerHTML = "Invalid Number";}
}

