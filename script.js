 document.addEventListener("DOMContentLoaded", function () {
            const form = document.querySelector("form");

            form.addEventListener("submit", function (e) {
                e.preventDefault();

                const email = document.getElementById("email").value.trim();
                const password = document.getElementById("password").value.trim();
                const message = document.getElementById("message").value.trim();

                if (!email || !password || !message) {
                    alert("Please fill in all fields.");
                    return;
                }

                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                    alert("Please enter a valid email address.");
                    return;
                }

                if (password.length < 6) {
                    alert("Password should be at least 6 characters.");
                    return;
                }

                alert("Thank you for your message, " + email + "!");
                form.reset();
            });
        });