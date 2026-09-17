const myImg = document.getElementById("my-img");

myImg.addEventListener("command", (event) => {
  if (event.command === "--rotate-left") {
    myImg.style.rotate = "-90deg";

  } else if (event.command === "--rotate-right") {
    myImg.style.rotate = "90deg";
  
  } else if (event.command === "--rotate-normal") {
    myImg.style.rotate = "0deg";

  } else if (event.command === "--rotate-bottom") {
    myImg.style.rotate = "360deg";

  } else if (event.command === "--translate-down") {
    myImg.style.translate = "0 50px";
  }
});