import throttle from 'lodash/throttle';

const form = document.querySelector(".feedback-form");
const messageInput = document.querySelector('[name="message"]');
const emailInput = document.querySelector('[name="email"]');
const LOCALSTORAGE_KEY = "feedback-form-state";


fillFormAfterReload();

const throttleFunction = throttle(() => {
     const data = {
        message: messageInput.value,
        email: emailInput.value
     };
    
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
    console.log('throttle')
}, 500);

form.addEventListener('input', () => {

    throttleFunction();
});

form.addEventListener("submit", (evt) => {
     evt.preventDefault();
    
    const savedInput = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    
    localStorage.clear();
    form.reset();

    console.log(savedInput);
});

function fillFormAfterReload() {
    const savedInput = localStorage.getItem(LOCALSTORAGE_KEY);

    if (savedInput) {
        const parsedInput = JSON.parse(savedInput);
        
        messageInput.value = parsedInput.message;
        emailInput.value = parsedInput.email;
    };
}


