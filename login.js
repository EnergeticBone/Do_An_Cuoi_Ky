document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    showLogin();
});

function showLogin() {
    document.querySelector('.container').classList.remove('right-panel-active');
}

function showRegister() {
    document.querySelector('.container').classList.add('right-panel-active');
}

function login(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    alert(`Logged in with Username: ${username} and Password: ${password}`);
}

function register(event) {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const email = document.getElementById('registerEmail').value;
    alert(`Registered with Username: ${username}, Password: ${password}, and Email: ${email}`);
}
