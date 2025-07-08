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
  {
    id: 1357911,
    name_wallet: "МИР",
    categories: "Книги",
    sum_tranzaction: "210,000",
    when: "вчера вечером",
  },
  {
    id: 2468024,
    name_wallet: "VISA",
    categories: "Домашние животные",
    sum_tranzaction: "560,000",
    when: "4 дня назад",
  },
  {
    id: 1122334,
    name_wallet: "MasterCard",
    categories: "Авто",
    sum_tranzaction: "3,300,000",
    when: "2 недели назад",
  },
  {
    id: 9988776,
    name_wallet: "МИР",
    categories: "Хобби",
    sum_tranzaction: "490,000",
    when: "вчера ночью",
  },
  {
    id: 8877665,
    name_wallet: "VISA",
    categories: "Салоны красоты",
    sum_tranzaction: "1,200,000",
    when: "1 час назад",
  },
  {
    id: 7766554,
    name_wallet: "MasterCard",
    categories: "Игры",
    sum_tranzaction: "670,000",
    when: "6 дней назад",
  },
  {
    id: 6655443,
    name_wallet: "МИР",
    categories: "Канцтовары",
    sum_tranzaction: "150,000",
    when: "только что",
  },
  {
    id: 5544332,
    name_wallet: "VISA",
    categories: "Подписки",
    sum_tranzaction: "250,000",
    when: "вчера в обед",
  },
  {
    id: 4433221,
    name_wallet: "MasterCard",
    categories: "Спорт",
    sum_tranzaction: "900,000",
    when: "8 часов назад",
  },
  {
    id: 3322110,
    name_wallet: "МИР",
    categories: "Мебель",
    sum_tranzaction: "2,800,000",
    when: "месяц назад",
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