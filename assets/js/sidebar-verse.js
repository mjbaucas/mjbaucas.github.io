document.addEventListener("DOMContentLoaded", function () {
  function addVerse() {
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

    // Create tooltip
    const tooltip = document.createElement("div");
    tooltip.className = "sidebar-verse-tooltip";
    tooltip.textContent = "As the deer pants for the water brooks, so my soul pants for You, O God.";
    document.body.appendChild(tooltip);

    // Hover show/hide
    verse.addEventListener("mouseenter", () => {
      tooltip.style.display = "block";
      const rect = verse.getBoundingClientRect();
      tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + "px";
      tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + "px";
    });
    verse.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });

    sidebarBottom.appendChild(verse);
  }

  addVerse();
});