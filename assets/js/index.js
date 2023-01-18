// Example of a container of buttons
function handleSourcePress(e) {
  const value = parseInt(e.target.value, 10);
  var els = document.getElementsByClassName("demoActive");

  Array.from(els).forEach((el) => {
    document.getElementById(el.id).className = "demo";
  });

  document.getElementById(`src${e.target.value}`).className = "demoActive";
}

document.querySelector(".digital").addEventListener("click", function (event) {
    console.log(event);
  if (event.target.tagName === "BUTTON") {
    console.log("Digital Button Pressed");
    handleSourcePress(event);
  }
  event.stopPropagation();
});

document.querySelector(".string").addEventListener("click", function (event) {
    console.log(event);
  if (event.target.tagName === "BUTTON") {
    console.log("Digital Button Pressed");
    handleSourcePress(event);
  }
  event.stopPropagation();
});

document.getElementById("").oninput = function() {
    captureStringValue()
}

document.getElementById("slider").oninput = function() {
    captureSliderValue()
};

    
function captureSliderValue() {
    var val = document.getElementById("slider").value //gets the oninput value
    //document.getElementById('output').innerHTML = val //displays this value to the html page
    console.log(val)
}   

function sendString(ele) {
    if(event.key === 'Enter') {
        alert(ele.value);        
    }
}