import { AccountForm } from './components/accountForm'
import { AddressForm } from './components/addressForm'
import styles from './styles.module.css'
import { useMultistepForm } from './useMultistepForm'
import { UserForm } from './components/useForm'
import { FormEvent, useState } from 'react'

type FormData = {
  firstName: string,
  lastName: string,
  age: string,
  street: string,
  city: string,
  state: string,
  zip: string,
  email: string,
  password: string,
}

const INITIAL_DATA: FormData = {
  firstName: '',
  lastName: '',
  age: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  email: '',
  password: '',
}

function App() {
  const [ data, setData ] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<FormData>) { //con el Partial ts vuelve todos los campos de formdata opcionales
    setData(prevData => ({...prevData, ...fields}));
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([<UserForm { ...data } updateField={updateFields}/>, <AddressForm { ...data } updateField={updateFields}/>, <AccountForm { ...data } updateField={updateFields}/>])

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert('Successful Account Creation');
    setData(INITIAL_DATA);
  }

  return (
    <div style={{width: '100vw', height: '100vh', backgroundColor: 'lightgray', display: 'flex', justifyContent:'center', alignItems:'center'}}>
      <div className={styles.container}>
        <form onSubmit={onSubmit}>
          <div className={styles.number}>{currentStepIndex + 1} / {steps.length}</div>
          {step}
          <div className={styles.buttonContainer}>
          {!isFirstStep && <button type='button' onClick={back}>Back</button>}
          <button type='submit'>{!isLastStep ? 'Next' : 'Finish'}</button>
        </div>
        </form>
      </div>
    </div>
    
  )
}

export default App
