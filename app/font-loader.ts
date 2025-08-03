// Font loading utility for consistent font rendering
export function loadFonts() {
  if (typeof window !== "undefined") {
    // Check if fonts are loaded
    const fontCheck = new FontFace("Sequel Sans Display Book", "normal 300");

    fontCheck
      .load()
      .then(() => {
        document.documentElement.classList.add("fonts-loaded");
      })
      .catch(() => {
        // Fallback to system fonts
        document.documentElement.classList.add("fonts-fallback");
      });
  }
}

// Font loading status
export function getFontStatus() {
  if (typeof window !== "undefined") {
    return {
      fontsLoaded: document.documentElement.classList.contains("fonts-loaded"),
      fontsFallback:
        document.documentElement.classList.contains("fonts-fallback"),
    };
  }
  return { fontsLoaded: false, fontsFallback: false };
}
