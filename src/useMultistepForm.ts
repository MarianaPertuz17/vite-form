import { ReactElement, useState } from "react";

export function useMultistepForm (steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {

  }

  function back() {

  }

  function goTo(index) {

  }


  return {
    currentStepIndex,
    step: steps[currentStepIndex]
  }
}