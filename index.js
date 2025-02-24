var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) { //all elements with class "drum"
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        alert("I got clicked!"); //anonymous function
    });
}
