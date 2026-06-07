const getSumBtn = document.createElement("button");
getSumBtn.innerText = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".prices");
  let total = 0;

  prices.forEach((price) => {
    total += Number(price.innerText);
  });

  document.getElementById("ans").innerText = total;
};

getSumBtn.addEventListener("click", getSum);