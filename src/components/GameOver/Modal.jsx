import React from 'react'
import styles from './Modal.module.css'
import Button from '../Button/Button'
function Modal() {
  return (
    <div className={styles.modal}>
        <h1>Game over!</h1>
        {/* Añadir funcionalidad de cerrar modal */}
        <Button text={"Vuelve a empezar"}/>
    </div>
  )
}

export default Modal