lucide.createIcons();

const time = new Date().getHours();
const welcomeMessage = document.getElementById("welcome-message");

if (time < 12) {
    welcomeMessage.textContent = "Good Morning";
} else if (time < 18) {
    welcomeMessage.textContent = "Good Afternoon";
} else {
    welcomeMessage.textContent = "Good Evening";
}


