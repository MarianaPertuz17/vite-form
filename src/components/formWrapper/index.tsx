import { ReactNode } from "react";
import styles from './styles.module.css';

type FormWrapperProps = {
  title: string,
  children: ReactNode
}

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.children}>{children}</div>
    </>
  )
}