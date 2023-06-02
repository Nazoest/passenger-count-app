
let count = 0;
const passengerCounts = [];

document.getElementById("decrease").onclick = function() {
  if (count > 0) {
    count--;
  } else {
    return 0;
  }

  document.getElementById("countLabel").innerHTML = count;
};

document.getElementById("reset").onclick = function() {
  count = 0;
  document.getElementById("countLabel").innerHTML = count;
};

document.getElementById("increase").onclick = function() {
  count++;
  document.getElementById("countLabel").innerHTML = count;
};

document.getElementById("done").onclick = function() {
  passengerCounts.push(count);
  console.log(passengerCounts);

  count = 0;
  document.getElementById("countLabel").innerHTML = count;

  updateList();
};

function updateList() {
  const listElement = document.createElement("ul");

  for (let i = 0; i < passengerCounts.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = passengerCounts[i];
    listElement.appendChild(listItem);
  }

  const previousPassengersContainer = document.querySelector(".previous-passengers");
  previousPassengersContainer.innerHTML = "";
  previousPassengersContainer.appendChild(listElement);

  document.getElementById("countLabel").innerHTML = count;
}









