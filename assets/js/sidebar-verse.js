function addVerse() {
    const sidebarBottom = document.querySelector(".sidebar-bottom");
    if (!sidebarBottom) {
        // Retry if sidebar not yet rendered
        setTimeout(addVerse, 50);
        return;
    }

    if (sidebarBottom.querySelector(".sidebar-verse")) return;

    // Div wrapper
    const verseWrapper = document.createElement("div");
    verseWrapper.className = "w-100 d-flex justify-content-center mt-2";

    // Verse
    const verse = document.createElement("span");
    verse.className = "sidebar-verse";
    verse.textContent = "Colossians 1:13-14";
    verse.title = "He has delivered us from the power of darkness and conveyed us into the kingdom of the Son of His love, in whom we have redemption through His blood, the forgiveness of sins.";

    verseWrapper.appendChild(verse);
    sidebarBottom.appendChild(verseWrapper);
}

// Start when DOM ready
document.addEventListener("DOMContentLoaded", addVerse);