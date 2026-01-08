document.addEventListener("DOMContentLoaded", () => {
  const btnLogin = document.getElementById("btn-login");
  const btnRegister = document.getElementById("btn-register");
  const formTitle = document.getElementById("form-title");
  const groupName = document.getElementById("group-name");
  const formSubmit = document.getElementById("form-submit");
  const togglePassword = document.getElementById("toggle-password");
  const passwordInput = document.getElementById("password");

  btnLogin.addEventListener("click", () => {
    btnLogin.classList.add("active");
    btnRegister.classList.remove("active");
    formTitle.textContent = "Entrar na sua conta";
    groupName.style.display = "none";
    formSubmit.textContent = "Entrar";
    togglePassword.style.display = "inline-flex";
  });

  btnRegister.addEventListener("click", () => {
    btnRegister.classList.add("active");
    btnLogin.classList.remove("active");
    formTitle.textContent = "Crie sua conta";
    groupName.style.display = "block";
    formSubmit.textContent = "Registrar";
    togglePassword.style.display = "none";
  });

  // Password visibility
  togglePassword.addEventListener("click", () => {
    const isHidden = passwordInput.type === "password";
    passwordInput.type = isHidden ? "text" : "password";

    togglePassword.innerHTML = ""; 
    const icon = document.createElement("i");
    icon.setAttribute("data-lucide", isHidden ? "eye-off" : "eye");
    togglePassword.appendChild(icon);

    lucide.createIcons();
  });
});
