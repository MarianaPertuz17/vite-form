import { FormWrapper } from "../formWrapper";

export function AccountForm() {
  return (
    <FormWrapper title='Account Details'>
      <label>Email</label>
      <input autoFocus required type='email'/>
      <label>Password</label>
      <input required type='password'/>
    </FormWrapper>
  )
}