import React from 'react';
import classes from './count.module.css'

export default function count(props) {
  return (
    <div className={classes.countWrap}>
      <span className={classes.count}>Tries: props</span>
    </div>
  )
}
