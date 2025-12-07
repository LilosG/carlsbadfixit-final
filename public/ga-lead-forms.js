// GA4 lead tracking for important forms and click-to-call links
// Requires gtag() from your GA4 snippet (already in BaseLayout.astro)

(function() {
  if (typeof window === "undefined") return;

  function onReady(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  // Track form submits for forms marked with data-ga-lead="true"
  onReady(function() {
    const forms = document.querySelectorAll('form[data-ga-lead="true"]');
    if (!forms.length) return;

    forms.forEach(function(form) {
      if (form.dataset.gaLeadBound === "true") return;
      form.dataset.gaLeadBound = "true";

      form.addEventListener("submit", function() {
        try {
          if (typeof gtag === "function") {
            const formId = form.id || form.getAttribute("name") || "unknown_form";

            gtag("event", "generate_lead", {
              form_id: formId,
              form_name: form.getAttribute("data-ga-form-name") || formId,
              form_location: form.dataset.gaLocation || "unknown_location",
              event_timeout: 2000
            });
          }
        } catch (err) {
          console.error("GA lead tracking error:", err);
        }
      }, { capture: true });
    });
  });

  // Track click-to-call taps on tel: links with data-ga-call="true"
  onReady(function() {
    const callLinks = document.querySelectorAll('a[data-ga-call="true"][href^="tel:"]');
    if (!callLinks.length) return;

    callLinks.forEach(function(link) {
      if (link.dataset.gaCallBound === "true") return;
      link.dataset.gaCallBound = "true";

      link.addEventListener("click", function() {
        try {
          if (typeof gtag === "function") {
            gtag("event", "click_to_call", {
              call_location: link.dataset.gaLocation || "unknown_location",
              phone_number: link.getAttribute("href") || "",
              event_timeout: 2000
            });
          }
        } catch (err) {
          console.error("GA call tracking error:", err);
        }
      }, { capture: true });
    });
  });
})();
