const titles = ["ID", "Карта", "Категория", "Сумма", "Когда"];
const transactions = [
  {
    id: 9876543,
    name_wallet: "MasterCard",
    categories: "Продукты",
    sum_tranzaction: "1,250,000",
    when: "2 часа назад",
  },
  {
    id: 2345678,
    name_wallet: "МИР",
    categories: "Развлечения",
    sum_tranzaction: "320,000",
    when: "вчера",
  },
  {
    id: 3456789,
    name_wallet: "VISA",
    categories: "Одежда",
    sum_tranzaction: "870,000",
    when: "3 дня назад",
  },
  {
    id: 4567890,
    name_wallet: "MasterCard",
    categories: "Рестораны",
    sum_tranzaction: "450,000",
    when: "6 часов назад",
  },
  {
    id: 5678901,
    name_wallet: "МИР",
    categories: "Путешествия",
    sum_tranzaction: "5,500,000",
    when: "неделю назад",
  },
  {
    id: 6789012,
    name_wallet: "VISA",
    categories: "Электроника",
    sum_tranzaction: "3,800,000",
    when: "2 недели назад",
  },
  {
    id: 7890123,
    name_wallet: "MasterCard",
    categories: "Медицина",
    sum_tranzaction: "1,100,000",
    when: "5 дней назад",
  },
  {
    id: 8901234,
    name_wallet: "МИР",
    categories: "Образование",
    sum_tranzaction: "2,000,000",
    when: "3 часа назад",
  },
  {
    id: 9012345,
    name_wallet: "VISA",
    categories: "Коммунальные услуги",
    sum_tranzaction: "760,000",
    when: "вчера утром",
  },
  {
    id: 1234567,
    name_wallet: "MasterCard",
    categories: "Косметика",
    sum_tranzaction: "980,000",
    when: "10 минут назад",
  },
];

function render(transactions) {
  const transactionsDiv = document.querySelector(".transactions");
  const table = document.createElement("table");
  const header = document.createElement("tr");
  titles.forEach((title) => {
    const th = document.createElement("th");
    th.textContent = title;
    header.append(th);
  });
  table.append(header);

  transactions.forEach((transaction) => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");

    td1.textContent = transaction.id;
    td2.textContent = transaction.name_wallet;
    td3.textContent = transaction.categories;
    td4.textContent = transaction.sum_tranzaction;
    td5.textContent = transaction.when;

    tr.append(td1, td2, td3, td4, td5);
    table.append(tr);
  });

  transactionsDiv.append(table);
}

render(transactions);

const cards = [
  {
    logo: "VISA",
    cardCurrency: "RUB",
    back: "linear-gradient(135deg, #6a00b6, #c25ea9)",
  },
  {
    logo: "MasterCard",
    cardCurrency: "USD",
    back: "linear-gradient(135deg, #6a00b6, #c25ea9)",
  },
  {
    logo: "МИР",
    cardCurrency: "RUB",
    back: "linear-gradient(135deg, #6a00b6, #c25ea9)",
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
