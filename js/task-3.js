const userNameInput = document.querySelector(`#name-input`);

const userNameOutput = document.querySelector(`#name-output`);


userNameInput.addEventListener("input", () => {
    const trimInputValue = userNameInput.value.trim();

    if (trimInputValue === "") {
        userNameOutput.textContent = "Anonymous";
    } else {
        userNameOutput.textContent = trimInputValue;
    }
    
    });





