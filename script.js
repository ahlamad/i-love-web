const myImg = document.getElementById("my-img");

myImg.addEventListener("command", (event) => {
  if (event.command === "--rotate-left") {
    myImg.style.rotate = "-90deg";
  } else if (event.command === "--rotate-right") {
    myImg.style.rotate = "90deg";
  
    } else if (event.command === "--rotate-top") {
    myImg.style.translate = "10px 0";
  }
     else if (event.command === "--rotate-bottom") {
    myImg.style.rotate = "360deg";
  }
});