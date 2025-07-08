const form = document.forms.walletadd;
const pattern = {
  name: /([a-zA-Z0-9_\s]+)/g,
  currency: /^[A-Z]{3}$/,
};

function useValidate(key, value) {
  const regex = new RegExp(pattern[key]);
  const input = form.querySelector(`input[name="${key}"]`);
  input.classList.remove("invalid");

  if (!regex.test(value)) {
    input.classList.add("invalid");
  }
}

form.onsubmit = (e) => {
  e.preventDefault();

  const user = {};
  const fm = new FormData(form);

  fm.forEach((value, key) => {
    user[key] = value;
    useValidate(key, value);
  });
};
