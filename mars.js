// Rover Object Goes Here
// ======================

const board = [
  [
    { 0: 0 },
    { 0: 1 },
    { 0: 2 },
    { 0: 3 },
    { 0: 4 },
    { 0: 5 },
    { 0: 6 },
    { 0: 7 },
    { 0: 8 },
    { 0: 9 }
  ],
  [
    { 1: 0 },
    { 1: 1 },
    { 1: 2 },
    { 1: 3 },
    { 1: 4 },
    { 1: 5 },
    { 1: 6 },
    { 1: 7 },
    { 1: 8 },
    { 1: 9 }
  ],
  [
    { 2: 0 },
    { 2: 1 },
    { 2: 2 },
    { 2: 3 },
    { 2: 4 },
    { 2: 5 },
    { 2: 6 },
    { 2: 7 },
    { 2: 8 },
    { 2: 9 }
  ],
  [
    { 3: 0 },
    { 3: 1 },
    { 3: 2 },
    { 3: 3 },
    { 3: 4 },
    { 3: 5 },
    { 3: 6 },
    { 3: 7 },
    { 3: 8 },
    { 3: 9 }
  ],
  [
    { 4: 0 },
    { 4: 1 },
    { 4: 2 },
    { 4: 3 },
    { 4: 4 },
    { 4: 5 },
    { 4: 6 },
    { 4: 7 },
    { 4: 8 },
    { 4: 9 }
  ],
  [
    { 5: 0 },
    { 5: 1 },
    { 5: 2 },
    { 5: 3 },
    { 5: 4 },
    { 5: 5 },
    { 5: 6 },
    { 5: 7 },
    { 5: 8 },
    { 5: 9 }
  ],
  [
    { 6: 0 },
    { 6: 1 },
    { 6: 2 },
    { 6: 3 },
    { 6: 4 },
    { 6: 5 },
    { 6: 6 },
    { 6: 7 },
    { 6: 8 },
    { 6: 9 }
  ],
  [
    { 7: 0 },
    { 7: 1 },
    { 7: 2 },
    { 7: 3 },
    { 7: 4 },
    { 7: 5 },
    { 7: 6 },
    { 7: 7 },
    { 7: 8 },
    { 7: 9 }
  ],
  [
    { 8: 0 },
    { 8: 1 },
    { 8: 2 },
    { 8: 3 },
    { 8: 4 },
    { 8: 5 },
    { 8: 6 },
    { 8: 7 },
    { 8: 8 },
    { 8: 9 }
  ],
  [
    { 9: 0 },
    { 9: 1 },
    { 9: 2 },
    { 9: 3 },
    { 9: 4 },
    { 9: 5 },
    { 9: 6 },
    { 9: 7 },
    { 9: 8 },
    { 9: 9 }
  ]
];

//Rover 1 with first position by default x:0 and y:0
const rover1 = {
  name: "Rover 1",
  x: 0,
  y: 0,
  direction: "N",
  travelLog: [{ x: 0, y: 0 }]
};

//Rover 2 with first position by default x:9 and y:9
const rover2 = {
  name: "Rover 2",
  x: 9,
  y: 9,
  direction: "N",
  travelLog: [{ x: 9, y: 9 }]
};

//The obstacle is by default the position x: 2 and y:2.
const obstacle = {
  x: 2,
  y: 2
};

console.log(
  `The new position for ${rover1.name} is x:${rover1.x} and y:${rover1.y}`
);
console.log(
  `The new position for ${rover2.name} is x:${rover2.x} and y:${rover2.y}`
);
console.log(
  `The obstacle is in the position x: ${obstacle.x} and y: ${obstacle.y}`
);

// ======================
// two differents ways to do the algoritm. For example to turnLeft I have used if-else. For turnRight I have used cases(switch). The last one is easier and more confortable.
function turnLeft(rover) {
  if (rover.direction === "N") {
    rover.direction = "W";
  } else if (rover.direction === "W") {
    rover.direction = "S";
  } else if (rover.direction === "S") {
    rover.direction = "E";
  } else {
    rover.direction = "N";
  }
  // console.log(Rover.direction);
  // console.log("turnLeft was called!");
}

function turnRight(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
}

