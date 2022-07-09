import React from 'react'
import styles from './Ball.module.css'


const Ball = (props) => {


  const status = styles[props.status];
  return (
    <div className={`${styles.Ball} ${status}`} data-tool-tip={props.msg} style={{"--order" : props.index}}></div>
  )
}

export default Ball