document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var message = document.getElementById("message").value.trim();
  var valid = true;

  document.getElementById("success").textContent = "";

  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required";
    valid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  var phonePattern = /^[0-9]{10}$/;
  if (phone === "") {
    document.getElementById("phoneError").textContent = "Phone is required";
    valid = false;
  } else if (!phonePattern.test(phone)) {
    document.getElementById("phoneError").textContent = "Phone must be 10 digits";
    valid = false;
  } else {
    document.getElementById("phoneError").textContent = "";
  }

  if (message === "") {
    document.getElementById("messageError").textContent = "Message is required";
    valid = false;
  } else {
    document.getElementById("messageError").textContent = "";
  }

  if (valid) {
    document.getElementById("success").textContent = "Form submitted successfully!";
    document.getElementById("form").reset();
  }
});
