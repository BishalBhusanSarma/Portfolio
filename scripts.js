document.addEventListener("DOMContentLoaded", () => {
    const readMoreButtons = document.querySelectorAll(".read-more");
    const threeDotButton = document.querySelector(".three-dot-button");
    const menuContent = document.querySelector(".menu-content");
    const themeToggleButton = document.getElementById("theme-toggle");

    // Function to update the theme toggle button text
    const updateThemeToggleButton = () => {
        if (document.body.classList.contains("light-theme")) {
            themeToggleButton.textContent = "Dark";
        } else {
            themeToggleButton.textContent = "Light";
        }
    };

    // Function to reset the three-dot button and menu content
    const resetThreeDotButton = () => {
        menuContent.style.display = "none";
        themeToggleButton.classList.add("hidden"); // Hide the theme toggle button
    };

    // Handle read more button functionality


    readMoreButtons.forEach(button => {
        button.addEventListener("click", () => {
            const description = button.previousElementSibling;
            const dots = description.querySelector(".dots");
            const hiddenText = description.querySelector(".hidden-text");

            const isHidden = hiddenText.style.display === "none" || hiddenText.style.display === "";

            hiddenText.style.display = isHidden ? "inline" : "none";
            dots.style.display = isHidden ? "none" : "inline";
            button.textContent = isHidden ? "Read Less" : "Read Full Description";
        });
    });
});

// Handle three-dot button functionality
if (threeDotButton) {
    threeDotButton.addEventListener("click", () => {
        if (menuContent.style.display === "none" || menuContent.style.display === "") {
            menuContent.style.display = "block";
            themeToggleButton.classList.remove("hidden"); // Show the theme toggle button
        } else {
            resetThreeDotButton();
        }
    });
}

// Handle theme toggle functionality
if (themeToggleButton) {
    themeToggleButton.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
        updateThemeToggleButton();
        resetThreeDotButton(); // Reset the three-dot button and menu content after theme change
    });

    // Set initial button text based on the current theme
    updateThemeToggleButton();
}

// Ensure the theme toggle button is hidden initially
themeToggleButton.classList.add("hidden");
});
