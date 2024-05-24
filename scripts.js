console.log("heihei");
console.log("heihei");

const sjekkboksen = document.querySelector("#toggle");
const heleSiden = document.querySelector("#page");

toggle.addEventListener("click", function (event) {
  if (toggle.checked) {
    heleSiden.classList.add("darkmode");
  } else {
    heleSiden.classList.remove("darkmode");
  }
});
