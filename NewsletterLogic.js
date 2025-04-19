
const emailPattern = /^[^\s@#\$]+@[^\s@#\$]+\.[^\s@#\$]+$/;
let emailValue = "";
const emailInput = document.querySelector("#emailInput");
let newsletterFormBtn = document.querySelector("#newsletterFormBtn");

emailInput.addEventListener("input", (e) => {
      
    
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
        alert("empty field email required");
    }

    else {
        
        emailInput.classList.add("emailInputState-1");
        emailErrorMsg.classList.add("emailErrorState-1");
        emailInput.classList.remove("emailInputState-2");
        emailErrorMsg.classList.remove("emailErrorState-2");
        emailValue = e.target.value
        newsletterFormBtn.disabled = false;
    }
})

newsletterFormBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(emailValue)    
})

