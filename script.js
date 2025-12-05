const train = document.getElementById("train");
const moveButton = document.getElementById("moveTrain");
const stations = document.querySelectorAll(".station");

const trainPositions = [40, 250, 460];
let currentPositionIndex = 0;

moveButton.addEventListener("click", () => {
  currentPositionIndex++;

  if (currentPositionIndex >= trainPositions.length) {
    currentPositionIndex = 0;
  }

  train.style.left = trainPositions[currentPositionIndex] + "px";
});

stations.forEach((station) => {
  station.addEventListener("click", () => {
    alert("You clicked on " + station.textContent);

    if (station.id === "stationA") {
      currentPositionIndex = 0;
    } else if (station.id === "stationB") {
      currentPositionIndex = 1;
    } else if (station.id === "stationC") {
      currentPositionIndex = 2;
    }

    train.style.left = trainPositions[currentPositionIndex] + "px";
  });
});
