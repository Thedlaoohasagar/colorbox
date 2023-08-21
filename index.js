let colors = [
  "red",
  "blue",
  "green",
  "orange",
  "yellow",
  "black",
  "violet",
  "indigo",
  "lightblue",
];
let section;
let aside = document.querySelector("aside");
let heading = document.querySelector("h1");
let shuffle = document.querySelector("button");
displayData();

function changeBody(color, i) {
  displayData();
  document.body.style.backgroundColor = color;
  if (color == "black") {
    section[i].style.border = "2px solid white";
    return;
  }
  section[i].style.border = "2px solid black";
  heading.innerHTML = color;
}

function displayData() {
  let toHtml = colors.map((e) => {
    return `<section>${e}</section>`;
  });
  aside.innerHTML = toHtml.join("");
  section = document.querySelectorAll("section");
  section.forEach((e, i) => {
    e.style.backgroundColor = colors[i];
  });
}

function randomNumber() {
  let random = parseInt(Math.random() * 9);
  return random;
}

setInterval(() => {
  let test = randomNumber();
  changeBody(colors[test], test);
}, 1000);

//shuffle array;

function shuffleArray() {
  let arr = [];
  while (arr.length < 9) {
    let id = randomNumber();
    if (!arr.includes(colors[id])) {
      arr.push(colors[id]);
    }
  }
  console.log(arr);
  colors = arr;
  displayData();
}

shuffle.addEventListener("click", () => shuffleArray());
