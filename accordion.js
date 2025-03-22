const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((accordion, index) => {
  accordion.addEventListener("click", function () {
    const isOpen = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", !isOpen);

    let content = this.nextElementSibling;
    content.style.maxHeight = isOpen ? null : content.scrollHeight + "px";
  });

  // Add keyboard support
  accordion.addEventListener("keydown", function (event) {
    const key = event.key;
    if (key === "ArrowDown" || key === "ArrowUp") {
      event.preventDefault();
      const nextIndex = key === "ArrowDown" ? index + 1 : index - 1;
      const nextAccordion = accordionBtns[nextIndex];
      if (nextAccordion) nextAccordion.focus();
    }
    if (key === "Home") {
      event.preventDefault();
      accordionBtns[0].focus();
    }
    if (key === "End") {
      event.preventDefault();
      accordionBtns[accordionBtns.length - 1].focus();
    }
    if (key === "Enter" || key === " ") {
      event.preventDefault();
      this.click();
    }
  });
});
