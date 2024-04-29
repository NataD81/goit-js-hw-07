function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector("#controls");
    const createBtn = controls.querySelector("[data-create]");
    const destroyBtn = controls.querySelector("[data-destroy]");
    const boxesContainer = document.querySelector("#boxes");

    createBtn.addEventListener("click", () => {
      const amount = parseInt(controls.querySelector("input").value);
      if (amount < 1 || amount > 100 || isNaN(amount)) {
        return;
      }
      createBoxes(amount);
      controls.querySelector("input").value = " ";
    });

    destroyBtn.addEventListener("click", () => {
      destroyBoxes();
    });

    function createBoxes(amount) {
      destroyBoxes(); 

      let size = 30;
      for (let i = 0; i < amount; i++) {
        const box = document.createElement("div");
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        box.style.marginBottom = "10px";
        boxesContainer.appendChild(box);
        size += 10;
      }
    }

    function destroyBoxes() {
      boxesContainer.innerHTML = " ";
    }