import axios from "axios";
import { renderLayout } from '../src/layout/layout.js'

const pages = [
  {
    path: "/",
    loadHtml: async (app) => {
      const response = await axios.get("/src/pages/home.html");

      app.innerHTML = response.data;
    },
    loadStyles: async () => {
      await import("../src/styles/home.css");
    },
    loadScripts: async () => {
      await import("../src/scripts/home.js");
    },
  },
  {
    path: "/signin",
    loadHtml: async (app) => {
      const response = await axios.get("/src/pages/signin.html");

      app.innerHTML = response.data;
    },
    loadStyles: async () => {
      await import("../src/styles/sign.css");
    },
    loadScripts: async () => {
      await import("../src/scripts/signin.js");
    },
  },
  {
    path: "/signup",
    loadHtml: async (app) => {
      const response = await axios.get("/src/pages/signup.html");

      app.innerHTML = response.data;
    },
    loadStyles: async () => {
      await import("../src/styles/sign.css");
    },
    loadScripts: async () => {
      await import("../src/scripts/signup.js");
    },
  },
  {
    path: "/transaction",
    loadHtml: async (app) => {
      const response = await axios.get("/src/pages/transaction.html");

      app.innerHTML = response.data;
    },
    loadStyles: async () => {
      await import("../src/styles/transaction.css");
    },
    loadScripts: async () => {
      await import("../src/scripts/transaction.js");
    },
  },
  {
    path: "/wallets",
    loadHtml: async (app) => {
      const response = await axios.get("/src/pages/wallets.html");

      app.innerHTML = response.data;
    },
    loadStyles: async () => {
      await import("../src/styles/wallets.css");
    },
    loadScripts: async () => {
      await import("../src/scripts/wallets.js");
    },
  },
  {
    path: "/walletadd",
    loadHtml: async (app) => {
      const response = await axios.get("/src/pages/walletadd.html");

      app.innerHTML = response.data;
    },
    loadStyles: async () => {
      await import("../src/styles/walletadd.css");
    },
    loadScripts: async () => {
      await import("../src/scripts/walletadd.js");
    },
  },
  {
    path: "/transactionadd",
    loadHtml: async (app) => {
      const response = await axios.get("/src/pages/transactionadd.html");

      app.innerHTML = response.data;
    },
    loadStyles: async () => {
      await import("../src/styles/transactionadd.css");
    },
    loadScripts: async () => {
      await import("../src/scripts/transactionadd.js");
    },
  }
];

async function router() {
  const path = window.location.pathname;
  const app = document.getElementById("app");
  const page = pages.find((elem) => elem.path === path);

  if (!page) {
    return await loadNotFoundPage(app);
  }

  app.style.opacity = '0';

  await new Promise(resolve => setTimeout(resolve, 500));

  await page.loadStyles();
  await page.loadHtml(app);
  await page.loadScripts();
  renderLayout();

  app.style.opacity = '0';

  requestAnimationFrame(() => {
    app.style.opacity = '1'; 
  });
}


router();

