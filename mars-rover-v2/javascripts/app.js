// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y:0,
  travelLog: []
}

// ======================
function turnLeft(rover){
  switch (rover.direction){
     case "N":
      rover.direction="W";
      break;
     case "W":
       rover.direction="S";
       break;
     case "S":
       rover.direction="E";
       break;
     case "E":
       rover.direction="N";
       break;
   }
   console.log(rover.direction);
}

function turnRight(rover){
  switch (rover.direction){
    case "N":
      rover.direction="E";
      break;
    case "W":
      rover.direction="N";
      break;
    case "S":
      rover.direction="W";
      break;
    case "E":
      rover.direction="S";
      break;
  }
  console.log(rover.direction);
}

function moveForward(rover){
  var position = [rover.x,rover.y];
  var next;
  console.log("Initial position: " + position);
  switch (rover.direction){
    case "N":
      next = rover.y-1;
      if (rover.y==0){
        console.log("The rover can't move in this direction");
      }else {
        rover.travelLog.push(position);
        rover.y = next;
      }
      break;
    case "W":
      next = rover.x-1;
      if (rover.x==0){
        console.log("The rover can't move in this direction");
      }else {
        rover.travelLog.push(position);
        rover.x = next;
      }
      break;
    case "S":
      next = rover.y+1;
      if (rover.y==9){
        console.log("The rover can't move in this direction");
      }else {
        rover.travelLog.push(position);
        rover.y = next;
      }
      break;
    case "E":
      next = rover.x+1;
      if (rover.x==9){
        console.log("The rover can't move in this direction");
      }else {
        rover.travelLog.push(position);
        rover.x = next;
      }
      break;
  }
  position = [rover.x,rover.y];
  console.log("Final position: " + position);
}

function moveBackward(rover){
  var position = [rover.x,rover.y];
  var next;
  console.log("Initial position: " + position);
  switch (rover.direction){
    case "N":
      next = rover.y+1;
      if (rover.y==9){
        console.log("The rover can't move in this direction");
      }else {
        rover.travelLog.push(position);
        rover.y = next;
      }
      break;
    case "W":
      next = rover.x+1;
      if (rover.x==9){
        console.log("The rover can't move in this direction");
      }else {
        rover.travelLog.push(position);
        rover.x = next;
      }
      break;
    case "S":
      next = rover.y-1;
      if (rover.y==0){
        console.log("The rover can't move in this direction");
      }else {
        rover.travelLog.push(position);
        rover.y = next;
      }
      break;
    case "E":
      next = rover.x-1;
      if (rover.x==0){
        console.log("The rover can't move in this direction");
      }else {
        rover.travelLog.push(position);
        rover.x = next;
      }
      break;
  }
  position = [rover.x,rover.y];
  console.log("Final position: " + position);
}

function command(list, rover){
  for (var i=0;i < list.length;i++){
    var a = list[i];
    switch (a){
      case "r":
      turnRight(rover);
      break;
      case "l":
      turnLeft(rover);
      break;
      case "f":
      moveForward(rover);
      break;
      case "b":
      moveBackward(rover);
      break;
      default:
      console.log("This isn't a valid move, it will be omitted");
      break;
    }
  }
}
