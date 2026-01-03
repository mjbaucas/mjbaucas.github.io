document.addEventListener("DOMContentLoaded", function () {
    const sidebarBottom = document.querySelector(".sidebar-bottom");
    if (!sidebarBottom) {
      // Retry after 50ms until sidebar exists
      setTimeout(addVerse, 50);
      return;
    }

    // Create verse element
    const verse = document.createElement("span");
    verse.className = "sidebar-verse";
    verse.textContent = "Psalm 42:1";

    // Add the full verse as a title (native tooltip)
    verse.setAttribute(
        "title",
        "As the deer pants for the water brooks, so my soul pants for You, O God."
    );

    sidebarBottom.appendChild(verse);
});