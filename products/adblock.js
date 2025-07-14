window.addEventListener("load", function () {
  setTimeout(function () {
    const bait = document.createElement("div");
    bait.className = "adsbox";
    bait.style.display = "none";
    document.body.appendChild(bait);

    setTimeout(function () {
      if (!bait || bait.offsetParent === null || bait.offsetHeight === 0) {
        // Adblock detected (bait is hidden)
        document.getElementById("adblock-overlay").style.display = "none";
      } else {
        // No adblock → block the content
        document.body.style.overflow = "hidden";
        document.getElementById("adblock-overlay").style.display = "flex";
      }
      bait.remove();
    }, 100);
  }, 500);
});
