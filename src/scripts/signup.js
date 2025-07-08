const form = document.forms.signup;

const pattern = {
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
    name: /([a-zA-Z0-9_\s]+)/g,
    surname: /([a-zA-Z0-9_\s]+)/g
};

function useValidate(key, value) {
    const regex = new RegExp(pattern[key]);
    const input = form.querySelector(`input[name="${key}"]`);
    input.classList.remove('invalid');

    if (!regex.test(value)) {
        input.classList.add('invalid');
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
}