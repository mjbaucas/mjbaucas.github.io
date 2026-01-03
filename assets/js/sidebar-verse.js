document.addEventListener("DOMContentLoaded", function () {
  const sidebarBottom = document.querySelector(".sidebar-bottom");
  if (sidebarBottom) {
    const verse = document.createElement("div");
    verse.className = "sidebar-verse w-100 text-center mt-2";
    verse.textContent = "Psalm 42:1";
    sidebarBottom.appendChild(verse);

    // create tooltip element
    const tooltip = document.createElement("div");
    tooltip.className = "sidebar-verse-tooltip";
    tooltip.textContent = "As the deer pants for the water brooks, so my soul pants for You, O God.";
    document.body.appendChild(tooltip);

    verse.addEventListener("mouseenter", () => {
      tooltip.style.display = "block";
      const rect = verse.getBoundingClientRect();
      tooltip.style.top = rect.top - tooltip.offsetHeight - 5 + "px";
      tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + "px";
    });

    verse.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });
  }
});