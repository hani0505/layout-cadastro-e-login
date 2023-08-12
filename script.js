document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("InputEmail1").value;
    var password = document.getElementById("InputPassword1").value;

    if (username.length >= 4 && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)) {
        window.location.href = ("../../login/login.html")
    } else {
        alert("Nome de usuário ou senha não atendem aos requisitos.");
    }
});