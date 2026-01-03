document.addEventListener("DOMContentLoaded", function () {
    function addVerse() {
        const sidebarBottom = document.querySelector(".sidebar-bottom");
        if (!sidebarBottom) {
            // Retry after 50ms until sidebar exists
            setTimeout(addVerse, 50);
            return;
        }

        // Create a wrapper div (block-level) to put the verse below buttons
        const verseWrapper = document.createElement("div");
        verseWrapper.className = "sidebar-verse-wrapper";

        // Create the span with title
        const verse = document.createElement("span");
        verse.className = "sidebar-verse";
        verse.textContent = "Psalm 42:1";
        verse.setAttribute(
            "title",
            "As the deer pants for the water brooks, so my soul pants for You, O God."
        );

        // Append the span to the wrapper, then wrapper to sidebar
        verseWrapper.appendChild(verse);
        sidebarBottom.appendChild(verseWrapper);
    }

    addVerse();
});
