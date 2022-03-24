function login() {

    var email = document.querySelector("#email");
    var password = document.querySelector("#password");

    if(email.value == "admin@admin.com" && password.value == "admin"){
        localStorage.setItem("access", true);
        alert("Usuário autenticado!");
        window.location.href = "index.html";
    }
    else if(email.value != "admin@admin.com"){
        alert("Usuário inválido!");
    }
    else if(password.value != "admin"){
        alert("Senha inválida!");
    }
}