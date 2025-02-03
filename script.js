document.getElementById("contactForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    const responseMessage = document.getElementById("responseMessage");

    try {
        let response = await fetch("http://localhost:5000/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message })
        });

        let data = await response.json();
        if (data.success) {
            responseMessage.textContent = "Message sent successfully!";
            responseMessage.style.color = "green";
        } else {
            responseMessage.textContent = "Error sending message.";
            responseMessage.style.color = "red";
        }
    } catch (error) {
        console.error("Error:", error);
        responseMessage.textContent = "Something went wrong.";
    }
});
