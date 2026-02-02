// GA4 lead tracking for important forms and click-to-call links
// Requires gtag() from your GA4 snippet (already in BaseLayout.astro)

(function () {
  if (typeof window === "undefined") return;

  function onReady(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  function withTracking(fn) {
    try {
      if (typeof gtag === "function") {
        fn();
      }
    } catch (err) {
      console.error("GA tracking error:", err);
    }
  }

  // Track form submits for forms marked with data-ga-lead="true"
  onReady(function () {
    document.addEventListener(
      "submit",
      function (event) {
        const form = event.target;
        if (!(form instanceof HTMLFormElement)) return;
        if (form.dataset.gaLead !== "true") return;

        withTracking(function () {
          const formId = form.id || form.getAttribute("name") || "unknown_form";

          gtag("event", "generate_lead", {
            form_id: formId,
            form_name: form.getAttribute("data-ga-form-name") || formId,
            form_location: form.dataset.gaLocation || "unknown_location",
            event_timeout: 2000,
          });
        });
      },
      { capture: true },
    );
  });

  // Track click-to-call taps on tel: links with data-ga-call="true"
  onReady(function () {
    document.addEventListener("click", function (event) {
      const link = event.target?.closest(
        'a[data-ga-call="true"][href^="tel:"]',
      );
      if (!link) return;

      withTracking(function () {
        gtag("event", "click_to_call", {
          call_location: link.dataset.gaLocation || "unknown_location",
          phone_number: link.getAttribute("href") || "",
          event_timeout: 2000,
        });
      });
    });
  });
})();
