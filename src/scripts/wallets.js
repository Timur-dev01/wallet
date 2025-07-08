const cards = [
  {
    logo: "VISA",
    cardCurrency: "RUB",
    back: "linear-gradient(84.37deg, #20BF55 2.27%, #01BAEF 92.26%)",
  },
  {
    logo: "MasterCard",
    cardCurrency: "USD",
    back: "linear-gradient(84.37deg, #380036 2.27%, #0CBABA 92.26%)",
  },
  {
    logo: "МИР",
    cardCurrency: "RUB",
    back: "linear-gradient(135deg, #6a00b6, #c25ea9)",
  },
  {
    logo: "MasterCard",
    cardCurrency: "RUB",
    back: "linear-gradient(84.37deg, #D7816A 2.27%, #BD4F6C 92.26%)",
  },
  {
    logo: "МИР",
    cardCurrency: "RUB",
    back: "linear-gradient(135deg, #6a00b6, #c25ea9)",
  },
  {
    logo: "VISA",
    cardCurrency: "RUB",
    back: "linear-gradient(84.37deg, #20BF55 2.27%, #01BAEF 92.26%)",
  },
  {
    logo: "VISA",
    cardCurrency: "RUB",
    back: "linear-gradient(84.37deg, #380036 2.27%, #0CBABA 92.26%)",
  },
];

function renderCards(cards) {
  const wallets = document.querySelector(".wallets");

  cards.forEach((card) => {
    const cardDiv = document.createElement("div");
    const logo = document.createElement("div");
    const cardCurrency = document.createElement("div");

    logo.classList.add("logo");
    cardCurrency.classList.add("card-currency");
    cardDiv.classList.add("card");

    logo.textContent = card.logo;
    cardCurrency.textContent = card.cardCurrency;
    cardDiv.style.background = card.back;
    cardDiv.append(logo, cardCurrency);
    wallets.append(cardDiv);
  });
}

renderCards(cards);
