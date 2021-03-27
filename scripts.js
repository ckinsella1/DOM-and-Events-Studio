function init () {
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const takeoff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus"); 
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const Up = document.getElementById("Up");
    const Down = document.getElementById("Down");
    const Left = document.getElementById("Left");
    const Right = document.getElementById("Right");
    const rocket = document.getElementById("rocket");
    rocket.style.position= 'relative';
    rocket.style.left = '0px';
    rocket.style.top = '0px';
}

function takeOffWindow() {
    let response = confirm("Confirm that the shuttle is ready for takeoff.");
  if (response) {
    var i=0;
    flightStatus.innerHTML = "";
    flightStatus.innerHTML += "Shuttle in flight."; 
    shuttleBackground.style.backgroundColor='blue';
    i++;       
    spaceShuttleHeight.innerHTML=(i*10000);
    } else {
    console.log("");
    }
}

function landButton() {
    let response = confirm("The shuttle is landing. Landing gear engaged.");
  if (response) {
    flightStatus.innerHTML = "";
    flightStatus.innerHTML += "The shuttle has landed."; 
    shuttleBackground.style.backgroundColor='green';
    spaceShuttleHeight.innerHTML = 0;
    } else {
    console.log("");
    }
}


function abortMissionButton() {
    let response = confirm("Confirm that you want to abort the mission.");
  if (response) {
    flightStatus.innerHTML = "";
    flightStatus.innerHTML += "Mission aborted."; 
    shuttleBackground.style.backgroundColor='green';
    spaceShuttleHeight.innerHTML = 0;
    } else {
    console.log("");
    }
}

var i=0; 
function upButton() {
    i++;       
    spaceShuttleHeight.innerHTML=(i*10000);
    rocket.style.top = parseInt(rocket.style.top) - 10 + 'px';
}

function downButton() {
    if (i > 0)   { 
    --i;       
    spaceShuttleHeight.innerHTML=(i*10000);
    }
    rocket.style.top = parseInt(rocket.style.top) + 10 + 'px';
}

function rightButton() {
    rocket.style.left = parseInt(rocket.style.left) + 10 + 'px';
}

function leftButton() {
    rocket.style.left = parseInt(rocket.style.left) - 10 + 'px';
}
window.addEventListener("load", init);
