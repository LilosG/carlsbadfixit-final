// GA4 base initialization (requires gtag.js to be loaded)
(function () {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = window.gtag || gtag;
  window.gtag("js", new Date());
  window.gtag("config", "G-8L6X2ZZ5JH");
})();
