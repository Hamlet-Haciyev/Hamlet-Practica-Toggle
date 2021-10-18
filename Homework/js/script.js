let lock = document.getElementById("lock");
let price1 = document.getElementById("price-1");
let price2 = document.getElementById("price-2");
let generalPrice = document.getElementById("general-price");
let card = document.getElementById("card");
let calc = () => {
  return parseFloat(price1.innerText) + parseFloat(price2.innerText);
};

lock.addEventListener("click", (e) => {
  e.preventDefault();
  card.classList.toggle("hide");
  generalPrice.innerText = calc();
});
