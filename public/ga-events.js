// GA4 event tracking for CTA clicks and form submits
(function () {
  if (typeof window === "undefined") return;

  function onReady(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  onReady(function () {
    if (typeof window.gtag !== "function") return;

    const sendEvent = (name, category, label) => {
      window.gtag("event", name, {
        event_category: category,
        event_label: label,
        page_location: window.location.href,
        page_path: window.location.pathname,
        page_title: document.title,
      });
    };

    document.addEventListener("click", (event) => {
      const el = event.target?.closest("[data-ga-event]");
      if (!el) return;
      const name = el.dataset.gaEvent || "custom_click";
      const category = el.dataset.gaCategory || "cta";
      const label = el.dataset.gaLabel || window.location.pathname;
      sendEvent(name, category, label);
    });

    document.addEventListener("submit", (event) => {
      const form = event.target;
      if (!(form instanceof HTMLFormElement)) return;
      if (!form.matches("[data-ga-form-event]")) return;
      const name = form.dataset.gaFormEvent || "form_submit";
      const category = form.dataset.gaCategory || "form";
      const label = form.dataset.gaLabel || window.location.pathname;
      sendEvent(name, category, label);
    });
  });
})();
