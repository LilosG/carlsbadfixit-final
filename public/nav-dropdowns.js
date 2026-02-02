(() => {
  if (typeof window === "undefined") return;

  const dropdowns = Array.from(document.querySelectorAll("[data-dropdown]"));
  if (!dropdowns.length) return;

  const closeAll = (except) => {
    dropdowns.forEach((dropdown) => {
      if (dropdown === except) return;
      dropdown.dataset.open = "false";
      const trigger = dropdown.querySelector("[data-dropdown-trigger]");
      if (trigger) {
        trigger.setAttribute("aria-expanded", "false");
      }
    });
  };

  dropdowns.forEach((dropdown) => {
    dropdown.dataset.open = "false";
    const trigger = dropdown.querySelector("[data-dropdown-trigger]");
    if (!trigger) return;

    const toggle = (open) => {
      const nextState =
        typeof open === "boolean" ? open : dropdown.dataset.open !== "true";
      dropdown.dataset.open = nextState ? "true" : "false";
      trigger.setAttribute("aria-expanded", nextState ? "true" : "false");
      if (nextState) closeAll(dropdown);
    };

    trigger.addEventListener("click", (event) => {
      if (event.metaKey || event.ctrlKey) return;
      event.preventDefault();
      toggle();
    });

    trigger.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggle();
      }

      if (event.key === "Escape") {
        event.preventDefault();
        toggle(false);
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-dropdown]")) return;
    closeAll();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeAll();
  });
})();
