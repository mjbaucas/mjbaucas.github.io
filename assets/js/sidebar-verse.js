document.addEventListener("DOMContentLoaded", function () {
  const sidebarBottom = document.querySelector(".sidebar-bottom");
  if (sidebarBottom) {
    const verse = document.createElement("div");
    verse.className = "sidebar-verse w-100 text-center mt-2";
    verse.textContent = "Psalm 42:1";
    verse.setAttribute("data-full", "As the deer pants for the water brooks, so my soul pants for You, O God.");
    sidebarBottom.appendChild(verse);
  }
});