// RealConnect - Mini Demo Script

document.addEventListener('DOMContentLoaded', () => {
    console.log("RealConnect gestartet!");

    // Login Funktion
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username && password) {
                alert(`Willkommen zurück, ${username}!`);
                window.location.href = "feed.html"; // Weiterleitung auf Feed
            } else {
                alert('Bitte Benutzername und Passwort eingeben.');
            }
        });
    }

    // Registrierung Funktion
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (password !== confirmPassword) {
                alert('Passwörter stimmen nicht überein.');
            } else if (username && password) {
                alert(`Registrierung erfolgreich! Willkommen, ${username}!`);
                window.location.href = "login.html"; // Nach Registrierung zum Login
            } else {
                alert('Bitte alle Felder ausfüllen.');
            }
        });
    }

    // Like Buttons im Feed
    const likeButtons = document.querySelectorAll('.post button:first-child');
    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Du hast den Beitrag geliked!');
        });
    });

    // Kommentar Buttons im Feed
    const commentButtons = document.querySelectorAll('.post button:nth-child(2)');
    commentButtons.forEach(button => {
        button.addEventListener('click', () => {
            const comment = prompt('Was möchtest du kommentieren?');
            if (comment) {
                alert('Kommentar gespeichert: ' + comment);
            }
        });
    });
});
