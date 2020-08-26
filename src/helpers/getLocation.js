function showLocation(position) {
  return position.coords
}

function errorHandler(err) {
  if(err.code === 1) {
     alert("Error: Access is denied!");
  } else if( err.code === 2) {
     alert("Error: Position is unavailable!");
  }
}

export default function getLocation() {
  if(navigator.geolocation) {
     // timeout at 60 seconds
     let options = {timeout:60000};
     navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
  } else {
     alert("Sorry, browser does not support geolocation!");
  }
}