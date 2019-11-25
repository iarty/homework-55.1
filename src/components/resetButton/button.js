import React, { Fragment } from 'react';
import classes from './button.module.css'

export default function button() {
  return (
    <Fragment>
      <button className={classes.resetBtn}>Reset</button>
    </Fragment>
  )
}
