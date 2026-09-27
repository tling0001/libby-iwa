document.addEventListener("DOMContentLoaded", () => {
  const frame = document.querySelector("controlledframe");

  if (frame) {
    frame.addEventListener("permissionrequest", (e) => {
      if (e.permission === "fullscreen") {
        e.request.allow();
      }
    });

    frame.addEventListener("newwindow", (e) => {
      window.open(e.targetUrl, "_blank");
      e.preventDefault();
    });
  }

  const closeBtn = document.getElementById("close-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      window.close();
    });
  }
});