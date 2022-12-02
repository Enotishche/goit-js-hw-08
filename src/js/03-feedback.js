import throttle from "lodash.throttle";

const formEl = document.querySelector(".feedback-form");
populateInput()

const STORAGE_KEY = 'feedback-form-state';

formEl.addEventListener("input", throttle(onInputChange, 500));
formEl.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault();
    const formData = new formData(formEl);
    formData.forEach((value, name) => console.log(value, name))
    event.currentTarget.reset();
    localStorage.remove(STORAGE_KEY);
}

function onInputChange(event) {
    let persistedFormData = localStorage.getItem(STORAGE_KEY);
    persistedFormData = persistedFormData ? JSON.parse(persistedFormData) : {};
    persistedFormData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(persistedFormData));
}

function populateInput() {
    let persistedFormData = localStorage.getItem(STORAGE_KEY);
    if (persistedFormData) {
        persistedFormData = JSON.parse(persistedFormData);
        Object.entries(persistedFormData).forEach(([name, value]) => {
            formEl.elements[name].value = value;
        })
    }
}