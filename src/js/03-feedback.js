import throttle from 'lodash/throttle';

const form = document.querySelector(".feedback-form");
const messageInput = document.querySelector('[name="message"]');
const emailInput = document.querySelector('[name="email"]');
const LOCALSTORAGE_KEY = "feedback-form-state";


fillFormAfterReload();

form.addEventListener('input', throttle(fillForm, 500));

form.addEventListener("submit", (evt) => {
     evt.preventDefault();
    
    const savedInput = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    
    if (savedInput === null || savedInput.message.length === 0 || savedInput.email.length === 0) {
        alert('Все поля должны быть заполнены!')
    } else {
        localStorage.removeItem(LOCALSTORAGE_KEY);
        form.reset();

        console.log(savedInput);
    };
});

function fillForm() {
    const data = {
        message: messageInput.value,
        email: emailInput.value
    };
    
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
    console.log('throttle')
}

function fillFormAfterReload() {
    const savedInput = localStorage.getItem(LOCALSTORAGE_KEY);

    if (savedInput) {
        const parsedInput = JSON.parse(savedInput);
        
        messageInput.value = parsedInput.message;
        emailInput.value = parsedInput.email;
    };
}


