var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.classList[0];
        makeSound(buttonInnerHTML);
        showImage(buttonInnerHTML);
    });
}

// Detecta quando a tecla for pressionada.
document.addEventListener("keypress", function (event) {
    var keyPressed = event.key.toLowerCase();
    makeSound(keyPressed);
    showImage(keyPressed);
});

function makeSound(key) {
    switch (key) {
        case "d":
            var leftCrash = new Audio("static/sounds/leftCrash.mp3");
            leftCrash.play();
            break;
        case "e":
            var tom1 = new Audio("static/sounds/tom1.mp3");
            tom1.play();
            break;
        case "v":
            var snare = new Audio("static/sounds/snare.mp3");
            snare.play();
            break;
        case "o":
            var tom3 = new Audio("static/sounds/tom3.mp3");
            tom3.play();
            break;
        case "p":
            var tom2 = new Audio("static/sounds/tom2.mp3");
            tom2.play();
            break;
        case "s":
            var crash = new Audio("static/sounds/rightCrash.mp3");
            crash.play();
            break;
        default:
            console.log("Tecla não reconhecida: " + key);
    }
}

function showImage(key) {
    // Remove a classe 'active' de todos os botões para esconder as imagens
    var allButtons = document.querySelectorAll(".drum");
    allButtons.forEach(function (btn) {
        btn.classList.remove("active");
    });

    // Adiciona a classe 'active' ao botão correspondente
    var activeButton = document.querySelector("." + key);
    if (activeButton) {
        activeButton.classList.add("active");

        // Remove a imagem após um tempo
        setTimeout(function () {
            activeButton.classList.remove("active");
        }, 1000); // A imagem ficará visível por 1 segundo
    }
}
