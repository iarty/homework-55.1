import React, { Fragment, Component } from 'react';
import Field from './components/field/field';
import ResetButton from './components/resetButton/button';
import SquareGenerate from './squareGenerate';
import Count from './components/counts/count';

export default class App extends Component {
  state = {
    squares: []
  }
  constructor() {
    super();
    this.state.squares = new SquareGenerate().gen()
  }
  render() {
    return (
      <Fragment>
        <Field squares={this.state.squares} />
        <Count />
        <ResetButton />
      </Fragment>
    )
  }
}

