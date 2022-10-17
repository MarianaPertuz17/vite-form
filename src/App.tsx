import { useState } from 'react'
import styles from './styles.module.css'
import { useMultistepForm } from './useMultistepForm'

function App() {

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([<div>One</div>, <div>Two</div>, <div>Three</div>])

  return (
    <div className={styles.container}>
      <form>
        <div className={styles.number}>{currentStepIndex + 1} / {steps.length}</div>
        {step}
        <div className={styles.buttonContainer}>
        {!isFirstStep && <button type='button' onClick={back}>Back</button>}
        <button type='button' onClick={next}>{!isLastStep ? 'Next' : 'Finish'}</button>
      </div>
      </form>
      
    </div>
  )
}

export default App
