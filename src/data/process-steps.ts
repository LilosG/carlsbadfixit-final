export interface ProcessStep {
  step: string;
  title: string;
  body: string;
}

export const homeProcessSteps: ProcessStep[] = [
  {
    step: "1",
    title: "Request an estimate",
    body: "Share your punch list or project details online and include photos if you can.",
  },
  {
    step: "2",
    title: "Schedule your service",
    body: "Pick a time that works for you and get clear expectations before we arrive.",
  },
  {
    step: "3",
    title: "We fix it right",
    body: "Professional, tidy work with attention to detail on every task.",
  },
  {
    step: "4",
    title: "Final walkthrough",
    body: "Review the work together and make sure everything looks and works as it should.",
  },
];
