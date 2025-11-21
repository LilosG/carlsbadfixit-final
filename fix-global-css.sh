#!/usr/bin/env bash
set -euo pipefail

FILE="src/styles/global.css"

if [ ! -f "$FILE" ]; then
  echo "ERROR: $FILE not found. Make sure you're in the project root."
  exit 1
fi

cat <<'CSS' > "$FILE"
@import "tailwindcss";

@layer base {
  :root {
    color-scheme: light;
    scroll-behavior: smooth;
  }

  body {
    @apply min-h-screen bg-cf-bg text-cf-text antialiased font-sans flex flex-col;
  }

  main {
    @apply flex-1;
  }

  h1 {
    @apply text-h1 font-semibold tracking-tight text-cf-text;
  }

  h2 {
    @apply text-h2 font-semibold tracking-tight text-cf-text;
  }

  h3 {
    @apply text-h3 font-semibold tracking-tight text-cf-text;
  }

  h4 {
    @apply text-lg font-semibold tracking-tight text-cf-text;
  }

  p {
    @apply text-base leading-relaxed text-cf-textMuted;
  }

  a {
    @apply text-cf-accentBlue no-underline underline-offset-4 transition-colors duration-150;
  }

  a:hover {
    @apply text-cf-primaryDark underline;
  }

  a:focus-visible {
    @apply outline-none ring-2 ring-offset-2 ring-cf-primaryDark;
  }

  section {
    @apply py-section md:py-section-lg;
  }

  .eyebrow {
    @apply text-xs font-semibold tracking-[0.16em] uppercase text-cf-accentBlue;
  }
}

@layer components {
  .btn {
    @apply inline-flex items-center justify-center gap-2 rounded-pill border border-transparent px-5 py-2.5 text-sm font-semibold tracking-tight shadow-soft transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cf-primaryDark disabled:cursor-not-allowed disabled:opacity-60;
  }

  .btn-primary {
    @apply btn text-white bg-gradient-to-r from-cf-primary to-cf-warning shadow-cta hover:from-cf-primaryDark hover:to-cf-primaryDark;
  }

  .btn-secondary {
    @apply btn bg-cf-card text-cf-text border border-cf-borderSubtle hover:bg-cf-bg;
  }

  .btn-outline {
    @apply btn bg-transparent text-cf-text border border-cf-borderSubtle hover:bg-cf-card;
  }

  .btn-ghost {
    @apply btn border-none shadow-none bg-transparent text-cf-accentBlue hover:bg-cf-accentBlueSoft;
  }

  .card {
    @apply bg-cf-card rounded-card border border-cf-borderSubtle shadow-soft p-6;
  }

  .card-soft {
    @apply bg-cf-sandSoft rounded-card border border-transparent shadow-soft p-6;
  }

  .section-shell {
    @apply mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8;
  }

  .section-header {
    @apply max-w-2xl space-y-3;
  }

  .section-title {
    @apply text-h1 font-semibold text-cf-text;
  }

  .section-subtitle {
    @apply text-base text-cf-textMuted;
  }

  .badge {
    @apply inline-flex items-center rounded-pill bg-cf-accentBlueSoft px-3 py-1 text-xs font-medium text-cf-accentBlue;
  }

  .badge-muted {
    @apply inline-flex items-center rounded-pill bg-cf-sandSoft px-3 py-1 text-xs font-medium text-cf-textMuted;
  }

  .text-body-sm {
    @apply text-sm leading-relaxed text-cf-textMuted;
  }
}

/* Make cf-* design tokens first-class utilities Tailwind v4 recognizes */
@layer utilities {
  /* Background colors */
  .bg-cf-bg { background-color: #f3f6fb; }
  .bg-cf-sand { background-color: #ffe8c2; }
  .bg-cf-sandSoft { background-color: #fff4dd; }
  .bg-cf-card { background-color: #ffffff; }
  .bg-cf-primary { background-color: #ff7a1a; }
  .bg-cf-primarySoft { background-color: #ffe4c4; }
  .bg-cf-primaryDark { background-color: #f76707; }
  .bg-cf-accentBlue { background-color: #0070c9; }
  .bg-cf-accentBlueSoft { background-color: #e3f0ff; }
  .bg-cf-footer { background-color: #020617; }
  .bg-cf-footerMuted { background-color: #050816; }

  /* Text colors */
  .text-cf-text { color: #0f172a; }
  .text-cf-textMuted { color: #6b7280; }
  .text-cf-accentBlue { color: #0070c9; }
  .text-cf-primaryDark { color: #f76707; }

  /* Borders */
  .border-cf-borderSubtle { border-color: #e2e8f0; }
  .border-cf-borderStrong { border-color: #cbd5e1; }

  /* Shadows */
  .shadow-soft { box-shadow: 0 10px 25px rgba(15, 23, 42, 0.06); }
  .shadow-card { box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08); }
  .shadow-cta { box-shadow: 0 22px 55px rgba(255, 122, 26, 0.45); }

  /* Radii */
  .rounded-card { border-radius: 1.5rem; }
  .rounded-pill { border-radius: 9999px; }
  .rounded-section { border-radius: 2rem; }

  /* Section spacing */
  .py-section { padding-top: 4.5rem; padding-bottom: 4.5rem; }
  .py-section-lg { padding-top: 6rem; padding-bottom: 6rem; }
  .py-section-sm { padding-top: 3.5rem; padding-bottom: 3.5rem; }
}
CSS

echo "Updated $FILE with Tailwind v4-safe design system utilities."
