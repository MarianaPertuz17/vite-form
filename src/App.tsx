import { useState } from 'react'
import styles from './styles.module.css'
import { useMultistepForm } from './useMultistepForm'

function App() {

  const { steps, currentStepIndex, step } = useMultistepForm([<div>One</div>, <div>Two</div>])

  return (
    <div className={styles.container}>
      <form>
        <div className={styles.number}>{currentStepIndex + 1} / {steps.length}</div>
        {step}
      </form>
      
    </div>
  )
}

export default App
