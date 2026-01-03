document.addEventListener("DOMContentLoaded", function () {
    const sidebarBottom = document.querySelector(".sidebar-bottom");
    if (!sidebarBottom) {
      // Retry after 50ms until sidebar exists
      setTimeout(addVerse, 50);
      return;
    }

    // Create verse element
    const verse = document.createElement("div");
    verse.className = "sidebar-verse w-100 text-center mt-2";
    verse.textContent = "Psalm 42:1";
    sidebarBottom.appendChild(verse);

    sidebarBottom.setAttribute(
        "title",
        "As the deer pants for the water brooks, so my soul pants for You, O God."
    );
});