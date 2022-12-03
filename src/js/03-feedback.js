import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";
const formEl = document.querySelector(".feedback-form");
const email = document.querySelector(" .feedback-form input");
const message = document.querySelector(".feedback-form textarea");

const persistedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
populateInput();
formEl.addEventListener("input", throttle(onInputChange, 500));
formEl.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
    // event.preventDefault();
    // const formData = new FormData(formEl);
    // formData.forEach((value, name) => console.log(value, name))
    // event.currentTarget.reset();
    // localStorage.removeItem(STORAGE_KEY);

    event.preventDefault();
    persistedFormData.email = email.value;
    persistedFormData.message = message.value;
    console.log(persistedFormData);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    for (const prop of Object.keys(persistedFormData)) {
        delete persistedFormData[prop];
    }

}

function onInputChange(event) {
    // let persistedFormData = localStorage.getItem(STORAGE_KEY);
    // persistedFormData = persistedFormData ? JSON.parse(persistedFormData) : {};
    // persistedFormData[event.target.name] = event.target.value;
    // localStorage.setItem(STORAGE_KEY, JSON.stringify(persistedFormData));

    
    persistedFormData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(persistedFormData));
    
}

function populateInput() {
    // let persistedFormData = localStorage.getItem(STORAGE_KEY);
    // if (persistedFormData) {
    //     persistedFormData = JSON.parse(persistedFormData);
    //     Object.entries(persistedFormData).forEach(([name, value]) => {
    //         formEl.elements[name].value = value;
    //     })
    // }

    const storageData = localStorage.getItem(STORAGE_KEY);
    const finalData = JSON.parse(storageData);
    if (finalData) {
        email.value = finalData.email || " ";
        message.value = finalData.message || " ";
    }
}

