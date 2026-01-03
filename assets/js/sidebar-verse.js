document.addEventListener("DOMContentLoaded", function () {
  const sidebarBottom = document.querySelector(".sidebar-bottom");
  if (!sidebarBottom) return;

  // Create the verse element in the sidebar
  const verse = document.createElement("div");
  verse.className = "sidebar-verse w-100 text-center mt-2";
  verse.textContent = "Psalm 42:1";
  sidebarBottom.appendChild(verse);

  // Create tooltip element appended to body
  const tooltip = document.createElement("div");
  tooltip.className = "sidebar-verse-tooltip";
  tooltip.textContent = "As the deer pants for the water brooks, so my soul pants for You, O God.";
  document.body.appendChild(tooltip);

  // Show tooltip on hover
  verse.addEventListener("mouseenter", () => {
    tooltip.style.display = "block";
    const rect = verse.getBoundingClientRect();
    tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + "px";
    tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + "px";
  });

  verse.addEventListener("mouseleave", () => {
    tooltip.style.display = "none";
  });

  // Optional: reposition on scroll
  window.addEventListener("scroll", () => {
    tooltip.style.display = "none";
  });
});
