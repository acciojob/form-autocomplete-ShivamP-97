window.addEventListener("load", () => {
  const saved = JSON.parse(localStorage.getItem("forms"));

  if (saved && saved.length > 0) {
    const data = saved[0];
    document.getElementById("name").value = data.name || "";
    document.getElementById("email").value = data.email || "";
    document.getElementById("phone").value = data.phone || "";
  }
});

document.getElementById("saveBtn").addEventListener("click", () => {
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value
  };

  localStorage.setItem("forms", JSON.stringify([formData]));

  alert("Form saved!");
});
