function handleEvent() {
    const messageElement = document.getElementById("message");

    messageElement.textContent = "Button clicked.";
}

const myButton = document.getElementById("myButton");

myButton.addEventListener("click", handleEvent);