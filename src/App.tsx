import { AccountForm } from './components/accountForm'
import { AddressForm } from './components/addressForm'
import styles from './styles.module.css'
import { useMultistepForm } from './useMultistepForm'
import { UserForm } from './components/useForm'

function App() {

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([<UserForm/>, <AddressForm/>, <AccountForm/>])

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
