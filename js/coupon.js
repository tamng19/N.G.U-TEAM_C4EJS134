document.querySelectorAll("#cpnBtn").forEach((button) => {
  button.addEventListener(
    "click",
    () => {
      const codeElement = button.previousElementSibling;
      navigator.clipboard.writeText(codeElement.innerText);
      button.innerHTML = "COPY CODE";
      setTimeout(function () {
        button.innerHTML = "COPIED";
      });
    },
    3000
  );
});
