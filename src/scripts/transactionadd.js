const form = document.forms.transactionadd;

const pattern = {
  walletId :/^\d{7}$/,
  money: /^\d+(\.\d{1,2})?$/,
  category: /^[A-Z][a-z]*$/,
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