// Function to move next position the rover.
function moveForward(rover) {
  let newPosition = { x: rover.x, y: rover.y };
  switch (rover.direction) {
    case "N":
      if (rover.y > 0 && rover.y <= 10) {
        rover.y--;
        // Check if there any obstacle into next movement.
        if (rover.y === obstacle.y && rover.x === obstacle.x) {
          console.log(
            "There is an object in the next step : x:" +
              rover.x +
              " y: " +
              rover.y
          );
          rover.y++;
        } else {
          newPosition = { x: rover.x, y: rover.y };
          rover.travelLog.push(newPosition);
        }
      } else {
        console.log("You can't place player outside of the board!");
      }
      break;
    case "E":
      if (rover.x >= 0 && rover.x < 10) {
        rover.x++;
        // Check if there is a obstacle into next movement.
        if (rover.y === obstacle.y && rover.x === obstacle.x) {
          console.log(
            "There is an object in the next step : x:" +
              rover.x +
              " y: " +
              rover.y
          );
          rover.x--;
        } else {
          newPosition = { x: rover.x, y: rover.y };
          rover.travelLog.push(newPosition);
        }
      } else {
        console.log("You can't place player outside of the board!");
      }
      break;
    case "S":
      if (rover.y >= 0 && rover.y < 10) {
        rover.y++;
        // Check if there is a obstacle into next movement.
        if (rover.y === obstacle.y && rover.x === obstacle.x) {
          console.log(
            "There is an object in the next step : x:" +
              rover.x +
              " y: " +
              rover.y
          );
          rover.y--;
        } else {
          newPosition = { x: rover.x, y: rover.y };
          rover.travelLog.push(newPosition);
        }
      } else {
        console.log("You can't place player outside of the board!");
      }
      break;
    case "W":
      if (rover.x > 0 && rover.x <= 10) {
        rover.x--;
        // Check if there is a obstacle into next movement.
        if (rover.y === obstacle.y && rover.x-- === obstacle.x) {
          console.log(
            "There is an object in the next step : x:" +
              rover.x +
              " y: " +
              rover.y
          );
          rover.x++;
        } else {
          newPosition = { x: rover.x, y: rover.y };
          rover.travelLog.push(newPosition);
        }
      } else {
        console.log("You can't place player outside of the board!");
      }
      break;
  }
}

function moveBackward(rover) {
  let newPosition = { x: rover.x, y: rover.y };
  switch (rover.direction) {
    case "N":
      if (rover.y >= 0 && rover.y < 10) {
        rover.y++;
        // Check if there is a obstacle into next movement.
        if (rover.y === obstacle.y && rover.x === obstacle.x) {
          console.log(
            "There is an object in the next step : x:" +
              rover.x +
              " y: " +
              rover.y
          );
          rover.y--;
        } else {
          newPosition = { x: rover.x, y: rover.y };
          rover.travelLog.push(newPosition);
        }
      } else {
        console.log("You can't place player outside of the board!");
      }
      break;
    case "E":
      if (rover.x > 0 && rover.x <= 10) {
        rover.x--;
        // Check if there is a obstacle into next movement.
        if (rover.y === obstacle.y && rover.x === obstacle.x) {
          console.log(
            "There is an object in the next step : x:" +
              rover.x +
              " y: " +
              rover.y
          );
          rover.x++;
        } else {
          newPosition = { x: rover.x, y: rover.y };
          rover.travelLog.push(newPosition);
        }
      } else {
        console.log("You can't place player outside of the board!");
      }
      break;
    case "S":
      if (rover.y > 0 && rover.y <= 10) {
        rover.y--;
        // Check if there is a obstacle into next movement.
        if (rover.y === obstacle.y && rover.x === obstacle.x) {
          console.log(
            "There is an object in the next step : x:" +
              rover.x +
              " y: " +
              rover.y
          );
          rover.y++;
        } else {
          newPosition = { x: rover.x, y: rover.y };
          rover.travelLog.push(newPosition);
        }
      } else {
        console.log("You can't place player outside of the board!");
      }
      break;
    case "W":
      if (rover.x >= 0 && rover.x < 10) {
        rover.x++;
        // Check if there is a obstacle into next movement.
        if (rover.y === obstacle.y && rover.x === obstacle.x) {
          console.log(
            "There is an object in the next step : x:" +
              rover.x +
              " y: " +
              rover.y
          );
          rover.x--;
        } else {
          newPosition = { x: rover.x, y: rover.y };
          rover.travelLog.push(newPosition);
        }
      } else {
        console.log("You can't place player outside of the board!");
      }
      break;
  }
}

function command(rover, orders) {
  for (let index = 0; index < orders.length; index++) {
    let order = orders[index];
    switch (order) {
      case "L":
        turnLeft(rover);
        break;
      case "R":
        turnRight(rover);
        break;
      case "F":
        moveForward(rover);
        checkRover(rover1, rover2);
        break;
      case "B":
        moveBackward(rover);
        checkRover(rover1, rover2);
        break;
      //DEFAULT IS FOR ALL THE CASES THAT ARE NOT IN THE UP CASES
      default:
        console.log("The letter: " + order + " is not a command.");
    }
  }
  console.log(
    `The new position for ${rover.name} is x:${rover.x} and y:${rover.y}`
  );
  console.log(rover.travelLog);
}

// Check again, now is repeating each time after forward and backword.
function checkRover(rover1, rover2) {
  for (let i = 0; i < rover1.travelLog.length; i++) {
    for (let j = 0; j < rover2.travelLog.length; j++) {
      if (
        rover1.travelLog[i].x === rover2.travelLog[j].x &&
        rover1.travelLog[i].y === rover2.travelLog[j].y
      ) {
        console.log("Rovers are in same position");
      }
    }
  }
}

// command(rover1, "RFFRFFLFRFFB");
checkRover(rover1, rover2);
command(rover1, "RFFFFFFFFFRFFB");
command(rover2, "FFFFFFFF");
