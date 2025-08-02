const formData = {
    email: "",
    message:""
}

const localStorageKey = "feedback-form-state"

const form = document.querySelector(".feedback-form")

const savedData = localStorage.getItem(localStorageKey);
if (savedData) {
    const parsedData = JSON.parse(savedData)
    form.elements.email.value = parsedData.email || ""
    form.elements.message.value = parsedData.message || ""
    formData.email = parsedData.email || ""
    formData.message = parsedData.message || ""
}

form.addEventListener("input", (event) => {
    const email = event.currentTarget.elements.email.value
    const message = event.currentTarget.elements.message.value
    formData.email = email.trim()
    formData.message = message.trim()
    localStorage.setItem(localStorageKey, JSON.stringify(formData))
})

form.addEventListener("submit",(e)=> {
    e.preventDefault();
    if ( formData.email.trim() === "" ||
            formData.message.trim() === "") {
        alert("Fill please all fields")
        return
    }
    console.log(formData);
    
    localStorage.removeItem(localStorageKey);
     formData.email = "";
    formData.message = "";
    form.reset();
})
