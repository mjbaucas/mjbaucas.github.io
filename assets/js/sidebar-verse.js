const footerText = document.querySelector(".sidebar-footer-text");
if (footerText) {
    const verse = document.createElement("span");
    verse.className = "sidebar-verse";
    verse.textContent = "Psalm 42:1";
    verse.setAttribute(
        "title",
        "As the deer pants for the water brooks, so my soul pants for You, O God."
    );

    footerText.appendChild(document.createElement("br")); // force new line
    footerText.appendChild(verse);
}