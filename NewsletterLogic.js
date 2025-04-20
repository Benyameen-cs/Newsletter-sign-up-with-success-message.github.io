let emailValue = "";
const emailPattern = /^[^\s@#\$]+@[^\s@#\$]+\.[^\s@#\$]+$/;
const emailInput = document.querySelector("#emailInput");
let newsletterContainer = document.querySelector("#newsletter-container");
let newsletterSuccessContainer = document.querySelector("#newsletter-success-container")
let newsletterFormBtn = document.querySelector("#newsletterFormBtn");
let dismissMessegeBtn = document.querySelector("#dismiss-message");
let tab = false;

emailInput.addEventListener("input", (e) => {
    console.log(e.target.value)
    
    let emailErrorMsg = document.querySelector("#emailErrorMsg");

    if (!emailPattern.test(e.target.value)) {
        emailInput.classList.add("emailInputState-2");
        emailErrorMsg.classList.add("emailErrorState-2");
        emailInput.classList.remove("emailInputState-1");
        emailErrorMsg.classList.remove("emailErrorState-1");
        console.log("error");
        newsletterFormBtn.disabled = true;
    }
    else if (e.target.value === "") {
        emailInput.classList.add("emailInputState-1");
        emailErrorMsg.classList.add("emailErrorState-1");  
        
    }

    else {
        
        emailInput.classList.add("emailInputState-1");
        emailErrorMsg.classList.add("emailErrorState-1");
        emailInput.classList.remove("emailInputState-2");
        emailErrorMsg.classList.remove("emailErrorState-2");
        emailValue = e.target.value
        tab = true;
        newsletterFormBtn.disabled = false;
    }
})

newsletterFormBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (tab) {
        document.querySelector("#showEmail").innerText = emailValue;
        newsletterContainer.classList.add("newsletter-container-hide");
        newsletterSuccessContainer.classList.remove("newsletter-success-container-hide")
        tab = true;
    }
    emailInput.value = "";
    emailValue = "";
    tab = false;

})

dismissMessegeBtn.addEventListener("click", () => {
    newsletterContainer.classList.remove("newsletter-container-hide");
    newsletterSuccessContainer.classList.add("newsletter-success-container-hide");
})

