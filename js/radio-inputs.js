const year2 = document.getElementById("year2");
const year3 = document.getElementById("year3");
const year4 = document.getElementById("year4");
const year5 = document.getElementById("year5");

const radioButtons = document.querySelectorAll("input[name='book']");

const books2Year = document.querySelector(".books-2year");
console.log(typeof books2Year);
const books3Year = document.querySelector(".books-3year");
const books4Year = document.querySelector(".books-4year");
const books5Year = document.querySelector(".books-5year");

function handleRadioClick() {
  if (year2.checked) {
    books2Year.style.display = "flex";
    books3Year.style.display = "none";
    books4Year.style.display = "none";
    books5Year.style.display = "none";
  } else if (year3.checked) {
    books3Year.style.display = "flex";
    books2Year.style.display = "none";
    books4Year.style.display = "none";
    books5Year.style.display = "none";
  } else if (year4.checked) {
    books4Year.style.display = "flex";
    books2Year.style.display = "none";
    books3Year.style.display = "none";
    books5Year.style.display = "none";
  } else if (year5.checked) {
    books5Year.style.display = "flex";
    books2Year.style.display = "none";
    books3Year.style.display = "none";
    books4Year.style.display = "none";
  }
}

radioButtons.forEach((radio) => {
  radio.addEventListener("click", handleRadioClick);
});
