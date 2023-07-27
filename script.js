let display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        let result = eval(display.value);
        display.value = result;
        fadeInDisplay();
    } catch (error) {
        display.value = "Error";
    }
}

function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}

function fadeInDisplay() {
    display.style.opacity = 0;
    let opacity = 0;
    let timer = setInterval(() => {
        opacity += 0.1;
        display.style.opacity = opacity;
        if (opacity >= 1) {
            clearInterval(timer);
        }
    }, 50);
}
