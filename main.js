let removeButton = document.querySelector("#removeButton");
let addButton = document.querySelector("#addButton");
let countNumber = document.querySelector("#countNumber");
let starArea = document.querySelector(".starArea");
let starContainer = document.querySelector("#starContainer");
let count = 0;

addButton.addEventListener("click", () => {
  count += 1;
  countNumber.innerHTML = count;
  for (let i = count; i === count; i++) {
    const newStar = document.createElement("span");
    newStar.className = "fa fa-star checked fa-lg";
    starContainer.appendChild(newStar);
  }
});

removeButton.addEventListener("click", () => {
  if (count > 0) {
    count -= 1;
    let lastStar = starContainer.lastElementChild;
    lastStar.remove();
  }
  countNumber.innerHTML = count;
});
