/* store.html */

var buttonA = document.querySelector(".a");
var buttonB = document.querySelector(".b");
var buttonC = document.querySelector(".c");
var buttonD = document.querySelector(".d");
var buttonE = document.querySelector(".e");

buttonA.style.backgroundColor = "transparent"; //white
buttonB.style.backgroundColor = "transparent";
buttonC.style.backgroundColor = "transparent"; //yellow
buttonD.style.backgroundColor = "transparent";
buttonE.style.backgroundColor = "transparent";

buttonA.addEventListener("click", function() {
    if (buttonA.style.backgroundColor == "transparent" && buttonB.style.backgroundColor == "transparent" && buttonC.style.backgroundColor == "transparent") {
      buttonA.style.backgroundColor = "red";
      buttonB.style.backgroundColor = "transparent";
      buttonC.style.backgroundColor = "transparent";
    } else if (buttonA.style.backgroundColor == "red" && buttonB.style.backgroundColor == "transparent" && buttonC.style.backgroundColor == "transparent") {
      buttonA.style.backgroundColor = "transparent";
      buttonB.style.backgroundColor = "transparent";
      buttonC.style.backgroundColor = "transparent";
    }else if (buttonA.style.backgroundColor == "transparent" && buttonB.style.backgroundColor == "red" && buttonC.style.backgroundColor == "transparent") {
        buttonA.style.backgroundColor = "red";
        buttonB.style.backgroundColor = "transparent";
        buttonC.style.backgroundColor = "transparent";
    }else if (buttonA.style.backgroundColor == "transparent" && buttonB.style.backgroundColor == "transparent" && buttonC.style.backgroundColor == "red") {
        buttonA.style.backgroundColor = "red";
        buttonB.style.backgroundColor = "transparent";
        buttonC.style.backgroundColor = "transparent";
    } else {
      buttonA.style.backgroundColor = "transparent";
    }
  });
  buttonB.addEventListener("click", function() {
    if (buttonB.style.backgroundColor == "transparent" && buttonA.style.backgroundColor == "transparent" && buttonC.style.backgroundColor == "transparent") {
        buttonA.style.backgroundColor = "transparent";
        buttonB.style.backgroundColor = "red";
        buttonC.style.backgroundColor = "transparent";
    } else if (buttonB.style.backgroundColor == "transparent"  && buttonA.style.backgroundColor == "red" && buttonC.style.backgroundColor == "transparent") {
        buttonA.style.backgroundColor = "transparent";
        buttonB.style.backgroundColor = "red";
        buttonC.style.backgroundColor = "transparent";
    } else if (buttonB.style.backgroundColor == "transparent"  && buttonA.style.backgroundColor == "transparent" && buttonC.style.backgroundColor == "red") {
        buttonA.style.backgroundColor = "transparent";
        buttonB.style.backgroundColor = "red";
        buttonC.style.backgroundColor = "transparent";
    }else if (buttonB.style.backgroundColor == "red"  && buttonA.style.backgroundColor == "transparent" && buttonC.style.backgroundColor == "transparent") {
        buttonA.style.backgroundColor = "transparent";
        buttonB.style.backgroundColor = "transparent";
        buttonC.style.backgroundColor = "transparent";
    } else {
      buttonB.style.backgroundColor = "transparent";
    }
  });
  buttonC.addEventListener("click", function() {
    if (buttonC.style.backgroundColor == "transparent" && buttonA.style.backgroundColor == "transparent" && buttonB.style.backgroundColor == "transparent") {
        buttonA.style.backgroundColor = "transparent";
        buttonB.style.backgroundColor = "transparent";
        buttonC.style.backgroundColor = "red";
    } else if (buttonC.style.backgroundColor == "transparent" && buttonA.style.backgroundColor == "red" && buttonB.style.backgroundColor == "transparent") {
        buttonA.style.backgroundColor = "transparent";
        buttonB.style.backgroundColor = "transparent";
        buttonC.style.backgroundColor = "red";
    } else if (buttonC.style.backgroundColor == "transparent" && buttonA.style.backgroundColor == "transparent" && buttonB.style.backgroundColor == "red") {
        buttonA.style.backgroundColor = "transparent";
        buttonB.style.backgroundColor = "transparent";
        buttonC.style.backgroundColor = "red";
    }else if (buttonC.style.backgroundColor == "red" && buttonA.style.backgroundColor == "transparent" && buttonB.style.backgroundColor == "transparent") {
        buttonA.style.backgroundColor = "transparent";
        buttonB.style.backgroundColor = "transparent";
        buttonC.style.backgroundColor = "transparent";
    } else {
      buttonC.style.backgroundColor = "transparent";
    }
  });


  /* ^_Version */

  buttonD.addEventListener("click", function() {
    if (buttonD.style.backgroundColor == "transparent" && buttonE.style.backgroundColor == "transparent") {
      buttonD.style.backgroundColor = "red";
      buttonE.style.backgroundColor = "transparent";
    } else if (buttonD.style.backgroundColor == "red" && buttonE.style.backgroundColor == "transparent") {
        buttonD.style.backgroundColor = "transparent";
        buttonE.style.backgroundColor = "transparent";
    } else if (buttonD.style.backgroundColor == "transparent" && buttonE.style.backgroundColor == "red") {
        buttonD.style.backgroundColor = "red";
        buttonE.style.backgroundColor = "transparent";
    } else {
      buttonD.style.backgroundColor = "transparent";
    }
  });
  
  buttonE.addEventListener("click", function() {
    if (buttonE.style.backgroundColor == "transparent" && buttonD.style.backgroundColor == "transparent") {
        buttonD.style.backgroundColor = "transparent";
        buttonE.style.backgroundColor = "red";
    } else if (buttonE.style.backgroundColor == "red" && buttonD.style.backgroundColor == "transparent") {
        buttonD.style.backgroundColor = "transparent";
        buttonE.style.backgroundColor = "transparent";
    } else if (buttonE.style.backgroundColor == "transparent" && buttonD.style.backgroundColor == "red") {
        buttonD.style.backgroundColor = "transparent";
        buttonE.style.backgroundColor = "red";
    } else {
      buttonE.style.backgroundColor = "transparent";
    }
  });