import React from 'react'
import style from './Button.module.css'

function Button({text, click}) {
  return (
    <button className={style.button} onClick={click}>{text}</button>
  )
}

export default Button