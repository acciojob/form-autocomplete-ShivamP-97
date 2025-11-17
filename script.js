//your JS code here. If required.
const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");

window.addEventListener("load", () => {
  const savedData = JSON.parse(localStorage.getItem("formData"));

  if (savedData) {
    nameInput.value = savedData.name || "";
    emailInput.value = savedData.email || "";
    ageInput.value = savedData.age || "";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    age: ageInput.value,
  };

  localStorage.setItem("formData", JSON.stringify(formData));
  alert("Form data saved!");
});
